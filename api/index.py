from flask import Flask, jsonify, request
import psycopg2
import os

app = Flask(__name__)

def get_db_connection():
    # Menggunakan kunci yang tepat sesuai Vercel
    conn = psycopg2.connect(os.environ['POSTGRES_DATABASE_URL'])
    return conn

@app.route('/api', methods=['GET'])
def get_produk():
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute('SELECT * FROM produk ORDER BY id ASC;')
        produk = cur.fetchall()
        cur.close()
        conn.close()
        
        hasil = []
        for p in produk:
            hasil.append({
                "id": p[0], 
                "nama": p[1], 
                "harga": p[2], 
                "gambar": p[3],
                "kategori": p[4],
                "deskripsi": p[5],
                "is_best_seller": p[6]
            })
        return jsonify(hasil)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/admin', methods=['POST'])
def tambah_produk():
    try:
        data = request.json
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute(
            'INSERT INTO produk (nama, harga, gambar, kategori, deskripsi, is_best_seller) VALUES (%s, %s, %s, %s, %s, %s)',
            (data['nama'], data['harga'], data['gambar'], data['kategori'], data['deskripsi'], data['is_best_seller'])
        )
        conn.commit()
        cur.close()
        conn.close()
        return jsonify({"status": "sukses"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500