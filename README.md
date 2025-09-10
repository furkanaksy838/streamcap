# Streamcap 🎥📡

*Streamcap*, SAP CAP (Cloud Application Programming Model) kullanılarak geliştirilmiş bir örnek projedir.  
Amacı: *HANA veritabanındaki büyük tabloları JSON formatında streaming (akış) halinde istemciye aktarmak*.  

Bu sayede, milyonlarca satır veriyi bellek şişirmeden, parça parça (chunked transfer) istemciye gönderebilirsiniz.

## 🚀 Özellikler

- 📊 *HANA veritabanına bağlanır* ve tablo verilerini okur  
- 📡 *Orders* tablosunu streaming endpoint olarak dışa açar  
- ⚡ *HTTP chunked transfer* kullanarak satırları parça parça gönderir  
- 🌐 http://localhost:4004/OrdersStream adresinden veriler gerçek zamanlı görülebilir  
- 🆚 *HANA vs SQLite farkını* gösterir → HANA cursor sayesinde streaming destekler, SQLite ise tüm veriyi tek seferde yükler

  > 💡 *Neden HANA destekler, SQLite desteklemez?*  
>
> - *HANA*: Kurumsal bir veritabanıdır. cursor ve fetchSize gibi mekanizmalarla satırları parça parça (batch halinde) istemciye göndermeyi destekler.  
>   Bu sayede CAP pipeline() fonksiyonu çalıştırıldığında veriler gerçekten stream olarak akar.  
>
> - *SQLite: Dosya tabanlı, daha basit bir veritabanıdır. Cursor mantığını sağlamaz; sorgu çalıştırıldığında **tüm tabloyu RAM’e yükler* ve tek seferde döner.  
>   Bu yüzden CAP pipeline() çağrısı teknik olarak çalışsa da, streaming davranışı gözlenmez.
>   BU SEBEPLE HANA VERİTABANI KULLANMAMIZ GEREKİR.
>
>## 📂 Proje Yapısı

| Yol/Dosya         | Açıklama |
|-------------------|----------|
| *app/*          | UI (ön yüz) içerikleri (varsa Fiori/UI5) |
| *db/*           | Veri modelleri (CDS tanımları, CSV seed dataları) |
| *srv/*          | Servis tanımları (service.cds, custom logic) |
| *server.js*     | Streaming endpoint (/OrdersStream) kodu |
| *package.json*  | Proje bağımlılıkları ve scriptler |
| *README.md*     | Proje dokümantasyonu |


