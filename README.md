# Proiect Page1 - Jurnal sesiune

## Ce am facut

- Creat `page1.html` — pagina web cu mesajul **"SUNT PE AICI! VA PUP DIN MERS!"**
  - Fundal turcoaz in degrade
  - Text H1 alb, centrat, responsive

- Lansat server local Node.js pe portul 8080
  - URL local: http://localhost:8080/page1.html

- Conectat contul GitHub: **sorinmihai1970**
  - Tool folosit: GitHub CLI (`gh`)

- Creat repository GitHub: **page1**
  - URL: https://github.com/sorinmihai1970/page1

- Activat **GitHub Pages**
  - URL: https://sorinmihai1970.github.io/page1/

- Deploy pe **Vercel**
  - URL: https://page1-kohl.vercel.app

---

## Configurari salvate

| Ce | Valoare |
|---|---|
| Git user.name | sorinmihai1970 |
| Git user.email | sorinmihai1970@users.noreply.github.com |
| GitHub CLI auth | activ (gh auth login) |
| Vercel scope | sorinmihai1970s-projects |

---

## Comenzi utile pentru sesiunile urmatoare

### Repornire server local
```bash
cd "d:\Sorin\SIM\AI\Vibe coding\Lucru"
node -e "const http=require('http'),fs=require('fs'),path=require('path');http.createServer((req,res)=>{let f=path.join('.',req.url==='/'?'/index.html':req.url);fs.readFile(f,(e,d)=>{if(e){res.writeHead(404);res.end('Not found')}else{res.writeHead(200,{'Content-Type':'text/html'});res.end(d)}})}).listen(8080,()=>console.log('Server: http://localhost:8080'));"
```

### Push modificari pe GitHub
```bash
git add .
git commit -m "descriere modificare"
git push
```

### Redeploy pe Vercel
```bash
vercel --token <TOKEN> --yes --scope sorinmihai1970s-projects --prod
```

---

## Fisiere in proiect

- `page1.html` — pagina originala
- `index.html` — copie pentru GitHub Pages si Vercel (fisier default)
- `.vercel/` — configuratie Vercel (generat automat)
