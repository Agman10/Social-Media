# Titel
Sidan heter agman.xyz Social media.
* Inledning
syftet med arbetet är att göra en sida där man kan lägga in posts som reddit.

# Bakgrund
Här beskriver du den teknik du har använt och motiverar detta.
Jag använde express js eftersom Jag ville lära mig att använda det och använda Javascript iställer för PHP för att det verkar roligare och mer relevant för mig att lära sig.

# planering:
* Målgrupp:
De som är intresserade i nintendo spel, dela memes. Men man måste inte bara gilla nintendo.


# Arbetprocessen
* 11-04-2019: Jag har fått igång mitt setup med pug och node js och ska börja jobba på min sida baserad på min skiss. Jag har jobbat på min navbar.

* 24-04-2019: jag har laggt till en placeholder yill post och gjort navbaren lite bättre, laggt till en options sida men jag måste lägga till funktioner till de

* 02-05-2019: idag så ska jag lägga till login funktioner så man kan skapa användare. Jag har skapat databas för user. Jag blev inte klar med login idag.

* 08-05-2019: Jag har fixat så att när jag lägger in användarnamn och lösenorn i login så skrvs det ut på servern.

* 09-05-2019: Jag ska ska fixa fixa så att datan som läggs till via login sidan läggs till i en databas och fixa så man kan logga in. information laggs till i databasen nu.

* 15-05-2019: Inloggningssystemet har blivit fixad och nu när man går in på index sidan redirectas man till login sidan.

* Jag planerar at fixa post funktionen

* 16-05-2019: jag vet att en av problemen med post funktionen är att den inte har en funktion som gör att den körs

* 22-05-2019: jag fixa så att när man skriver i post såskickas det till databasen. Det är fixat nu problemet var att "text" i min post funktion kallades "post" vilket gjorde att det inte gick

* 23-05-2019: skriver på dokumentationen, försökte fixa post funktionen fick error.
    på post så är tanken att alla tables från databasen ska skickas till main sidan varje post skrivs ut på sidan. Just nu är de på konsolen så man kan just nu se post via ctrl+shif+i m

    Hur det ska lösas:
    loopa igenom alla post när jag får de på clienten och använd innerhtml parsa in den
    document.getinnerhtml by id posts

* 28-05-2019: nu skrivs posts ut på hemsidan jag använde metoden som nämndes på förra loggen.

* 29-05-2019: datum visas på posten och man kan logga ut genom att trycka på log out i navbaren
21:34: gjorde så login sidan funkar på mobilen och är validerad

installera paket genom att skriva
npm install express connectia md5 mysql pug file-system cookie-parser sqlstring

servern är hostad i port 3000

när du är inne på sidan så loggar du in och för att posta till databasen så trycker du på navbaren och går in på post

# tester
automatiserade tester gjordes via selenium När jag loggar in på min sida med fel lösenord med ett använda som redan finns. så får man ett medelande att det inte funkar.
när man skriver rätt användarnamn och lösenord så står det att man lyckades logga in och när man trycker på "login/signup" så kommer man till main page. Om man skriver ett nytt användarnamn och lösenord så skapas en användare och den läggs till i databasen.
testen för att logga in finns på login.side

Jag har laggt till html index.html problemet var att man kan inte ha en a tag inanför ul tag så jag hadde en li tag innanför.
På pug så skriver man li och på den andra raden så tabbar man för att a taggen ska vara inanför li.

Alla andra sidor är också validerade

På pug så tänkte jag inte på vad tabba gjorde jag visste bara att det var någonting som man skulle göra men nu så vet jag att tabba gör så att det som är raden under hamnar innanför taggen ovanför jag kommer förmodligen tänka tillbaks på det här i framtiden.

# säkerhet
lösenorden är encryptade så ingen kan se lösenorden på databasen, men det går att skicka kod på posten vilket behöver fixas det kan göra så att man kan förstöra sidan och man kan lägga upp bilder.

# Positiva erfarenheter
Loginsystemet gick bra att göra och att post systemet läggs in i databasen ohc funkar, dem skrivs ut i startsidan
# Negativa erfarenheter
Post systemet är inte färdigt än men jag har en idé om hur jag kan göra den. När man lägger upp en post så sparas den på databasen och när man är inne på huvudsidan så när man går in på konsolen så står alla posts där så om man tar alla postst och skriver ner dem med inner html så kommer det att skrivas ut på websidan som planerat. planerade att ha en option med darkmode men hann inte med.

Post systemet funkar nu men det är fortfarande en negativ erfarenhet att det inte fixades på deadlinen.
# Sammanfattning
Jag har lärt mig en del under det här prjektet som att koppla databaser till webben och lägga in på sidan, hur man gör en login sida och post. Men även små saker som på pug varför man måste tabba delar av koden, tidigare gjorde jag det utan att tänka på varför och vad det gjorde men för att sidan skulle bli validerad så a taggen vara innanför li taggen jag viste inte då hur jag skulle göra det men då kom jag på att vissa saker tabbas ju på pug vilket gjorde att sidan senare kunde bli validerad.

Jag är nöjde med hur slutprojektet blev det var en del som jag inte hann lägga till som profiler eller upvote och downvote men annars så är jag nöjd.


utdaterad sammanfattning:
Login och post systemet funkar vilket är bra men posts är inte hellt klart men det skrivs ut i konsolen när man är på startsidan vilket gör att det inte kommer bli så svårt att fixa det problem går att lösa via innerhtml