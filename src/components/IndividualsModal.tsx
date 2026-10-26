import React, { useState } from 'react';
import {
  X,
  Search,
  Mail,
  User,
  Check,
  Edit2,
  Plus,
  Copy,
  Trash2,
  FileText,
  AlertCircle,
  Building,
  RefreshCw,
} from 'lucide-react';
import { Individual, IndividualRole } from '../types';
import {
  saveIndividuals,
  parsePastedIndividuals,
  DEFAULT_INDIVIDUALS,
} from '../data/individualsData';

interface IndividualsModalProps {
  isOpen: boolean;
  onClose: () => void;
  individuals: Individual[];
  onUpdateIndividuals: (updated: Individual[]) => void;
  selectedCandidateId?: string;
  onSelectCandidate?: (ind: Individual) => void;
}

export function IndividualsModal({
  isOpen,
  onClose,
  individuals,
  onUpdateIndividuals,
  selectedCandidateId,
  onSelectCandidate,
}: IndividualsModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editEmailValue, setEditEmailValue] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [feedbackMsg, setFeedbackMsg] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // New individual form state
  const [activeTab, setActiveTab] = useState<'list' | 'add' | 'paste'>('list');
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newRole, setNewRole] = useState<IndividualRole>('Student Candidate');
  const [newDept, setNewDept] = useState('Nursing Sciences');
  const [newMatric, setNewMatric] = useState('');

  // Paste / Bulk import state
  const [pastedText, setPastedText] = useState('');

  if (!isOpen) return null;

  const showFeedback = (text: string, type: 'success' | 'error' = 'success') => {
    setFeedbackMsg({ text, type });
    window.setTimeout(() => setFeedbackMsg(null), 3500);
  };

  const startEdit = (ind: Individual) => {
    setEditingId(ind.id);
    setEditEmailValue(ind.email);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditEmailValue('');
  };

  const saveEditEmail = (id: string) => {
    const trimmed = editEmailValue.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      showFeedback('Please enter a valid email address (e.g., student@domain.com)', 'error');
      return;
    }

    const updated = individuals.map((ind) => {
      if (ind.id === id) {
        return {
          ...ind,
          email: trimmed,
          lastUpdated: `Updated ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
        };
      }
      return ind;
    });

    onUpdateIndividuals(updated);
    saveIndividuals(updated);
    setEditingId(null);
    showFeedback(`Email successfully updated to ${trimmed}!`);
  };

  const handleCopy = (email: string, id: string) => {
    try {
      navigator.clipboard.writeText(email);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
      showFeedback(`Copied ${email} to clipboard!`);
    } catch {
      // fallback
    }
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Are you sure you want to remove ${name} from the registry?`)) {
      const updated = individuals.filter((ind) => ind.id !== id);
      onUpdateIndividuals(updated);
      saveIndividuals(updated);
      showFeedback(`Removed ${name} from registry.`);
    }
  };

  const handleResetDefaults = () => {
    if (confirm('Reset individuals list back to official defaults? Any custom added entries will be replaced.')) {
      onUpdateIndividuals(DEFAULT_INDIVIDUALS);
      saveIndividuals(DEFAULT_INDIVIDUALS);
      showFeedback('Reset to default official individuals list.');
    }
  };

  const handleAddNew = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newEmail.trim()) {
      showFeedback('Name and Email are required.', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail.trim())) {
      showFeedback('Please enter a valid email address.', 'error');
      return;
    }

    const newIndividual: Individual = {
      id: `ind-${Date.now()}`,
      name: newName.trim(),
      email: newEmail.trim().toLowerCase(),
      role: newRole,
      department: newDept.trim() || 'Nursing Sciences',
      matricNo: newMatric.trim() || `ASCONS/${new Date().getFullYear()}/${Math.floor(100 + Math.random() * 900)}`,
      lastUpdated: 'Newly registered',
    };

    const updated = [newIndividual, ...individuals];
    onUpdateIndividuals(updated);
    saveIndividuals(updated);

    setNewName('');
    setNewEmail('');
    setNewMatric('');
    setActiveTab('list');
    showFeedback(`Added ${newIndividual.name} with email ${newIndividual.email}!`);
  };

  const handleBulkImport = () => {
    if (!pastedText.trim()) {
      showFeedback('Please paste text from screenshots or lists first.', 'error');
      return;
    }

    const parsed = parsePastedIndividuals(pastedText);
    if (parsed.length === 0) {
      showFeedback('No valid emails found in the pasted text. Please include names and email addresses.', 'error');
      return;
    }

    const newEntries: Individual[] = parsed.map((p, idx) => ({
      ...p,
      id: `ind-${Date.now()}-${idx}`,
      matricNo: `ASCONS/IMP/${Math.floor(1000 + Math.random() * 9000)}`,
    }));

    const updated = [...newEntries, ...individuals];
    onUpdateIndividuals(updated);
    saveIndividuals(updated);

    setPastedText('');
    setActiveTab('list');
    showFeedback(`Successfully attached ${newEntries.length} individuals with their emails!`);
  };

  // Filtered list
  const filtered = individuals.filter((ind) => {
    const matchesSearch =
      ind.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ind.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (ind.matricNo && ind.matricNo.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (ind.department && ind.department.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesRole = roleFilter === 'all' || ind.role === roleFilter;

    return matchesSearch && matchesRole;
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="individuals-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs"
    >
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4 bg-slate-50/70 dark:bg-slate-950/40">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">
                Official Directory & Candidate Registry
              </span>
            </div>
            <h2
              id="individuals-modal-title"
              className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white"
            >
              Individuals & Attached Emails
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
              Check, update, and manage email addresses attached to each individual (student candidates, leadership, and exam officers).
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close directory"
            className="min-h-[40px] min-w-[40px] rounded-xl flex items-center justify-center text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Feedback Alert */}
        {feedbackMsg && (
          <div
            className={`px-4 py-2.5 text-xs sm:text-sm font-semibold flex items-center gap-2 border-b ${
              feedbackMsg.type === 'success'
                ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800'
                : 'bg-red-50 dark:bg-red-950/60 text-red-800 dark:text-red-200 border-red-200 dark:border-red-800'
            }`}
          >
            {feedbackMsg.type === 'success' ? (
              <Check className="w-4 h-4 shrink-0 text-emerald-600" />
            ) : (
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
            )}
            <span>{feedbackMsg.text}</span>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 px-4 sm:px-6 pt-3 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <button
            type="button"
            onClick={() => setActiveTab('list')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'list'
                ? 'border-emerald-600 text-emerald-700 dark:border-emerald-400 dark:text-emerald-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            <span>All Individuals ({individuals.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('add')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'add'
                ? 'border-emerald-600 text-emerald-700 dark:border-emerald-400 dark:text-emerald-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Individual</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('paste')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'paste'
                ? 'border-emerald-600 text-emerald-700 dark:border-emerald-400 dark:text-emerald-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Paste from Screenshots</span>
          </button>
        </div>

        {/* Tab 1: Individuals List & Email Update */}
        {activeTab === 'list' && (
          <div className="flex-1 flex flex-col min-h-0">
            {/* Search and Filters */}
            <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between bg-slate-50/50 dark:bg-slate-950/20">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search individual by name, email, matric no, or department..."
                  className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:border-emerald-600"
                />
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                  className="min-h-[38px] px-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-hidden focus:border-emerald-600"
                >
                  <option value="all">All Roles</option>
                  <option value="Student Candidate">Student Candidates</option>
                  <option value="Administration">Administration</option>
                  <option value="Exam Officer">Exam Officers</option>
                  <option value="Faculty">Faculty</option>
                </select>

                <button
                  type="button"
                  onClick={handleResetDefaults}
                  title="Reset to official list"
                  className="min-h-[38px] px-3 py-1.5 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Reset Defaults</span>
                </button>
              </div>
            </div>

            {/* List Table / Cards */}
            <div className="flex-1 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800 p-2 sm:p-4">
              {filtered.length === 0 ? (
                <div className="text-center py-12 px-4 text-slate-500 dark:text-slate-400">
                  <User className="w-10 h-10 mx-auto mb-2 opacity-40" />
                  <p className="font-semibold text-sm">No individuals found matching "{searchQuery}".</p>
                  <p className="text-xs mt-1">Try a different search term or add a new individual.</p>
                </div>
              ) : (
                filtered.map((ind) => {
                  const isEditing = editingId === ind.id;
                  const isSelected = selectedCandidateId === ind.id;

                  return (
                    <div
                      key={ind.id}
                      className={`p-3.5 sm:p-4 rounded-xl transition-colors mb-2 border ${
                        isSelected
                          ? 'border-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/30'
                          : 'border-slate-200/70 dark:border-slate-800/80 bg-white dark:bg-slate-850/60 hover:bg-slate-50/80 dark:hover:bg-slate-800/40'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        {/* Left Info: Name, Role Badge, Dept */}
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="font-display font-bold text-base text-slate-900 dark:text-white">
                              {ind.name}
                            </span>

                            <span
                              className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${
                                ind.role === 'Administration'
                                  ? 'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300'
                                  : ind.role === 'Exam Officer'
                                  ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                                  : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                              }`}
                            >
                              {ind.role}
                            </span>

                            {ind.matricNo && (
                              <span className="font-mono-tabular text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                                {ind.matricNo}
                              </span>
                            )}
                          </div>

                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                            {ind.department && (
                              <span className="flex items-center gap-1">
                                <Building className="w-3.5 h-3.5 shrink-0" />
                                <span>{ind.department}</span>
                              </span>
                            )}
                            {ind.lastUpdated && (
                              <span className="italic">
                                {ind.lastUpdated}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Right: Actions */}
                        <div className="flex items-center gap-2 shrink-0">
                          {onSelectCandidate && (
                            <button
                              type="button"
                              onClick={() => {
                                onSelectCandidate(ind);
                                onClose();
                              }}
                              className={`min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                                isSelected
                                  ? 'bg-emerald-700 text-white'
                                  : 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 hover:bg-emerald-100'
                              }`}
                            >
                              {isSelected ? 'Active Candidate' : 'Set as Exam Candidate'}
                            </button>
                          )}

                          <button
                            type="button"
                            onClick={() => handleDelete(ind.id, ind.name)}
                            title={`Delete ${ind.name}`}
                            className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Email Section & In-Place Editor */}
                      <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        {isEditing ? (
                          <div className="flex-1 flex items-center gap-2">
                            <div className="relative flex-1">
                              <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                              <input
                                type="email"
                                value={editEmailValue}
                                onChange={(e) => setEditEmailValue(e.target.value)}
                                autoFocus
                                placeholder="Enter email address..."
                                className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm rounded-lg border border-emerald-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden"
                              />
                            </div>
                            <button
                              type="button"
                              onClick={() => saveEditEmail(ind.id)}
                              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                            >
                              <Check className="w-3.5 h-3.5" />
                              <span>Save Email</span>
                            </button>
                            <button
                              type="button"
                              onClick={cancelEdit}
                              className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <div className="flex flex-wrap items-center justify-between w-full gap-2">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                                Attached Email:
                              </span>
                              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                                <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                <span className="font-mono text-xs font-semibold text-slate-900 dark:text-slate-100 select-all">
                                  {ind.email}
                                </span>
                              </div>

                              <button
                                type="button"
                                onClick={() => handleCopy(ind.email, ind.id)}
                                title="Copy email address"
                                className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                              >
                                {copiedId === ind.id ? (
                                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                                ) : (
                                  <Copy className="w-3.5 h-3.5" />
                                )}
                              </button>
                            </div>

                            <button
                              type="button"
                              onClick={() => startEdit(ind)}
                              className="min-h-[32px] px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-emerald-500 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/40 flex items-center gap-1.5 transition-colors cursor-pointer"
                            >
                              <Edit2 className="w-3 h-3" />
                              <span>Update Email</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Add New Individual */}
        {activeTab === 'add' && (
          <form onSubmit={handleAddNew} className="p-4 sm:p-6 overflow-y-auto space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Salome Y. Tarfa, or Student Name"
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Attached Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="e.g. sonmyola@yahoo.com"
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Role
                </label>
                <select
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value as IndividualRole)}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-emerald-600"
                >
                  <option value="Student Candidate">Student Candidate</option>
                  <option value="Administration">Administration</option>
                  <option value="Exam Officer">Exam Officer</option>
                  <option value="Faculty">Faculty / Instructor</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Department
                </label>
                <input
                  type="text"
                  value={newDept}
                  onChange={(e) => setNewDept(e.target.value)}
                  placeholder="e.g. Nursing Sciences or Provost Office"
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-emerald-600"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Matric / Examination Number (Optional)
                </label>
                <input
                  type="text"
                  value={newMatric}
                  onChange={(e) => setNewMatric(e.target.value)}
                  placeholder="e.g. ASCONS/2023/NS/088"
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-emerald-600"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveTab('list')}
                className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white text-sm font-bold tracking-wide transition-colors cursor-pointer shadow-xs"
              >
                Attach Individual & Email
              </button>
            </div>
          </form>
        )}

        {/* Tab 3: Paste from Screenshots / OCR / Spreadsheets */}
        {activeTab === 'paste' && (
          <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
            <div className="p-4 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
              <h3 className="text-sm font-bold text-emerald-900 dark:text-emerald-200 mb-1">
                Fast Screenshot / Document Paste Import
              </h3>
              <p className="text-xs text-emerald-800 dark:text-emerald-300 leading-relaxed">
                If you have text or OCR copy from the screenshots you sent, paste it below. Each line should contain a name and an email address (e.g., <code className="font-mono bg-emerald-100 dark:bg-emerald-900 px-1 py-0.5 rounded">John Doe - john@example.com</code> or <code className="font-mono bg-emerald-100 dark:bg-emerald-900 px-1 py-0.5 rounded">jane@example.com, Jane Smith</code>). The parser will automatically extract and attach the emails to each individual!
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Paste Text Here (One individual per line)
              </label>
              <textarea
                rows={6}
                value={pastedText}
                onChange={(e) => setPastedText(e.target.value)}
                placeholder={`Example:
Salome Y. Tarfa - sonmyola@yahoo.com
Aliyu Bello - aliyu.bello@adconsyola.edu.ng
Amina Garba, amina.garba@gmail.com`}
                className="w-full p-3 font-mono text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-emerald-600"
              />
            </div>

            <div className="pt-2 flex items-center justify-between gap-3">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Found {parsePastedIndividuals(pastedText).length} valid email pairings in input.
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('list')}
                  className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleBulkImport}
                  disabled={parsePastedIndividuals(pastedText).length === 0}
                  className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs sm:text-sm font-bold tracking-wide transition-colors cursor-pointer shadow-xs"
                >
                  Import & Attach All
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="p-3.5 sm:p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span>Official College Mail Relay:</span>
            <span className="font-mono text-slate-700 dark:text-slate-300 font-semibold">
              sonmyola@yahoo.com · mhixta.emmy001@gmail.com
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold cursor-pointer transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
