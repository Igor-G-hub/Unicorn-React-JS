Aplikacija se sastoji od dva glavna modula – Warehouse-a i Sales-a. Prije ulaza u oba modula potrebno se ulogirati sa zadanim usernameom i passwordom iz zadatka (username: warehouse password: skladište za modul Warehouse i username: sales password: prodaja za modul Sales). Navedeni podaci su spremljeni u JSON file-u “Credentials” te aplikacija uspoređuje unesene podatke u modulu “Login” s podacima iz spomenutog JSON-a te ovisno o njima vraća rezultat. Postavljenje su kontrole te odgovarajuće error poruke ukoliko su uneseni neodgovarajući podaci. Uspješnim logiranjem program preusmjerava prema modulu warehouse ili Salesa, ovisno o izabranom.

U aplikaciju je također  uključen i JSON file database koji “glumi” bazu podataka te je sadržan od automobilskih dijelova zadanih u zadatku. Dijelovi se sastoje od serijskog broja, datuma proizvodnje, branda, tipa automobila, bazne cijene te akcije u koju su ukršteni datum početka akcije, datum završetka akcije te postotno umanjenje proizvoda. 

Zamišljeno je da se unos i brisanje dijelova provodi kroz modul Warehouse a unos i izmjena akcija i artikala kroz modul Sales. Dio je definiran kao artikl ukoliko mu je zadana bazna cijena. Na nekoliko dijelova sam namjerno izostavio određene  podatke kako proizvod ne bi ulazio u zadane kriterije, za potrebe testiranja postavljenih fukcionalnosti.


Modul Warehouse se sastoji od sljedećega:

Postavljene su 3 pretrage: prema serijskom broju, datumu proizvodnje i brandu i tipu auta. Pretragu nije moguće kombinirati, onemogućeni su paraleni unosi te su razdvojene zasebnim gumbima za search. Za pretragu prema brandu i tipu postavljeni su padajući izbornici sa dinamičkim mapiranim opcijama iz JSON baze podataka. Dakle, moguće je izabrati samo brand i tip automobila koji se već nalazi u bazi podataka te ovisno o promjenama u bazi mjenjat će se i padajući izbornici. Također su postavljene I dogovarajuće poruke ovisno o tome da li je pretraga uspješna ili ne. Svi responseovi ovog modula su ispisani u JSON formatu.

List of parts – klikom na navedeni gumb ispisat će se traženi JSON file u formatu brand_and_automobile: “ “, count: “ ”.  Pregled prikazuje sve brandove I tipove automobila iz baze te ukupan broj dijelova koji im odgovaraju.

Napomena: Kako je u zadatku zadano da svaki dio može odgovarati nekoliko tipova automobila ukupna suma counta je veća od stvarne jer jedan dio može koristiti više tipova automobila. 

Add items – pritiskom na gumb otvara se modul za unos dijela. Postavljene su kontrole s odgovarajućim porukama na način da je potrebno unijeti sva tražena polja te nije moguće dodati novi dio ukoliko se serijski broj slaže s već postojećim iz baze. Uspješnim unosom novi dio je dodan u bazi podataka do slijedećeg refreasha.

Remove items – pritiskom na gumb otvara se modul za brisanje dijela iz baze podataka. Traži se unos serijskog broja proizvoda te nije moguće unijeti broj koji se ne nalazi u bazi podataka. Uspješnim unosom dio sa zadanim serijskim brojem se broše iz baze podataka do slijedećeg refreasha.

Logout – pritiskom na gumb aplikacija nas vraća na početni zaslon

Modul Sales sastoji od sljedećega:

Unos serijskog broja – traži se unos serijskog broja kako bi se na određenom dijelu izvršavale daljnje radnje vezano uz akcije i baznu cijenu. Postavljene su kontrole s odgovarajućim porukama te je potrebno unijeti serijski broj koji se nalazi u bazi podataka.

Add/remove base price – klikom na gumb otvara se modul za unos bazne cijene za prethodno odabrani dio. Klikom na gumb Add dodaje se ili mijenja postojeća cijena a pritiskom na gumb Remove postojeća bazna cijena se briše. Postavljene su odgovarajuće kontrolne poruke. Modul ne prihvaća unos praznog polja za dodavanje te će ispisati obavijesnu poruku ukoliko se kliknulo Remove a proizvod nije imao prethodno unesenu baznu cijenu (nekoliko dijelova iz baze za potrebe testiranja nema unesene bazne cijene).

Add/remove action – analogno prethodno navedenom modulu, modul za unos akcija također radi na način da se prethodno mora unijeti serijski broj proizvoda. Također su dodane kontrole te obavijesne poruke ukoliko nisu popunjena sva polja prije pritiska na gumb Add ili ukoliko se pokušava ukloniti akcija na proizvod koji ju nije ni imao zadanu.
            
All articles JSON – pretraga ispisuje JSON podatke o svim zadanim artiklima koja ne uključuje nekoliko dijelova kojima nije zadana bazna cijena (za potrebe testiranja) jer time nisu definirani kao artikl. Ispisani su podaci o serijskom broju, datumu proizvodnje te konačnoj cijeni proizvoda. Konačna cijena je bazna cijena umanjena za akcdijski popust osim za nekoliko artikala koji nemaju unesen popust (za potrebe testiranja) te im je konačna jednaka baznoj cijeni.

All actions JSON – pretraga ispisuje JSON podatke o svim zadanim akcijama te ne uključuje proizvode koji nemaju baznu cijenu, datum početka i kraja akcije te akcijski popust. 

Table of all articles – pritiskom na gumb ispisuje se tablica sa svim artiklima iz baze tj. dijelovima koji imaju definiranu baznu cijenu.

Logout – pritiskom na gumb aplikacija nas vraća na početni zaslon.
