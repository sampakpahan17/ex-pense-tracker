# 💰 Expense Tracker  
### _UTS DevOps Project — Kelompok Bug4Fun_

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/sampakpahan17/ex-pense-tracker/docker-build.yml?label=CI%2FCD%20Build&logo=github)
![Docker Pulls](https://img.shields.io/docker/pulls/samsz07/ex-pense-fe?label=Docker%20Frontend&logo=docker)
![Docker Pulls](https://img.shields.io/docker/pulls/samsz07/ex-pense-be?label=Docker%20Backend&logo=docker)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Build Status](https://github.com/samsz07/ex-pense-tracker/actions/workflows/docker-build.yml/badge.svg)
![Python](https://img.shields.io/badge/python-3.11-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-success)
![React](https://img.shields.io/badge/React-Frontend-61dafb)
![Docker](https://img.shields.io/badge/Docker-Automated-blue)

![Preview Aplikasi](https://drive.google.com/uc?export=view&id=YOUR_IMAGE_ID_1)

> _Aplikasi pencatat pemasukan & pengeluaran berbasis web dengan integrasi backend dan frontend melalui Docker dan CI/CD GitHub Actions._

---

## 👥 Kelompok Bug4Fun
| No | Nama Lengkap | NIM | Peran |
|----|---------------|-----|-------|
| 1 | **Samuel G. Christian Pakpahan** | 221113531 | Ketua / Fullstack Developer |
| 2 | **Jocelyn** | 221110108 | Frontend Developer |
| 3 | **Maesi** | 221112816 | Backend Developer |
| 4 | **Sontiar Eseria Tampubolon** | 221112223 | DevOps & Dokumentasi |

---

## 🚀 Deskripsi Proyek
**Expense Tracker** adalah aplikasi berbasis web yang digunakan untuk mencatat pemasukan dan pengeluaran dengan mudah.  
Dikembangkan menggunakan **Fullstack (Backend + Frontend)** dan di-deploy menggunakan **Docker** serta **GitHub Actions (CI/CD)**.

---

## ✨ Fitur Utama
- 💵 Tambah pemasukan dan pengeluaran  
- 📊 Hitung saldo otomatis  
- 🧾 Tabel daftar transaksi  
- 🔁 Sinkronisasi real-time dengan API Backend  
- 🐳 Deploy otomatis menggunakan Docker Container

---

## 🧩 Tech Stack

| Layer | Teknologi |
|-------|------------|
| **Frontend** | React + Vite + TailwindCSS |
| **Backend** | FastAPI (Python) |
| **Database** | SQLite |
| **Containerization** | Docker & Docker Hub |
| **CI/CD** | GitHub Actions |
| **Version Control** | Git & GitHub |

---

## ⚙️ Cara Instalasi dan Menjalankan

### 1️⃣ Clone Repository
```bash
git clone https://github.com/sampakpahan17/ex-pense-tracker.git
cd ex-pense-tracker
```

### 2️⃣ Menjalankan Backend (Manual)
```bash
cd be
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000
```
Backend akan berjalan di: **http://127.0.0.1:8000/transactions/**

---

### 3️⃣ Menjalankan Frontend (Manual)
```bash
cd fe
npm install
npm run dev
```
Frontend akan berjalan di: **http://127.0.0.1:5173**

---

### 🐳 Menjalankan dengan Docker (lebih mudah)
```bash
docker pull samsz07/ex-pense-be:latest
docker pull samsz07/ex-pense-fe:latest

docker run -d -p 8000:8000 samsz07/ex-pense-be
docker run -d -p 5173:80 samsz07/ex-pense-fe
```

Akses aplikasi di:  
- Backend API → [http://localhost:8000](http://localhost:8000)  
- Frontend UI → [http://localhost:5173](http://localhost:5173)

---

## 🧱 CI/CD (GitHub Actions + Docker Hub)

Setiap kali ada push ke branch `main`, GitHub Actions akan otomatis:
1. Build image Docker dari backend.
2. Push image ke **Docker Hub**:  
   👉 [https://hub.docker.com/r/samsz07/ex-pense-tracker](https://hub.docker.com/r/samsz07/ex-pense-tracker)

---

## 🖼️ Preview Aplikasi

| Dashboard | Input Transaksi |
|------------|----------------|
| ![Dashboard](https://drive.google.com/uc?export=view&id=YOUR_IMAGE_ID_1) | ![Input](https://drive.google.com/uc?export=view&id=YOUR_IMAGE_ID_2) |

> *(Ganti `YOUR_IMAGE_ID_1` dan `YOUR_IMAGE_ID_2` dengan ID gambar dari Google Drive kalian)*

---

## 🔗 Link Penting
- 🧭 **GitHub Repository:** [https://github.com/sampakpahan17/ex-pense-tracker](https://github.com/sampakpahan17/ex-pense-tracker)
- 🐳 **DockerHub Backend:** [https://hub.docker.com/r/samsz07/ex-pense-be](https://hub.docker.com/r/samsz07/ex-pense-be)
- 🐳 **DockerHub Frontend:** [https://hub.docker.com/r/samsz07/ex-pense-fe](https://hub.docker.com/r/samsz07/ex-pense-fe)
- ☁️ **Google Drive Backup:** [https://drive.google.com/drive/folders/1EhKq0qpH2YOW7AlHvyR5X24LUYzYTbSn?usp=sharing](https://drive.google.com/drive/folders/1EhKq0qpH2YOW7AlHvyR5X24LUYzYTbSn?usp=sharing)

---

## 📦 Struktur Proyek
```
ex-pense-tracker/
├── be/                     # Backend (FastAPI)
│   ├── main.py
│   ├── requirements.txt
│   └── Dockerfile
├── fe/                     # Frontend (React + Vite)
│   ├── src/
│   ├── package.json
│   └── Dockerfile
└── .github/workflows/      # CI/CD pipeline
    └── docker-build.yml
```

---

## 👨‍💻 Kontribusi Anggota
| Anggota | Kontribusi |
|----------|-------------|
| **Samuel G. C. Pakpahan** | Setup Fullstack, Integrasi FE & BE, CI/CD, Docker |
| **Jocelyn** | UI/UX & Implementasi React Components |
| **Maesi** | API CRUD & Struktur Database FastAPI |
| **Sontiar Eseria** | Dockerfile, Deployment, Dokumentasi README |

---

## 🏁 Hasil Akhir
> Project ini berhasil dijalankan penuh baik di lokal maupun di container Docker.  
> Semua service berjalan lancar di port 8000 (Backend) & 5173 (Frontend).

---

## 💡 Catatan
> Dikembangkan untuk tugas **UTS DevOps Universitas Mikroskil**,  
> dengan fokus pada **CI/CD dan Docker containerization**.

---

## 📞 Kontak
📧 **Samuel G. C. Pakpahan**  
🔗 [GitHub: sampakpahan17](https://github.com/sampakpahan17)

---

## 📜 Lisensi
Proyek ini dibuat sebagai bagian dari **Ujian Tengah Semester (UTS) - Mata Kuliah DevOps**  
📚 Universitas Mikroskil - 2025

---

⭐ _Terima kasih telah mengunjungi project kami!_  
_Jangan lupa kasih star ⭐ di repository ini kalau kamu suka proyeknya._

> 💡 “Build smart, track wisely.” — *Bug4Fun Team*
