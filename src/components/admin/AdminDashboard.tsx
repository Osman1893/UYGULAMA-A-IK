import React, { useState } from 'react';
import { 
  ShieldCheck, 
  BookOpen, 
  Users, 
  AlertTriangle, 
  CheckCircle2, 
  Trash2, 
  Edit3, 
  Plus, 
  Search, 
  Volume2, 
  Download, 
  Upload, 
  FileText, 
  Rocket, 
  Settings, 
  Activity, 
  Sparkles,
  Save,
  X,
  RefreshCw,
  ExternalLink,
  ChevronRight,
  Database
} from 'lucide-react';
import { 
  Unit, 
  Lesson, 
  VocabItem, 
  UserProfile, 
  TranslationErrorTicket, 
  AuditLogItem, 
  AppReleaseMetadata,
  CefrLevel 
} from '../../types';
import { storageService, SUPER_ADMIN_EMAIL } from '../../services/storageService';
import { audioService } from '../../services/audioService';

interface AdminDashboardProps {
  user: UserProfile;
  units: Unit[];
  onUnitsChange: (units: Unit[]) => void;
  onExitAdmin: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  user,
  units,
  onUnitsChange,
  onExitAdmin
}) => {
  const [activeModule, setActiveModule] = useState<
    'overview' | 'curriculum' | 'vocabulary' | 'tickets' | 'users' | 'audit' | 'release'
  >('overview');

  // Tickets state
  const [tickets, setTickets] = useState<TranslationErrorTicket[]>(storageService.getErrorTickets());
  const [auditLogs, setAuditLogs] = useState<AuditLogItem[]>(storageService.getAuditLogs());
  const [appConfig, setAppConfig] = useState<AppReleaseMetadata>(storageService.getAppConfig());

  // Search & Filter
  const [vocabSearch, setVocabSearch] = useState('');
  const [editingWord, setEditingWord] = useState<VocabItem | null>(null);

  // New Unit Modal
  const [isNewUnitModalOpen, setIsNewUnitModalOpen] = useState(false);
  const [newUnitLevel, setNewUnitLevel] = useState<CefrLevel>('A2');
  const [newUnitTitleTr, setNewUnitTitleTr] = useState('');
  const [newUnitTitleKz, setNewUnitTitleKz] = useState('');
  const [newUnitDescTr, setNewUnitDescTr] = useState('');
  const [newUnitDescKz, setNewUnitDescKz] = useState('');

  // New Word Modal
  const [isNewWordModalOpen, setIsNewWordModalOpen] = useState(false);
  const [newWordTargetUnitId, setNewWordTargetUnitId] = useState(units[0]?.id || '');
  const [newWordTargetLessonId, setNewWordTargetLessonId] = useState(units[0]?.lessons[0]?.id || '');
  const [newWordKzCyrillic, setNewWordKzCyrillic] = useState('');
  const [newWordKzLatin, setNewWordKzLatin] = useState('');
  const [newWordTurkish, setNewWordTurkish] = useState('');
  const [newWordCategory, setNewWordCategory] = useState('Genel');
  const [newWordExampleKz, setNewWordExampleKz] = useState('');
  const [newWordExampleTr, setNewWordExampleTr] = useState('');
  const [newWordFalseFriend, setNewWordFalseFriend] = useState('');

  // Handle Save Word Edit
  const handleSaveWordEdit = () => {
    if (!editingWord) return;
    storageService.updateVocabEverywhere(editingWord.id, editingWord);
    onUnitsChange(storageService.getUnits());
    setAuditLogs(storageService.getAuditLogs());
    setEditingWord(null);
  };

  // Handle Create Unit
  const handleCreateUnit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUnitTitleTr || !newUnitTitleKz) return;

    storageService.createUnit({
      unitNumber: units.length + 1,
      level: newUnitLevel,
      direction: 'TR_TO_KZ',
      titleTr: newUnitTitleTr,
      titleKz: newUnitTitleKz,
      descriptionTr: newUnitDescTr,
      descriptionKz: newUnitDescKz,
      icon: 'BookOpen',
      isPublished: true,
      lessons: []
    });

    onUnitsChange(storageService.getUnits());
    setAuditLogs(storageService.getAuditLogs());
    setIsNewUnitModalOpen(false);
    setNewUnitTitleTr('');
    setNewUnitTitleKz('');
    setNewUnitDescTr('');
    setNewUnitDescKz('');
  };

  // Handle Delete Unit
  const handleDeleteUnit = (unitId: string) => {
    if (confirm('Bu üniteyi ve içindeki dersleri silmek istediğinizden emin misiniz?')) {
      storageService.deleteUnit(unitId);
      onUnitsChange(storageService.getUnits());
      setAuditLogs(storageService.getAuditLogs());
    }
  };

  // Handle Create Word
  const handleCreateWord = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWordKzCyrillic || !newWordTurkish) return;

    storageService.addWordToLesson(newWordTargetUnitId, newWordTargetLessonId, {
      kazakhCyrillic: newWordKzCyrillic,
      kazakhLatin: newWordKzLatin || newWordKzCyrillic,
      turkish: newWordTurkish,
      phoneticGuide: newWordKzLatin.toLowerCase(),
      partOfSpeech: 'noun',
      exampleKazakh: newWordExampleKz,
      exampleTurkish: newWordExampleTr,
      category: newWordCategory,
      falseFriendWarning: newWordFalseFriend || undefined
    });

    onUnitsChange(storageService.getUnits());
    setAuditLogs(storageService.getAuditLogs());
    setIsNewWordModalOpen(false);
    setNewWordKzCyrillic('');
    setNewWordKzLatin('');
    setNewWordTurkish('');
    setNewWordExampleKz('');
    setNewWordExampleTr('');
    setNewWordFalseFriend('');
  };

  // Handle Ticket Resolution
  const handleResolveTicket = (ticket: TranslationErrorTicket, action: 'resolved' | 'rejected') => {
    if (action === 'resolved') {
      // Find and update word in all vocabularies
      const allVocab = storageService.getAllVocabulary();
      const match = allVocab.find(v => 
        v.kazakhCyrillic.toLowerCase() === ticket.wordOrPhrase.toLowerCase()
      );
      if (match) {
        storageService.updateVocabEverywhere(match.id, {
          turkish: ticket.suggestedCorrection
        });
      }
    }
    storageService.resolveErrorTicket(ticket.id, action, 'Super Admin tarafından doğrulandı ve güncellendi.');
    setTickets(storageService.getErrorTickets());
    setAuditLogs(storageService.getAuditLogs());
    onUnitsChange(storageService.getUnits());
  };

  // JSON Export / Backup
  const handleExportDatabase = () => {
    const data = {
      appName: 'Uzaktan Turkolog',
      exportDate: new Date().toISOString(),
      adminEmail: SUPER_ADMIN_EMAIL,
      units: storageService.getUnits(),
      tickets: storageService.getErrorTickets(),
      auditLogs: storageService.getAuditLogs(),
      appConfig: storageService.getAppConfig()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `uzaktan-turkolog-yedek-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
  };

  const allVocabulary = storageService.getAllVocabulary();
  const filteredVocab = allVocabulary.filter(v => 
    v.kazakhCyrillic.toLowerCase().includes(vocabSearch.toLowerCase()) ||
    v.turkish.toLowerCase().includes(vocabSearch.toLowerCase()) ||
    v.category.toLowerCase().includes(vocabSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      
      {/* Super Admin Top Header */}
      <header className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-6 py-3.5 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/20">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-black tracking-tight text-white">
                UZAKTAN TÜRKOLOG • SUPER ADMIN KONTROL MERKEZİ
              </h1>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-extrabold uppercase">
                Aktif ve Yetkili
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              Sistem Sahibi: <span className="text-amber-400 font-bold">{SUPER_ADMIN_EMAIL}</span> (Tüm yetkiler tanımlı)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleExportDatabase}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition"
            title="Tüm veritabanını JSON olarak indir"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Yedek Al (JSON)</span>
          </button>

          <button
            onClick={onExitAdmin}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-extrabold shadow-sm transition"
          >
            <span>Öğrenci Moduna Dön</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Admin Navigation Bar */}
      <div className="bg-slate-950 border-b border-slate-800 px-6 flex items-center gap-2 overflow-x-auto select-none">
        {[
          { id: 'overview', label: '📊 Genel Bakış', icon: Activity },
          { id: 'curriculum', label: '📚 Müfredat & Dersler', icon: BookOpen },
          { id: 'vocabulary', label: '📖 Sözlük & Kelime CMS', icon: FileText },
          { id: 'tickets', label: `🚨 Hata Bildirimleri (${tickets.filter(t => t.status === 'pending').length})`, icon: AlertTriangle },
          { id: 'users', label: '👥 Kullanıcılar & Roller', icon: Users },
          { id: 'audit', label: '📜 Denetim Kayıtları', icon: RefreshCw },
          { id: 'release', label: '🚀 Mağaza Yayın Paketi', icon: Rocket },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveModule(tab.id as any)}
            className={`py-3 px-3.5 text-xs font-bold border-b-2 whitespace-nowrap transition flex items-center gap-1.5 ${
              activeModule === tab.id
                ? 'border-amber-400 text-amber-300 bg-amber-500/10'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
            }`}
          >
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Admin Content Area */}
      <main className="flex-1 p-6 max-w-7xl w-full mx-auto space-y-6">
        
        {/* ========================================================= */}
        {/* 1. MODULE: OVERVIEW (GENEL BAKIŞ) */}
        {/* ========================================================= */}
        {activeModule === 'overview' && (
          <div className="space-y-6">
            
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-slate-800/80 border border-slate-700/80 p-5 rounded-2xl shadow-sm">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                  Toplam Ünite & Ders
                </span>
                <div className="text-3xl font-black text-white mt-1">
                  {units.length} Ünite / {units.reduce((acc, u) => acc + u.lessons.length, 0)} Ders
                </div>
                <span className="text-[11px] text-teal-400 font-bold mt-2 block">
                  A2 ve B1 Tam Müfredat Aktif
                </span>
              </div>

              <div className="bg-slate-800/80 border border-slate-700/80 p-5 rounded-2xl shadow-sm">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                  Kayıtlı Sözlük Kelimesi
                </span>
                <div className="text-3xl font-black text-white mt-1">
                  {allVocabulary.length}
                </div>
                <span className="text-[11px] text-cyan-400 font-bold mt-2 block">
                  Kiril + Latin + Fonetik Destekli
                </span>
              </div>

              <div className="bg-slate-800/80 border border-slate-700/80 p-5 rounded-2xl shadow-sm">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                  Bekleyen Çeviri Bildirimi
                </span>
                <div className="text-3xl font-black text-amber-400 mt-1">
                  {tickets.filter(t => t.status === 'pending').length}
                </div>
                <span className="text-[11px] text-slate-400 font-bold mt-2 block">
                  İncelenmeye hazır talepler
                </span>
              </div>

              <div className="bg-slate-800/80 border border-slate-700/80 p-5 rounded-2xl shadow-sm">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                  Admin Yetki Seviyesi
                </span>
                <div className="text-xl font-black text-emerald-400 mt-1 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Süper Admin (Sahip)</span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium mt-2 block truncate">
                  {SUPER_ADMIN_EMAIL}
                </span>
              </div>
            </div>

            {/* Quick Actions & System Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-slate-800/60 border border-slate-700 p-6 rounded-3xl space-y-4">
                <h3 className="text-sm font-black text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Hızlı Yönetim İşlemleri</span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      setActiveModule('curriculum');
                      setIsNewUnitModalOpen(true);
                    }}
                    className="p-3.5 bg-slate-700 hover:bg-slate-600 rounded-2xl text-left border border-slate-600 transition"
                  >
                    <Plus className="w-5 h-5 text-teal-400 mb-1" />
                    <div className="text-xs font-bold text-white">Yeni Ünite Ekle</div>
                    <div className="text-[10px] text-slate-400">A2 veya B1 seviyesine</div>
                  </button>

                  <button
                    onClick={() => {
                      setActiveModule('vocabulary');
                      setIsNewWordModalOpen(true);
                    }}
                    className="p-3.5 bg-slate-700 hover:bg-slate-600 rounded-2xl text-left border border-slate-600 transition"
                  >
                    <Plus className="w-5 h-5 text-amber-400 mb-1" />
                    <div className="text-xs font-bold text-white">Yeni Kelime Ekle</div>
                    <div className="text-[10px] text-slate-400">Sözlüğe anında kaydet</div>
                  </button>

                  <button
                    onClick={() => setActiveModule('tickets')}
                    className="p-3.5 bg-slate-700 hover:bg-slate-600 rounded-2xl text-left border border-slate-600 transition"
                  >
                    <AlertTriangle className="w-5 h-5 text-rose-400 mb-1" />
                    <div className="text-xs font-bold text-white">Hataları İncele</div>
                    <div className="text-[10px] text-slate-400">Kullanıcı geri bildirimleri</div>
                  </button>

                  <button
                    onClick={() => setActiveModule('release')}
                    className="p-3.5 bg-slate-700 hover:bg-slate-600 rounded-2xl text-left border border-slate-600 transition"
                  >
                    <Rocket className="w-5 h-5 text-indigo-400 mb-1" />
                    <div className="text-xs font-bold text-white">Yayın Hazırlığı</div>
                    <div className="text-[10px] text-slate-400">Play Store & App Store</div>
                  </button>
                </div>
              </div>

              <div className="bg-slate-800/60 border border-slate-700 p-6 rounded-3xl space-y-3">
                <h3 className="text-sm font-black text-white flex items-center gap-2">
                  <Database className="w-4 h-4 text-emerald-400" />
                  <span>Sistem ve Veritabanı Mimarisi</span>
                </h3>
                <div className="text-xs space-y-2 text-slate-300">
                  <div className="flex justify-between py-1 border-b border-slate-700">
                    <span className="text-slate-400">Uygulama Adı:</span>
                    <span className="font-bold text-white">Uzaktan Turkolog</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-700">
                    <span className="text-slate-400">Pedagojik Çerçeve:</span>
                    <span className="font-bold text-white">CEFR A2 & B1 Kazakistan Müfredatı</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-700">
                    <span className="text-slate-400">Dil Yönleri:</span>
                    <span className="font-bold text-teal-400">TR ➔ KZ & KZ ➔ TR (Çift Yönlü)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-700">
                    <span className="text-slate-400">Yedekleme ve Kurtarma:</span>
                    <span className="font-bold text-emerald-400">Yerel + JSON Dışa Aktarma Aktif</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Güvenlik ve Yetkilendirme:</span>
                    <span className="font-bold text-amber-400">Super Admin Koruması (En Yüksek Düzey)</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* 2. MODULE: CURRICULUM & LESSONS (MÜFREDAT VE DERSLER) */}
        {/* ========================================================= */}
        {activeModule === 'curriculum' && (
          <div className="space-y-4">
            
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-black text-white">Müfredat ve Ders Yönetimi</h2>
                <p className="text-xs text-slate-400">Üniteleri, dersleri, kazanımları ve gramer notlarını yönetin.</p>
              </div>
              <button
                onClick={() => setIsNewUnitModalOpen(true)}
                className="flex items-center gap-1.5 px-3.5 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-xl text-xs font-bold transition shadow-xs"
              >
                <Plus className="w-4 h-4" />
                <span>Yeni Ünite Ekle</span>
              </button>
            </div>

            <div className="space-y-4">
              {units.map((unit) => (
                <div key={unit.id} className="bg-slate-800/80 border border-slate-700 rounded-2xl overflow-hidden shadow-xs">
                  
                  {/* Unit Title Bar */}
                  <div className="px-5 py-3.5 bg-slate-900 border-b border-slate-700 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 bg-amber-500 text-slate-950 font-black rounded text-[11px]">
                        {unit.level}
                      </span>
                      <div>
                        <h3 className="text-sm font-black text-white">{unit.titleTr}</h3>
                        <p className="text-xs text-teal-400 font-medium">{unit.titleKz}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400 mr-2">
                        {unit.lessons.length} Ders Kayıtlı
                      </span>
                      <button
                        onClick={() => handleDeleteUnit(unit.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-400 transition"
                        title="Üniteyi Sil"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Lessons Inside Unit */}
                  <div className="divide-y divide-slate-700/60 p-2">
                    {unit.lessons.map(lesson => (
                      <div key={lesson.id} className="px-4 py-3 flex items-center justify-between hover:bg-slate-700/30 rounded-xl transition">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-slate-700 text-slate-300 flex items-center justify-center text-[10px] font-bold">
                              {lesson.lessonNumber}
                            </span>
                            <span className="text-xs font-bold text-white">{lesson.titleTr}</span>
                            <span className="text-xs text-slate-400">({lesson.titleKz})</span>
                          </div>
                          <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1 ml-7">
                            {lesson.summaryTr}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 text-xs">
                          <span className="text-[11px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded">
                            {lesson.vocabulary.length} Kelime
                          </span>
                          <span className="text-[11px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded">
                            {lesson.exercises.length} Alıştırma
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* 3. MODULE: VOCABULARY & DICTIONARY CMS */}
        {/* ========================================================= */}
        {activeModule === 'vocabulary' && (
          <div className="space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-base font-black text-white">Sözlük ve Kelime Editörü</h2>
                <p className="text-xs text-slate-400">
                  Kazakça Kiril, Latin ve Türkçe karşılıkları doğrudan düzenleyin.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsNewWordModalOpen(true)}
                  className="flex items-center gap-1.5 px-3 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-extrabold transition"
                >
                  <Plus className="w-4 h-4" />
                  <span>Yeni Kelime Ekle</span>
                </button>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Kelime ara (Kiril, Latin veya Türkçe)..."
                value={vocabSearch}
                onChange={(e) => setVocabSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-800 border border-slate-700 rounded-2xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* Vocabulary Table */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-900 border-b border-slate-700 text-slate-400 uppercase text-[10px] font-extrabold">
                    <tr>
                      <th className="px-4 py-3">Kazakça (Kiril)</th>
                      <th className="px-4 py-3">Kazakça (Latin)</th>
                      <th className="px-4 py-3">Türkçe Anlamı</th>
                      <th className="px-4 py-3">Kategori</th>
                      <th className="px-4 py-3">Yalancı Eşdeğerlik</th>
                      <th className="px-4 py-3 text-right">İşlemler</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/60">
                    {filteredVocab.map(word => (
                      <tr key={word.id} className="hover:bg-slate-750 transition">
                        <td className="px-4 py-3 font-extrabold text-white flex items-center gap-2">
                          <span>{word.kazakhCyrillic}</span>
                          <button
                            onClick={() => audioService.speak(word.kazakhCyrillic, 'kk')}
                            className="text-slate-400 hover:text-amber-400"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                        <td className="px-4 py-3 text-slate-300 font-mono text-[11px]">
                          {word.kazakhLatin}
                        </td>
                        <td className="px-4 py-3 font-bold text-teal-400">
                          {word.turkish}
                        </td>
                        <td className="px-4 py-3 text-slate-400">
                          <span className="px-2 py-0.5 rounded bg-slate-900 text-[10px]">
                            {word.category}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-amber-300 text-[11px] max-w-[200px] truncate">
                          {word.falseFriendWarning || '—'}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button
                            onClick={() => setEditingWord({ ...word })}
                            className="p-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 transition"
                            title="Düzenle"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* 4. MODULE: TRANSLATION ERROR TICKETS */}
        {/* ========================================================= */}
        {activeModule === 'tickets' && (
          <div className="space-y-4">
            
            <div>
              <h2 className="text-base font-black text-white">Çeviri Hata Bildirimleri</h2>
              <p className="text-xs text-slate-400">
                Kullanıcıların bildirdiği yanlış çevirileri inceleyin ve 1 tıkla sözlüğü güncelleyin.
              </p>
            </div>

            <div className="space-y-3">
              {tickets.map(ticket => (
                <div 
                  key={ticket.id}
                  className={`p-5 rounded-2xl border transition ${
                    ticket.status === 'pending'
                      ? 'bg-slate-800 border-amber-500/50 shadow-md'
                      : 'bg-slate-800/40 border-slate-700 opacity-70'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 text-[10px] font-extrabold uppercase rounded ${
                          ticket.status === 'pending' ? 'bg-amber-500 text-slate-950' : 'bg-emerald-500 text-white'
                        }`}>
                          {ticket.status === 'pending' ? 'İnceleme Bekliyor' : 'Çözüldü'}
                        </span>
                        <span className="text-xs text-slate-400">
                          {ticket.reportedByName} ({ticket.reportedByEmail})
                        </span>
                      </div>

                      <div className="mt-3 grid grid-cols-2 gap-4 text-xs">
                        <div className="p-3 bg-slate-900 rounded-xl">
                          <span className="text-[10px] text-slate-500 block uppercase font-bold">Mevcut Kayıt</span>
                          <span className="font-black text-white text-sm">{ticket.wordOrPhrase}</span>
                          <span className="text-slate-400 ml-2">➔ {ticket.currentTranslation}</span>
                        </div>
                        <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl">
                          <span className="text-[10px] text-emerald-400 block uppercase font-bold">Önerilen Doğru Karşılık</span>
                          <span className="font-black text-emerald-300 text-sm">{ticket.suggestedCorrection}</span>
                        </div>
                      </div>

                      {ticket.explanation && (
                        <p className="text-xs text-slate-300 mt-2 bg-slate-900/50 p-2.5 rounded-xl border border-slate-700/50">
                          💡 <span className="font-bold">Kullanıcı Açıklaması:</span> {ticket.explanation}
                        </p>
                      )}
                    </div>

                    {/* Actions */}
                    {ticket.status === 'pending' && (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleResolveTicket(ticket, 'rejected')}
                          className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-300 text-xs font-bold rounded-xl transition"
                        >
                          Reddet
                        </button>
                        <button
                          onClick={() => handleResolveTicket(ticket, 'resolved')}
                          className="px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black rounded-xl transition shadow-sm"
                        >
                          Onayla ve Sözlüğü Güncelle ✓
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* 5. MODULE: USERS & ROLES */}
        {/* ========================================================= */}
        {activeModule === 'users' && (
          <div className="space-y-4">
            <div>
              <h2 className="text-base font-black text-white">Kullanıcı ve Rol Yönetimi</h2>
              <p className="text-xs text-slate-400">
                Rol tabanlı yetkilendirme (Super Admin, Admin, Editör, İncelemeci, Kullanıcı).
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl overflow-hidden p-4 space-y-3">
              <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center">
                    👑
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white">{SUPER_ADMIN_EMAIL}</h4>
                    <span className="text-[10px] text-amber-400 font-bold uppercase">
                      BAŞ ADMİN / SİSTEM SAHİBİ (DOKUNULMAZ YETKİ)
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-amber-500 text-slate-950 text-xs font-black rounded-lg">
                  Süper Yönetici
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 6. MODULE: AUDIT LOGS */}
        {/* ========================================================= */}
        {activeModule === 'audit' && (
          <div className="space-y-4">
            <div>
              <h2 className="text-base font-black text-white">Sistem Denetim Kayıtları (Audit Logs)</h2>
              <p className="text-xs text-slate-400">Tüm yönetimsel değişikliklerin zaman damgalı güvenlik günlüğü.</p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden divide-y divide-slate-700/60">
              {auditLogs.map(log => (
                <div key={log.id} className="p-4 flex items-start justify-between text-xs">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 font-mono text-[10px]">
                        {log.module}
                      </span>
                      <span className="font-bold text-white">{log.action}</span>
                      <span className="text-slate-400 text-[11px]">• {log.userEmail}</span>
                    </div>
                    <p className="text-slate-300 mt-1">{log.details}</p>
                  </div>
                  <span className="text-[10px] text-slate-500 whitespace-nowrap">
                    {new Date(log.timestamp).toLocaleString('tr-TR')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 7. MODULE: STORE RELEASE HUB (MAĞAZA YAYINLAMA MERKEZİ) */}
        {/* ========================================================= */}
        {activeModule === 'release' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-base font-black text-white">Google Play ve App Store Yayınlama Merkezi</h2>
              <p className="text-xs text-slate-400">
                Uygulamanın mağazalara sorunsuz yüklenebilmesi için gerekli tüm paket bilgileri ve yapılandırmalar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Android Config */}
              <div className="bg-slate-800 border border-slate-700 p-5 rounded-2xl space-y-3">
                <h3 className="text-sm font-black text-white flex items-center gap-2">
                  <span>🤖</span>
                  <span>Google Play (Android) Yapılandırması</span>
                </h3>
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Paket Adı (Package ID):</span>
                    <span className="font-mono text-teal-400 font-bold">{appConfig.packageNameAndroid}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Hedef SDK (Target SDK):</span>
                    <span className="font-bold text-white">Android 14 (API 34) - Play Store Uyumlu</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Derleme Formatı:</span>
                    <span className="font-bold text-emerald-400">Android App Bundle (.aab)</span>
                  </div>
                </div>
              </div>

              {/* iOS Config */}
              <div className="bg-slate-800 border border-slate-700 p-5 rounded-2xl space-y-3">
                <h3 className="text-sm font-black text-white flex items-center gap-2">
                  <span>🍎</span>
                  <span>Apple App Store (iOS) Yapılandırması</span>
                </h3>
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Bundle Identifier:</span>
                    <span className="font-mono text-cyan-400 font-bold">{appConfig.bundleIdIos}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">iOS Minimum Sürüm:</span>
                    <span className="font-bold text-white">iOS 15.0+</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Gizlilik ve Veri Güvenliği:</span>
                    <span className="font-bold text-emerald-400">Hesap Silme ve RLS Kuralları Hazır</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* ========================================================= */}
      {/* MODAL: EDIT WORD MODAL */}
      {/* ========================================================= */}
      {editingWord && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="w-full max-w-lg bg-slate-900 border border-slate-700 rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-white">Kelimeyi Düzenle</h3>
              <button onClick={() => setEditingWord(null)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="text-slate-400 block mb-1">Kazakça (Kiril):</label>
                <input
                  type="text"
                  value={editingWord.kazakhCyrillic}
                  onChange={(e) => setEditingWord({ ...editingWord, kazakhCyrillic: e.target.value })}
                  className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white font-bold"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Kazakça (Latin):</label>
                <input
                  type="text"
                  value={editingWord.kazakhLatin}
                  onChange={(e) => setEditingWord({ ...editingWord, kazakhLatin: e.target.value })}
                  className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Türkçe Anlamı:</label>
                <input
                  type="text"
                  value={editingWord.turkish}
                  onChange={(e) => setEditingWord({ ...editingWord, turkish: e.target.value })}
                  className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white font-bold"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Yalancı Eşdeğerlik Uyarısı (False Friend):</label>
                <input
                  type="text"
                  value={editingWord.falseFriendWarning || ''}
                  onChange={(e) => setEditingWord({ ...editingWord, falseFriendWarning: e.target.value })}
                  placeholder="Örn: Türkçedeki kelimeyle karıştırılmamalı..."
                  className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-amber-300"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  onClick={() => setEditingWord(null)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl"
                >
                  İptal
                </button>
                <button
                  onClick={handleSaveWordEdit}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl"
                >
                  Değişiklikleri Kaydet ✓
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: NEW UNIT MODAL */}
      {/* ========================================================= */}
      {isNewUnitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <form onSubmit={handleCreateUnit} className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-white">Yeni Ünite Oluştur</h3>
              <button type="button" onClick={() => setIsNewUnitModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="text-slate-400 block mb-1">CEFR Seviyesi:</label>
                <select
                  value={newUnitLevel}
                  onChange={(e) => setNewUnitLevel(e.target.value as CefrLevel)}
                  className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white font-bold"
                >
                  <option value="A1">A1</option>
                  <option value="A2">A2</option>
                  <option value="B1">B1</option>
                  <option value="B2">B2</option>
                  <option value="C1">C1</option>
                </select>
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Ünite Başlığı (Türkçe):</label>
                <input
                  type="text"
                  placeholder="Örn: Ünite 5: Seyahat ve Ulaşım"
                  value={newUnitTitleTr}
                  onChange={(e) => setNewUnitTitleTr(e.target.value)}
                  className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white"
                  required
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Ünite Başlığı (Kazakça):</label>
                <input
                  type="text"
                  placeholder="Örn: 5-бөлім: Саяхат және көлік"
                  value={newUnitTitleKz}
                  onChange={(e) => setNewUnitTitleKz(e.target.value)}
                  className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white"
                  required
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsNewUnitModalOpen(false)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 font-bold rounded-xl"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white font-black rounded-xl"
                >
                  Üniteyi Kaydet ✓
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: NEW WORD MODAL */}
      {/* ========================================================= */}
      {isNewWordModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <form onSubmit={handleCreateWord} className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-white">Sözlüğe Yeni Kelime Ekle</h3>
              <button type="button" onClick={() => setIsNewWordModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="text-slate-400 block mb-1">Eklenecek Ünite:</label>
                <select
                  value={newWordTargetUnitId}
                  onChange={(e) => {
                    setNewWordTargetUnitId(e.target.value);
                    const u = units.find(unit => unit.id === e.target.value);
                    if (u && u.lessons[0]) setNewWordTargetLessonId(u.lessons[0].id);
                  }}
                  className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white font-bold"
                >
                  {units.map(u => (
                    <option key={u.id} value={u.id}>{u.titleTr}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Kazakça (Kiril):</label>
                <input
                  type="text"
                  placeholder="Қазақша жазылуы..."
                  value={newWordKzCyrillic}
                  onChange={(e) => setNewWordKzCyrillic(e.target.value)}
                  className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white"
                  required
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Kazakça (Latin):</label>
                <input
                  type="text"
                  placeholder="Latynsha jazyluy..."
                  value={newWordKzLatin}
                  onChange={(e) => setNewWordKzLatin(e.target.value)}
                  className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Türkçe Anlamı:</label>
                <input
                  type="text"
                  placeholder="Türkçe karşılığı..."
                  value={newWordTurkish}
                  onChange={(e) => setNewWordTurkish(e.target.value)}
                  className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white"
                  required
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Kategori:</label>
                <input
                  type="text"
                  placeholder="Örn: Yiyecekler, Selamlaşma, İş..."
                  value={newWordCategory}
                  onChange={(e) => setNewWordCategory(e.target.value)}
                  className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsNewWordModalOpen(false)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 font-bold rounded-xl"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl"
                >
                  Kelimeyi Ekle ✓
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

    </div>
  );
};
