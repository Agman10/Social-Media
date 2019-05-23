Arbetprocessen
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

* tester:
tester gjordes via selenium När jag loggar in på min sida med fel lösenord med ett använda som redan finns. så får man ett medelande att det inte funkar.
när man skriver rätt användarnamn och lösenord så står det att man lyckades logga in och när man trycker på "login/signup" så kommer man till main page. Om man skriver ett nytt användarnamn och lösenord så skapas en användare och den läggs till i databasen.

på post så är tanken att alla tables från databasen ska skickas till main sidan varje post skrivs ut på sidan. Just nu är de på konsolen så man kan just nu se post via ctrl+shif+i m

loopa igenom alla post när jag får de på clienten och använd innerhtml parsa in den
document.getinnerhtml by id posts

installera paket genom att skriva
npm install express connectia md5 mysql pug file-system cookie-parser sqlstring

servern är hostad i port 3000

när du är inne på sidan så loggar du in och för att posta till databasen så trycker du på navbaren och går in på post
