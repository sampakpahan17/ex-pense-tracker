# 💰 Expense Tracker — DevOps UTS Project

### 🚀 Kelompok: **Bug4Fun**

| Nama | NIM | Peran / Tugas |
|------|-----|----------------|
| **Samuel G. Christian Pakpahan** *(Ketua)* | 221113531 | Setup Backend & Frontend, Docker Deployment, GitHub Actions, CI/CD |
| **Jocelyn** | 221110108 | UI/UX Design, Integrasi Frontend dengan API, Responsiveness |
| **Maesi Sarah** | 221112816 | API Testing, Validasi Data, Dokumentasi Endpoint |
| **Sontiar Eseria Tampubolon** | 221112223 | Docker Compose Setup, Monitoring, Testing Deployment |

---

## 👨‍🏫 Dosen Pengampu
**Gilbert Fernando Situmorang, S.Kom., M.Kom.**  
*Mata Kuliah: DevOps*

---

## 🧩 Deskripsi Proyek
**Expense Tracker** adalah aplikasi berbasis **FastAPI (Python)** dan **React + Vite (JavaScript)**  
untuk mencatat pemasukan dan pengeluaran secara real-time.  
Proyek ini mengimplementasikan **konsep DevOps penuh** meliputi:
- Version control (GitHub)
- Continuous Integration & Deployment (GitHub Actions)
- Containerization (Docker)
- Auto-update Deployment (Watchtower)

---

## 🏗️ Arsitektur Sistem
```
Frontend (React + Vite)
        ↓
Backend (FastAPI)
        ↓
Database (JSON File)
        ↓
CI/CD (GitHub Actions → DockerHub → Watchtower)
```

---

## ⚙️ Teknologi yang Digunakan
| Komponen | Teknologi |
|-----------|------------|
| **Backend** | Python 3.11, FastAPI, Uvicorn |
| **Frontend** | React, Vite, Tailwind CSS, Axios |
| **Deployment** | Docker, Docker Compose, Watchtower |
| **CI/CD** | GitHub Actions, DockerHub Registry |

---

## 🧠 Fitur Utama
✅ Tambah, hapus, dan tampilkan transaksi  
✅ Perhitungan otomatis total pemasukan, pengeluaran, dan saldo  
✅ Tampilan antarmuka yang responsif dan modern  
✅ API RESTful lengkap  
✅ Auto deployment setiap kali ada update di GitHub  

---

## 🐳 Docker Deployment

### 🛠️ Jalankan Project (pertama kali)
```bash
docker compose up -d
```

### ⏹️ Hentikan Container
```bash
docker compose stop
```

### ▶️ Jalankan Ulang Container
```bash
docker compose start
```

### 🔄 Watchtower
Watchtower otomatis memeriksa update image Docker setiap **30 detik**  
dan melakukan **auto-redeploy** jika ada perubahan.

---

## 🔗 Link Penting
- 🌐 **Repository GitHub:** [https://github.com/sampakpahan17/ex-pense-tracker](https://github.com/sampakpahan17/ex-pense-tracker)
- ☁️ **Backup Drive:** [Google Drive](https://drive.google.com/drive/folders/1EhKq0qpH2YOW7AlHvyR5X24LUYzYTbSn?usp=sharing)
- 🐳 **Docker Images:**
  - Backend → [Backend Image](http://localhost:8000/transactions/)
  - Frontend → [Frontend Image](http://localhost:5173/)

---

## 📸 Screenshot Tampilan
*(Tambahkan screenshot hasil tampilan FE & BE di sini)*

---

## 💡 Catatan
> Dikembangkan untuk tugas **UTS DevOps Universitas Mikroskil**,  
> dengan fokus pada **CI/CD dan Docker containerization**.

---

## 📞 Kontak
📧 **Samuel G. C. Pakpahan**  
🔗 [GitHub: sampakpahan17](https://github.com/sampakpahan17)

📧 **Jocelyn**  
🔗 [GitHub: jocelynng0108](https://github.com/jocelynng0108)

---

## 📜 Lisensi
Proyek ini dibuat sebagai bagian dari **Ujian Tengah Semester (UTS) - Mata Kuliah DevOps**  
📚 Universitas Mikroskil - 2025

---

⭐ _Terima kasih telah mengunjungi project kami!_  
_Jangan lupa kasih star ⭐ di repository ini kalau kamu suka proyeknya._

> 💡 “Build smart, track wisely.” — *Bug4Fun Team*
## 🧾 Lisensi
© 2025 — Kelompok **Bug4Fun**  
Dibuat untuk keperluan **UTS Mata Kuliah DevOps**, tidak untuk distribusi komersial.
