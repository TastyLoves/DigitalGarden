1. Install OracleVM VirtualBox
2. Install fail Disk image Windows XP Professional
3. Buka OracleVM dan klik pada "new"
	![[Rajah cipta virtual machine]]
	- Isi 'name' untuk VM anda
	- Pilih 'folder' untuk VM dihoskan
	- Untuk 'iso image', pilih yang telah anda muat turun. Contoh: fail imej cakera Windows XP Pro atau biarkan tidak dipilih.
	- Jika anda memilih fail, 'type' dan 'version' akan diisi secara automatik. Jika tiada fail, anda boleh memilih secara manual untuk jenis dan versi Windows.
4.  Klik "next" dan VM anda akan dipaparkan di sebelah kiri.
5.  Klik dua kali untuk membuka VM
___
1)  Untuk membuat prosedur baru:
	- Klik 'procedure' di bawah schema dan klik 'kmmb'
	- Klik kanan pada MEMLIST3 untuk 'create like' dan tukar nama prosedur baru kepada MEMLIST_DAERAH.
	![[Rajah 'create like' untuk memlist3]]
	- Sekarang pergi ke SENARAI_AHLI2 di bawah 'table' dan tukar namanya kepada SENARAI_AHLI_DAERAH seperti langkah sebelum ini.
	![[Rajah 'create like' untuk senarai ahli daerah]]
2) Buat pembetulan pada skrip prosedur kerana terdapat kesilapan dalam skrip tersebut.
	![[Rajah procedure yang perlu dikemaskini]]
- Dalam prosedur memlist_daerah, perlu ditambahkan Rumah, Pejabat, Telefon Bimbit, dan HP seperti dalam contact type dalam jadual Contact, terdapat contact_type lain yang tidak disenaraikan.
	![[Rajah menunjukkan semua contact type di dalam Contact table]]
3) Dalam skrip prosedur, terdapat kesilapan jika ingin menggunakan baris kod di bawah ini.
	![[Rajah menunjukkan nilai v-status]]
	- Ini disebabkan oleh nilai yang tidak menggunakan simbol ' ' hanya berlaku untuk data type nombor. Dalam situasi ini, ia akan menyebabkan error ketika menjalankan prosedur tersebut, jadi perlu menyatakan V_STATUS <> '0' dengan simbol ' ' pada nilai 0. Sama juga, penggunaan simbol " " akan menghasilkan error.
	
4) Untuk melihat data type yang digunakan, click pada Click Like di table SENARAI_AHLI2
	![[Rajah 'create like' untuk memlist_daerah]]
	![[Rajah datatype yang digunakan di dalam senarai ahli2]]
	![[Rajah Data type untuk Ahli di dalam Memlist daerah]]Ini menunjukkan bahawa v_status, data yang diambil merupakan "CHAR", jadi if else perlu menggunakan ' '.
	
1) Untuk mencari current balance di account balance
	![[Rajah script untuk acc balance]]
	- Menggunakan abs pada curr balance adalah untuk tidak menunjukkan nilai - negatif di dalam acc balance. Script CURR_BALANCE < -499 untuk mendapatkan nilai 500 ke atas. 
	
