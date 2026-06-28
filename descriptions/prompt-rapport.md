# Prompt pour génération du rapport Rafiki — رفيقي (Version LaTeX)

> **À utiliser avec un LLM pour générer un rapport académique complet au format LaTeX**
> **Cible : 25-35 pages**

---

## Contexte

Tu es un assistant chargé de rédiger un **rapport académique complet** sur un projet de fin d'études intitulé **"Rafiki — رفيقي — Moroccan Adaptive AI Tutor"**. Le projet est une plateforme de tutorat adaptatif basée sur l'IA, destinée aux élèves marocains du 2ème année Baccalauréat, couvrant l'ensemble des matières du Bac marocain (Mathématiques, Physique-Chimie, Sciences de la Vie et de la Terre, Sciences de l'Ingénieur, Sciences Économiques, Philosophie, Arabe, Anglais, Français, Éducation Islamique, Histoire-Géographie...).

Le MVP actuel couvre 3 matières (Maths, Physique-Chimie, Anglais) mais l'architecture est conçue pour être étendue à toutes les matières.

Tu dois générer un fichier **LaTeX (.tex)** complet, bien structuré, que l'étudiant pourra compiler pour obtenir un rapport PDF prêt à soumettre à son professeur.

---

## Instructions générales

1. Génère le rapport complet en **français** (sauf termes techniques et l'abstract en anglais).
2. Structure le rapport selon le plan détaillé ci-dessous.
3. Rédige un contenu riche, précis et professionnel — **25-35 pages** une fois compilé.
4. Utilise un style formel et académique.
5. Inclus des **diagrammes ASCII** et des **tableaux** là où c'est pertinent.
6. Ajoute des **conclusions partielles** à la fin de chaque section majeure.
7. Toutes les captures d'écran sont en **placeholders** : `\includegraphics[width=\textwidth]{screenshots/chat.png}` — l'étudiant ajoutera les images après.

---

## Plan de la table des matières

### Page de garde

```latex
\title{\textbf{Rafiki — رفيقي \\ Moroccan Adaptive AI Tutor} \\
\large Plateforme de Tutorat Adaptatif par Intelligence Artificielle \\
pour les Élèves du 2ème Baccalauréat Marocain}
\author{[Nom de l'étudiant]} \\
\date{[Établissement] \\ [Encadrant / Professeur] \\ Année universitaire [202X-202Y]}
```

- Titre : « Rafiki — رفيقي — Moroccan Adaptive AI Tutor »
- Sous-titre : « Plateforme de Tutorat Adaptatif par Intelligence Artificielle pour les Élèves du 2ème Baccalauréat Marocain »
- Nom de l'étudiant, Établissement, Encadrant/Professeur, Année universitaire
- Type de document : Projet de Fin d'Études / Exposé / Rapport de Projet

### Résumé (200-300 mots)
- Synthèse : objectif, problématique, solution, résultats
- Mots-clés : IA, tutorat adaptatif, RAG, fine-tuning, 2ème Bac, Maroc, OCR, LoRA

### Abstract (English version)
- Same content in English

### Table des matières (automatique)
### Liste des figures
### Liste des tableaux

---

## Contenu détaillé par section

---

### 1. Introduction

#### 1.1 Contexte et motivation
- **État de l'éducation au Maroc** : classes nombreuses (40+ élèves), manque de soutien individualisé, pression des examens nationaux (Bac), ressources limitées
- **Problème identifié** : absence d'un outil numérique gratuit, adapté spécifiquement au curriculum marocain et capable de fournir un tutorat personnalisé
- **Solutions existantes** :
  - Khan Academy : contenu excellent mais non adapté au programme marocain
  - ChatGPT/Gemini : réponses généralistes, pas ancrées dans le curriculum officiel
  - Plateformes marocaines : souvent payantes, pas de tutorat IA
- **Motivation** : pourquoi ce projet ? Démocratiser l'accès à un tuteur IA gratuit et pertinent pour les élèves marocains

#### 1.2 Problématique
- **Question centrale** : « Comment offrir un accompagnement scolaire personnalisé, gratuit et adapté au curriculum marocain aux élèves de 2ème Bac ? »
- **Sous-questions** :
  - Comment ancrer les réponses de l'IA dans le contenu officiel du programme ?
  - Comment rendre l'outil accessible sans frais pour les étudiants (100% free-tier) ?
  - Comment traiter le format multilingue (français, anglais, arabe) ?
  - Comment gérer l'OCR de documents manuscrits ou imprimés ?

#### 1.3 Objectifs du projet
- **Principal** : Développer un tuteur IA capable de répondre aux questions des élèves en s'appuyant uniquement sur le curriculum officiel marocain
- **Secondaires** :
  - Correction automatique d'exercices avec OCR
  - Consultation du Cadre Référenciel (الإطار المرجعي)
  - Visualisation des cours officiels avec rendu LaTeX
  - Génération d'exercices et examens par IA
  - Architecture 100% free-tier (zéro coût de déploiement)
  - Base de connaissances pré-construite (prête à l'emploi, aucun upload nécessaire)

#### 1.4 Cahier des charges
- **Fonctionnel** :
  - Chat Q&A avec RAG (réponses pas-à-pas, ancrées dans le programme)
  - Correction d'exercices (upload PDF/image → OCR → IA → correction)
  - Consultation du Cadre Référenciel (arbre d'objectifs interactif)
  - Visualisation des cours (markdown + LaTeX avec KaTeX)
  - Génération d'exercices par matière et chapitre
  - Génération d'examens basée sur des sujets réels du Bac
  - Mémoire de conversation (session-based, 20 messages)
- **Technique** :
  - Base de connaissances vectorielle (ChromaDB) pré-construite
  - Modèle de langage fine-tuné (LoRA sur Qwen2.5-1.5B)
  - OCR via Vision LLM (Qwen2.5-VL-3B)
  - Architecture 3 serveurs : Frontend (Vercel) + Backend (Kaggle) + Stockage (HuggingFace)
  - Localtunnel pour exposition API HTTPS

#### 1.5 Périmètre du projet
- **Inclus (MVP)** :
  - 3 matières : Mathématiques, Physique-Chimie, Anglais
  - Niveau : 2ème Bac
  - Langues : français (Maths/Physique), anglais (English)
  - 6 fonctionnalités : Chat, Correction, Cadre, Cours, Exercices, Examens
- **Vision long terme** :
  - Extension à toutes les matières du Bac marocain (SVT, SI, SES, Philosophie, Arabe, Français, Histoire-Géo, Éducation Islamique...)
  - Extension aux autres niveaux (1ère Bac, Tronc Commun, Collège)
  - Application mobile native
  - Mode hors-ligne
- **Limites actuelles** :
  - Mémoire session-based uniquement (pas de persistance)
  - Dépendance à Localtunnel pour l'exposition API
  - Version gratuite Kaggle : sessions limitées (9h max)

---

### 2. Planification & Conception du Projet

#### 2.1 Phases du projet
Présenter un tableau chronologique des 7 phases :

| Phase | Nom | Durée | Livrable principal |
|-------|-----|-------|-------------------|
| 1 | Extraction PDF → Markdown | ~2 semaines | 24 fichiers Markdown + chunks.json |
| 2 | RAG Knowledge Base | ~1 semaine | Index ChromaDB + push HuggingFace |
| 3 | Fine-Tuning LLM | ~2 semaines | Modèle LoRA fine-tuné |
| 4 | Backend FastAPI | ~1 semaine | API REST avec 3 endpoints |
| 4.5 | Live OCR & Session RAG | ~1 semaine | OCR local GPU + mémoire session |
| 5 | Frontend Next.js | ~2 semaines | 7 pages UI + design Stitch |
| 6 | Intégration E2E | ~1 semaine | Tests frontend↔backend |
| 7 | Feature Expansion | ~1 semaine | Cadre, Cours, Exercices, Examens |

#### 2.2 Diagramme de Gantt (ASCII)
Représenter les phases sur une frise chronologique.

#### 2.3 Choix techniques justifiés
- **Pourquoi Qwen2.5-1.5B ?** Modèle small mais performant, tient sur T4 15GB en 4-bit, good performance en français/anglais
- **Pourquoi LoRA ?** Fine-tuning efficace (seulement 0.1-1% des paramètres), rapide, évite le catastrophic forgetting
- **Pourquoi ChromaDB ?** Open-source, performant, facile à déployer, pas de serveur dédié
- **Pourquoi 3 serveurs ?** Séparation des responsabilités, coût zéro (tous free-tier), scalabilité individuelle
- **Pourquoi Kaggle ?** GPU gratuits (T4 15GB), notebooks Python, idéal pour prototypage

---

### 3. Pipeline IA : Collecte, Préparation & Fine-Tuning

#### 3.1 Phase 1 — Extraction des PDFs → Markdown structuré
- **Source** : Documents officiels du 2ème Bac (cours, exercices, examens)
- **Documents traités** : ~8 documents par matière × 3 matières = 24 documents
- **Pipeline** :
  1. PyMuPDF pour extraction texte basique
  2. Qwen2.5-VL pour OCR des zones complexes (formules, figures, tableaux)
  3. Segmentation automatique par leçon, théorème, exercice
  4. Conversion en Markdown structuré
- **Difficultés rencontrées** :
  - ❌ **Problème** : Les PDFs officiels contiennent des formules mathématiques mal formatées, des tableaux non structurés, des schémas non extractibles
  - ✅ **Solution** : Utilisation d'agents multiples (un par type de contenu) pour diviser le travail, puis regroupement dans un dataset unifié
  - ❌ **Problème** : Aucun dataset pré-existant adapté au curriculum marocain
  - ✅ **Solution** : Création manuelle assistée par IA — distillation depuis des modèles plus grands + vérification humaine
  - ❌ **Problème** : Les PDFs ne contiennent pas toujours tout le contenu nécessaire (certains chapitres incomplets)
  - ✅ **Solution** : Complétion via recherches web et sources officielles supplémentaires
- **Résultat** : Fichiers Markdown propres + `chunks.json` par matière, pusher sur HuggingFace

#### 3.2 Phase 2 — Construction de la base RAG (ChromaDB)
- **Objectif** : Index sémantique pour retrieval instantané et pertinent
- **Processus** :
  1. Embedding des chunks Markdown via sentence-transformers
  2. Indexation dans ChromaDB avec métadonnées (matière, chapitre, type)
  3. Optimisation de la taille des chunks pour préserver les formules mathématiques
  4. Chevauchement (overlap) entre chunks pour éviter la perte de contexte
- **Difficultés rencontrées** :
  - ❌ **Problème** : Taille de chunk difficile à optimiser — trop petit = perte de contexte, trop grand = bruit dans le retrieval
  - ✅ **Solution** : Tests empiriques avec différentes tailles, validation sur des requêtes types
  - ❌ **Problème** : Les chunks de formules mathématiques perdaient leur sens après embedding
  - ✅ **Solution** : Segmentation par blocs sémantiques (un théorème = un chunk) plutôt que par taille fixe
- **Push HuggingFace** : Dataset `Saad-Elouakate/AI-Adaptive-Learning-Index` contenant l'index ChromaDB complet
- **Résultat** : Collection ChromaDB avec 3 collections (maths_2bac, physics_2bac, english_2bac)

#### 3.3 Phase 3 — Fine-Tuning du LLM
- **Modèle de base** : `Qwen/Qwen2.5-1.5B-Instruct`
- **Méthode** : LoRA (Low-Rank Adaptation) via PEFT
  - Rang : 32
  - Alpha : 64
  - Target modules : q_proj, k_proj, v_proj, o_proj
- **Création du dataset Q&A** :
  - Pas de dataset existant pour le style pédagogique marocain
  - Création manuelle de paires Q&A : question élève → réponse pas-à-pas (style professeur)
  - Distillation depuis des modèles plus grands (Qwen2.5-7B, 14B) pour accélérer
  - Format : instruction en français/anglais → réponse avec démonstration complète
- **Entraînement** :
  - 3 epochs, learning rate 2e-4
  - Batch size adapté à la mémoire T4 (gradient accumulation)
- **Difficultés rencontrées** :
  - ❌ **Problème** : Le modèle de base répond dans un style trop généraliste, pas adapté au curriculum marocain
  - ✅ **Solution** : Dataset d'exemples spécifiques avec la terminologie exacte du programme
  - ❌ **Problème** : OOM (Out of Memory) avec le modèle en full precision sur T4 15GB
  - ✅ **Solution** : Quantification 4-bit avec bitsandbytes — le modèle passe de ~3GB à ~900MB
  - ❌ **Problème** : Le fine-tuning ne convergeait pas correctement (loss stagnante)
  - ✅ **Solution** : Ajustement du learning rate, ajout de warmup steps, correction du dataset
- **Push HuggingFace** : Modèle `Saad-Elouakate/rafiki-qwen-2.5-finetune`
- **Résultat** : `rafiki-qwen-2.5-finetune` — répond avec la terminologie exacte du programme, démonstrations complètes pas-à-pas

#### 3.4 Phase 4 — Développement du Backend FastAPI
- **Architecture** : FastAPI + Uvicorn, déploiement initial sur HuggingFace Spaces puis migration vers Kaggle
- **Endpoints (version initiale)** :
  - `POST /api/ask` → Question → RAG → LLM → Réponse
  - `POST /api/correct` → Exercice → OCR → LLM → Correction
  - `POST /api/upload` → PDF/Image → OCR → Texte → Session ChromaDB
- **Mémoire de conversation** : Dictionnaire in-memory `{session_id: [{role, content}]}`, 20 messages/session, 500 sessions max avec éviction LRU
- **Difficultés rencontrées** :
  - ❌ **Problème** : HuggingFace Inference API coûte cher à l'usage (payant après le quota gratuit)
  - ✅ **Solution** : Migration vers Kaggle avec modèles locaux sur GPU — coût zéro
  - ❌ **Problème** : Pas de serveur/GPU local disponible pour l'inférence
  - ✅ **Solution** : Utilisation de Kaggle Notebooks comme serveur backend (solution de contournement originale)

#### 3.5 Phase 4.5 — OCR Temps Réel & Session RAG
- **Modèle** : `Qwen2.5-VL-3B-Instruct` sur GPU 1
- **Quantification** : 4-bit (bitsandbytes) pour tenir sur T4 15GB
- **Pipeline OCR** :
  1. Réception du fichier (PDF/Image)
  2. Conversion en images (si PDF → PyMuPDF)
  3. Envoi au Vision LLM pour extraction
  4. Textes extraits → embeddings → ChromaDB éphémère
- **Session RAG** : Base vectorielle temporaire fusionnée avec la base globale
- **Difficultés rencontrées** :
  - ❌ **Problème** : Deux modèles (texte + vision) ne tiennent pas sur un seul GPU (OOM)
  - ✅ **Solution** : Dual T4 — un modèle par GPU, quantification 4-bit pour les deux
  - ❌ **Problème** : Latence élevée de l'OCR (10-30s par page)
  - ✅ **Solution** : Traitement asynchrone, cache des résultats OCR pour les mêmes documents
- **Résultat** : OCR local, gratuit, confidentiel (données élèves jamais envoyées à un service externe)

#### 3.6 Phase 5 — Développement du Frontend Next.js
- **Technologie** : Next.js 16 (App Router), JavaScript, Tailwind CSS
- **Design** : Templates premium Stitch, interface responsive mobile-first
- **Pages développées** :
  - `/` → Landing page
  - `/chat` → Q&A Chat avec mémoire de conversation, paramètre `?q=` pour auto-submit
  - `/correction` → Upload et correction d'exercices avec rendu LaTeX via KaTeX
  - `/cadre` → Consultation du Cadre Référenciel (arbre interactif + recherche)
  - `/course` → Visualisation des cours (markdown + LaTeX + navigation chapitres)
  - `/exercise` → Génération d'exercices (sélection matière/chapitre)
  - `/exam-gen` → Génération d'examens (basée sur sujets Bac réels)
  - `/exam-correction` → Placeholder (reporté)
- **Sidebar** : Navigation mise à jour avec toutes les pages
- **Difficultés rencontrées** :
  - ❌ **Problème** : Le rendu LaTeX dans les corrections affichait le code brut (`$$x^2$$`) au lieu des formules
  - ✅ **Solution** : Migration vers ReactMarkdown + remark-math + rehype-katex + KaTeX CSS
  - ❌ **Problème** : useSearchParams nécessite un Suspense boundary (Next.js 16)
  - ✅ **Solution** : Wrapping du composant Chat dans `<Suspense>`

---

### 4. Développement des Fonctionnalités Avancées (Phase 7)

#### 4.1 Cadre Référenciel (الإطار المرجعي)
- **Sources** : 3 fichiers `.md` dans `Document-Data-Set/cadre/`
- **Backend** : `cadre_service.py` parse les fichiers Markdown en JSON structuré :
  - Maths → arbre d'objectifs (domaine → sous-domaine → objectif avec code `1.1.1`)
  - Physique/Anglais → vue document avec sections
- **API** : `GET /api/cadre` (toutes matières), `GET /api/cadre/{subject}`
- **Frontend** : Arbre expansible avec recherche en direct, bouton « Ask AI » par objectif → navigation vers `/chat?q=...&subject=...`
- **Difficulté** : Les fichiers `.md` du cadre n'ont pas une structure uniforme entre matières — parsing spécifique par matière

#### 4.2 Course Notes Viewer
- **Sources** : 3 fichiers `.md` dans `Document-Data-Set/courses/` (maths 47KB, physique 27KB, anglais 48KB)
- **Backend** : `course_service.py` lit les fichiers, extrait les titres `##` comme table des matières
- **API** : `GET /api/courses`, `GET /api/course/{subject}`
- **Frontend** : Barre latérale des chapitres (scroll vers le `##` ciblé), rendu markdown + LaTeX via KaTeX
- **Particularité** : Pas d'IA — simple visualisation de fichiers statiques (plus rapide et fiable)

#### 4.3 Exercise Generation
- **Backend** : `exercise_service.py` avec `get_topics()` (extraction des `##` des cours) et `generate_exercise()` (RAG + LLM)
- **Prompt** : Prompt dédié demandant un exercice + solution séparée par `---SOLUTION---`
- **API** : `GET /api/generate/topics`, `POST /api/generate/exercise`
- **Frontend** : Onglets matières, dropdown des chapitres, bouton générer, solution pliable
- **Difficulté** : Le modèle a tendance à générer des exercices trop simples ou trop génériques — ajustement du prompt avec contrainte « difficile et original »

#### 4.4 Exam Generation
- **Sources** : 7 fichiers JSON d'examens réels du Bac (3 Maths, 2 Physique, 2 Anglais)
- **Backend** : `exam_service.py` charge les JSON comme exemples few-shot, envoie au LLM avec RAG context
- **API** : `POST /api/generate/exam`
- **Format few-shot** : L'IA voit la structure exacte d'un examen réel (questions + corrigés) et doit générer dans le même format JSON
- **Frontend** : Cartes Q/Corr pliables, sujet optionnel (par défaut « Général »)
- **Difficulté** : Le parsing du JSON généré par le LLM peut échouer — regex de fallback + validation stricte

#### 4.5 RAG Subject Mapping Fix
- **Problème** : `exercise_service` et `exam_service` passaient les clés sujets (`"maths"`) à `retrieve_context()` mais ChromaDB attend les noms d'affichage (`"Mathématiques"`)
- **Impact** : RAG retournait des résultats vides silencieusement
- **Solution** : Passage de `subject_display` au lieu de `subject_key`

#### 4.6 Correction Page — Rendu LaTeX
- **Problème** : Les réponses de correction contenaient du LaTeX brut (`$$...$$`, `\frac{}`) affiché comme texte
- **Solution** : Remplacement du bloc `whitespace-pre-wrap` par `<ReactMarkdown>` + `remarkMath` + `rehypeKatex`, aligné sur le rendu utilisé dans Course/Exercise/Exam

---

### 5. Architecture Technique Détaillée

#### 5.1 Architecture 3 Serveurs
```
NAVIGATEUR ÉLÈVE
        │  HTTPS
        ▼
┌──────────────────────────────────────────────────┐
│  VERCEL — Frontend                               │
│  Next.js 16 · JavaScript · Tailwind CSS           │
│  Pages : /chat, /correction, /cadre,             │
│          /course, /exercise, /exam-gen            │
└──────────────────┬───────────────────────────────┘
                   │  POST /api/ask
                   │  POST /api/upload
                   │  POST /api/correct
                   │  GET  /api/cadre
                   │  GET  /api/courses
                   │  GET  /api/course/{subject}
                   │  GET  /api/generate/topics
                   │  POST /api/generate/exercise
                   │  POST /api/generate/exam
                   ▼
┌──────────────────────────────────────────────────┐
│  KAGGLE — Backend & IA Layer                 ✅   │
│  Python 3.11 · FastAPI · Uvicorn                  │
│  Dual T4 GPUs (15GB each) + Localtunnel           │
│  GPU 0 : Texte (rafiki-qwen-2.5-finetune 4-bit)  │
│  GPU 1 : Vision (Qwen2.5-VL-3B 4-bit)            │
└──────────────────┬───────────────────────────────┘
                   │  Model Weights & Index
                   ▼
┌──────────────────────────────────────────────────┐
│  HUGGINGFACE — Stockage & Distribution            │
│  Modèle texte : rafiki-qwen-2.5-finetune          │
│  Modèle vision : Qwen2.5-VL-3B-Instruct           │
│  Dataset : ChromaDB index (3 collections)         │
│  Dataset : Fine-tuning Q&A pairs                  │
└──────────────────────────────────────────────────┘
```

#### 5.2 Frontend (Vercel — Next.js 16)
- **Technologies** : Next.js 16 App Router, JavaScript, Tailwind CSS, KaTeX, ReactMarkdown
- **Pages fonctionnelles** : 7 pages (Chat, Correction, Cadre, Cours, Exercices, Examens, Accueil)
- **Dépendances clés** : `react-markdown`, `remark-math`, `remark-gfm`, `rehype-katex`, `katex`
- **Communication** : API REST via `fetch()` avec la variable d'environnement `NEXT_PUBLIC_API_URL`

#### 5.3 Backend & IA (Kaggle — FastAPI)
- **Environnement** : Notebook Kaggle, Dual T4 GPU (15GB VRAM chacun)
- **GPU 0** : `rafiki-qwen-2.5-finetune` (4-bit quantized) — génération de texte
- **GPU 1** : `Qwen2.5-VL-3B-Instruct` (4-bit quantized) — OCR temps réel
- **API Endpoints (8 endpoints)** :
  - `POST /api/upload` → Upload PDF/Image → OCR → Texte
  - `POST /api/ask` → Question → RAG → LLM → Réponse
  - `POST /api/correct` → Upload → OCR → LLM → Correction
  - `GET /api/cadre` → Liste des matières du cadre
  - `GET /api/cadre/{subject}` → Arbre d'objectifs détaillé
  - `GET /api/courses` → Liste des cours + chapitres
  - `GET /api/course/{subject}` → Contenu complet du cours
  - `GET /api/generate/topics` → Liste des chapitres pour une matière
  - `POST /api/generate/exercise` → Génération d'exercice
  - `POST /api/generate/exam` → Génération d'examen
- **Exposition** : Localtunnel génère une URL HTTPS publique

#### 5.4 RAG — Retrieval-Augmented Generation
- **Base de connaissances pré-construite** :
  - ChromaDB indexée à partir des PDFs du 2ème Bac
  - 3 collections : maths_2bac, physics_2bac, english_2bac
  - Chunks avec métadonnées (matière, chapitre, type)
- **Session RAG temporaire** :
  - ChromaDB in-memory pour documents uploadés
  - Fusionnée avec la base globale pour la session
  - Disparaît au redémarrage du serveur
- **Processus de requête** :
  1. Question élève → embedding → retrieval ChromaDB
  2. Contexte récupéré + question → prompt → LLM fine-tuné
  3. Réponse générée pas-à-pas avec références au programme

#### 5.5 Stack Technologique Complète

| Composant | Technologie | Version | Rôle |
|-----------|------------|---------|------|
| Frontend | Next.js | 16 App Router | Interface utilisateur |
| Styling | Tailwind CSS | Dernière | Design responsive + Stitch templates |
| Backend API | FastAPI | Dernière | Orchestrateur REST |
| Runtime IA | Python | 3.11 | Exécution modèles |
| LLM Texte | Qwen2.5-1.5B-Instruct (fine-tuné) | 4-bit LoRA | Génération réponses |
| LLM Vision | Qwen2.5-VL-3B-Instruct | 4-bit | OCR temps réel |
| Base vectorielle | ChromaDB | Dernière | Base de connaissances |
| Fine-tuning | LoRA + PEFT | - | Adaptation du modèle |
| Quantification | bitsandbytes | 4-bit | Compression mémoire GPU |
| Tunnel HTTPS | Localtunnel | Dernière | Exposition API publique |
| Frontend Host | Vercel | Free Tier | Hébergement web |
| Backend Host | Kaggle | Free Dual T4 | Calcul GPU |
| Stockage modèles | HuggingFace | - | Distribution + datasets |
| Rendu Markdown | react-markdown + remark-math | Dernière | Affichage cours/corrections |
| Rendu LaTeX | KaTeX + rehype-katex | Dernière | Formules mathématiques |

---

### 6. Déploiement & Mise en Œuvre

#### 6.1 Déploiement Backend (Kaggle)
- **Cell 1** : Clonage du repo + installation dépendances (transformers, bitsandbytes, localtunnel)
- **Cell 2** : Surcharge des fichiers pour quantification 4-bit dual-GPU
  - `llm_service.py` : chargement du modèle texte sur GPU 0
  - `extraction_service.py` : chargement du modèle vision sur GPU 1
  - `llm_service.py` (supplément) : fonction `generate_content()` pour exercices/examens
- **Cell 3** : Démarrage FastAPI + génération URL Localtunnel
- **Temps de démarrage** : ~60s (chargement des poids des modèles)

#### 6.2 Déploiement Frontend (Vercel)
- Configuration `NEXT_PUBLIC_API_URL` avec l'URL Localtunnel
- Build et déploiement via Vercel CLI ou GitHub integration
- Site accessible publiquement

#### 6.3 Schéma de communication complet
```
Élève → https://rafiki.vercel.app/chat
  → Frontend Next.js
    → POST https://xxxx.loca.lt/api/ask {question, subject, session_id}
      → FastAPI (Kaggle)
        → RAG Retrieval ChromaDB
        → Construction du prompt (contexte + question + historique)
        → Inférence LLM (GPU 0)
        → Formatage réponse
    ← JSON {answer, sources, session_id}
  ← Affichage UI (ReactMarkdown + KaTeX pour formules)
```

#### 6.4 Contraintes et limitations du déploiement
- **Kaggle free tier** : Sessions limitées à 9h max, GPU non garantis, pas de persistance
- **Localtunnel** : Nouvelle URL à chaque redémarrage, latence réseau, nécessite déblocage manuel
- **Quantification 4-bit** : Légère perte de qualité par rapport au full precision
- **Pas de comptes utilisateurs** : Aucune authentification ou historique persistant
- **Mémoire session** : Perdue au redémarrage du serveur Kaggle

---

### 7. Tests & Validation

#### 7.1 Tests unitaires
- Tests des endpoints API (FastAPI) : chaque endpoint retourne le bon code HTTP et format JSON
- Tests des pipelines d'extraction : PDF → Markdown → chunks
- Tests du système RAG : les chunks retournés sont pertinents pour la requête
- Tests du rendu LaTeX : les formules s'affichent correctement

#### 7.2 Tests d'intégration
- Communication frontend ↔ backend via Localtunnel
- Pipeline complet : Upload → OCR → RAG → LLM → Réponse affichée
- Gestion des erreurs : modèle non chargé, timeout, fichier invalide

#### 7.3 Validation pédagogique
- Comparaison des réponses générées avec les corrigés officiels du Bac
- Vérification de la terminologie employée (correspond au programme)
- Évaluation de la clarté pédagogique des explications

#### 7.4 Résultats des tests
- Phases 1-5 : Tests unitaires passés ✅
- Phase 7 : Tests fonctionnels de toutes les nouvelles fonctionnalités ✅
- Phase 6 (intégration complète) : À finaliser
- **Known issues** :
  - Latence élevée sur le pipeline complet (OCR + RAG + LLM = 15-45s)
  - Localtunnel instable (déconnexions aléatoires)
  - Pas de fallback élégant en cas d'erreur GPU

---

### 8. Difficultés Rencontrées & Solutions

#### 8.1 Création du dataset
| Difficulté | Solution |
|------------|----------|
| Aucun dataset pré-existant pour le curriculum marocain | Création manuelle + distillation depuis modèles plus grands |
| PDFs officiels mal formatés (formules, tableaux) | PyMuPDF + Qwen2.5-VL OCR + post-traitement manuel |
| Chunks difficile à optimiser | Segmentation sémantique (par théorème/leçon) plutôt que taille fixe |
| Contenu incomplet dans certains PDFs | Complétion via sources officielles supplémentaires |
| Volume de données insuffisant pour fine-tuning | Utilisation de multiples agents pour diviser le travail, puis regroupement unifié |

#### 8.2 Modèle & Fine-Tuning
| Difficulté | Solution |
|------------|----------|
| Pas de GPU local disponible | Utilisation de Kaggle (T4 gratuit) |
| OOM sur T4 15GB en full precision | Quantification 4-bit (bitsandbytes) |
| Modèle répond dans un style trop généraliste | Fine-tuning LoRA sur dataset marocain spécifique |
| Loss stagnante pendant l'entraînement | Ajustement learning rate, warmup steps, correction dataset |
| Deux modèles (texte + vision) sur un seul GPU | Dual T4 — un modèle par GPU |

#### 8.3 Déploiement & Infrastructure
| Difficulté | Solution |
|------------|----------|
| HuggingFace Inference API payante | Migration vers Kaggle avec modèles locaux |
| Kaggle pas conçu pour servir un backend | Détournement : notebook tourne en continu avec FastAPI + Localtunnel |
| Localtunnel change d'URL à chaque fois | Mise à jour manuelle du `.env` frontend (solution temporaire) |
| Sessions Kaggle limitées à 9h | Redémarrage programmé, documentation claire pour le re-déploiement |
| Pas de persistance des données | Mémoire session en RAM, évolution vers Supabase prévue |

#### 8.4 Intégration Frontend
| Difficulté | Solution |
|------------|----------|
| LaTeX brut dans les corrections | ReactMarkdown + remark-math + rehype-katex |
| useSearchParams bloque le rendu (Next.js 16) | Wrapping dans `<Suspense>` |
| RAG retourne des résultats vides pour exos/examens | Correction du mapping clé sujet → nom d'affichage ChromaDB |
| Sidebar avec liens obsolètes | Mise à jour : Resume Generation → Course Notes |

---

### 9. Concepts Clés Appris

Liste concise des concepts techniques utilisés dans le projet :

1. **RAG (Retrieval-Augmented Generation)** — Combinaison de recherche vectorielle et génération LLM pour ancrer les réponses dans une base de connaissances
2. **Fine-Tuning (LoRA)** — Adaptation d'un modèle pré-entraîné sur un domaine spécifique en n'entraînant qu'un petit sous-ensemble de paramètres
3. **Quantification 4-bit** — Compression des poids d'un modèle pour réduire l'empreinte mémoire (de ~3GB à ~900MB)
4. **Embeddings vectoriels** — Représentation numérique du sens d'un texte pour la recherche sémantique
5. **ChromaDB** — Base de données vectorielle open-source pour stocker et requêter des embeddings
6. **OCR (Optical Character Recognition)** — Extraction de texte à partir d'images ou PDFs
7. **Vision LLM** — Modèle de langage capable de comprendre et décrire le contenu visuel
8. **FastAPI** — Framework Python pour construire des API REST asynchrones
9. **Next.js App Router** — Framework React avec routage basé sur le système de fichiers et rendu serveur
10. **Localtunnel** — Outil d'exposition d'un serveur local à Internet via une URL publique
11. **Kaggle Notebooks** — Environnement cloud gratuit avec GPU pour l'exécution de code Python
12. **HuggingFace Hub** — Plateforme de distribution de modèles et datasets
13. **Few-Shot Learning** — Apprentissage à partir de quelques exemples fournis dans le prompt
14. **Prompt Engineering** — Conception de prompts optimisés pour guider le comportement du LLM
15. **Session Management** — Gestion de l'état utilisateur en mémoire sans base de données persistante
16. **KaTeX** — Bibliothèque de rendu LaTeX rapide pour le web (alternative plus légère à MathJax)
17. **ReactMarkdown** — Bibliothèque React pour le rendu de contenu Markdown
18. **Rendu Côté Client vs Serveur** — Compréhension de où et quand le rendu s'effectue dans Next.js
19. **Architecture 3-Tiers** — Séparation en couches (Frontend, Backend, Stockage) sur des plateformes distinctes
20. **Tunneling HTTPS** — Exposition sécurisée d'un serveur local via un tunnel chiffré

---

### 10. Analyse Critique & Pistes d'Amélioration

#### 10.1 Forces du projet
- Architecture innovante 3-serveurs 100% free-tier (zéro coût de fonctionnement)
- Base de connaissances spécifique au curriculum marocain (aucun autre outil ne le fait)
- Approche duale RAG + Fine-Tuning pour des réponses précises et pédagogiques
- Interface premium, responsive mobile-first, avec rendu LaTeX
- OCR temps réel intégré sans coût API externe
- 6 fonctionnalités complètes sur 7 prévues

#### 10.2 Faiblesses et limitations actuelles
- **Scope limité** : 3 matières sur ~12 du Bac marocain pour le MVP
- **Pas de persistance** : Données perdues au redémarrage du serveur Kaggle
- **Dépendance Kaggle** : Sessions limitées (9h), indisponibilité possible
- **Latence** : Pipeline complet OCR + RAG + LLM = 15-45 secondes
- **Pas d'authentification** : Aucun compte utilisateur ni historique
- **Localtunnel instable** : Déconnexions aléatoires, changement d'URL

#### 10.3 Pistes d'amélioration
- **Court terme** :
  - Finaliser les tests d'intégration (Phase 6)
  - Ajouter un système de cache Redis pour réduire la latence
  - Améliorer le système de fallback (modèle dégradé si GPU indisponible)
- **Moyen terme** :
  - Étendre à toutes les matières du Bac (SVT, SI, Philosophie, Arabe...)
  - Base de données persistante (Supabase PostgreSQL)
  - Comptes utilisateurs et historique des conversations
  - Dashboard analytics pour le suivi des progrès
- **Long terme** :
  - Application mobile native (React Native / Flutter)
  - Mode hors-ligne avec modèles on-device (quantification extrême)
  - Extension aux autres niveaux (1ère Bac, Tronc Commun, Collège)
  - Communauté de professeurs contributeurs pour enrichir la base de connaissances
  - Support des matières arabes (Philosophie, Arabe, Éducation Islamique)

---

### 11. Conclusion

- Récapitulatif du projet : 7 phases, 6 fonctionnalités complètes, architecture 3 serveurs free-tier
- Atteinte des objectifs : MVP couvert à 85% (6/7 features), preuve de concept validée
- Bilan personnel : apprentissage de concepts avancés en IA (RAG, fine-tuning, quantification, OCR), développement full-stack (Next.js, FastAPI), déploiement cloud (Kaggle, Vercel, HuggingFace)
- Impact potentiel : un outil gratuit qui pourrait aider des milliers d'élèves marocains à préparer le Bac
- Remerciements

---

### 12. Annexes

#### Annexe A : Diagramme d'architecture complet
(Diagramme ASCII détaillé avec tous les flux de données)

#### Annexe B : Exemples de Q&A générées
- Maths : « Comment calculer la dérivée de f(x) = 3x² + 2x ? »
- Physique : « Explique le principe d'inertie »
- English : « Explain the difference between present perfect and past simple »

#### Annexe C : Extraits de code clés
- `llm_service.py` — Fonction `generate_content()` et `generate_answer()`
- `rag_service.py` — `retrieve_context()` + gestion mémoire conversation
- `exercise_service.py` — `generate_exercise()` avec prompt dédié et split `---SOLUTION---`

#### Annexe D : Captures d'écran
Placeholders pour les captures (l'étudiant ajoutera les images) :
- `screenshots/landing.png` — Page d'accueil
- `screenshots/chat.png` — Interface Q&A Chat avec réponse
- `screenshots/correction.png` — Interface de correction d'exercice
- `screenshots/cadre.png` — Arbre du Cadre Référenciel
- `screenshots/course.png` — Visualisation des cours
- `screenshots/exercise.png` — Génération d'exercice
- `screenshots/exam.png` — Génération d'examen

#### Annexe E : Dépendances et bibliothèques
```text
# Backend
transformers==4.47.1
bitsandbytes==0.45.4
torch==2.6.0
accelerate==1.5.2
peft==0.14.0
fastapi==0.115.6
uvicorn==0.34.0
pydantic==2.10.5
python-multipart==0.0.20
chromadb==0.6.3
sentence-transformers==3.4.1
PyMuPDF==1.25.3
pillow==11.1.0
qwen-vl-utils==0.0.8
requests==2.32.3

# Frontend
next@16.2.7
react@19.1.0
tailwindcss@4
react-markdown@9
remark-math@6
rehype-katex@7
katex@0.16
remark-gfm@4
```

---

## Instructions finales pour le format LaTeX

1. **Classe de document** : `\documentclass[12pt,a4paper]{report}`
2. **Packages requis** :
   - `inputenc`, `fontenc` (encodage)
   - `babel[french,english]` (langues)
   - `graphicx` (images)
   - `amsmath`, `amssymb` (mathématiques)
   - `hyperref` (liens)
   - `listings` (code)
   - `booktabs`, `array` (tableaux)
   - `geometry` (marges 2.5cm)
   - `setspace` (interligne 1.5)
   - `fancyhdr` (en-têtes/pieds de page)
   - `tocloft` (table des matières)
   - `xcolor` (couleurs)
3. **Mise en page** :
   - Marges : 2.5cm
   - Interligne : 1.5
   - Police : Times New Roman 12pt (ou équivalent LaTeX)
   - Titres : bleu foncé `#1a365d`
   - En-tête : « Rafiki — رفيقي — Rapport de Projet »
   - Pied de page : numéro de page centré
4. **Images** : Utiliser `\includegraphics` avec placeholders
5. **Code** : Utiliser l'environnement `lstlisting` pour les extraits
6. **Table des matières** : Générée automatiquement avec `\tableofcontents`
7. **Numérotation** : Sections numérotées (1, 2, 3...) et sous-sections (1.1, 1.2...)

---

## Output

Génère un fichier `.tex` complet, bien structuré, compilable sans erreur, prêt à être soumis.
