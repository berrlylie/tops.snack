from flask import Flask, jsonify, request
import psycopg2
import os

app = Flask(__name__)

def get_db_connection():
    # Mengambil "kunci" database POSTGRES_DATABASE_URL dari Vercel
    conn = psycopg2.connect(os.environ['POSTGRES_DATABASE_URL'])
    return conn

# Jalur untuk mengambil data (nanti dipakai pembeli dan admin)
@app.route('/api', methods=['GET'])
def get_produk():
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute('SELECT * FROM produk ORDER BY id ASC;')
        produk = cur.fetchall()
        cur.close()
        conn.close()
        
        # Merapikan data agar mudah dibaca website
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