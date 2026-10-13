// Génère les pages du site (GitHub Pages) à partir d'un gabarit commun. Usage : node generer.mjs
// Les passages « à compléter » (SIRET, adresse, médiateur…) sont à remplir avant l'ouverture des ventes.
import { writeFileSync } from 'node:fs';

const A = t => `<span class="a-completer">[à compléter : ${t}]</span>`;
const CONTACT = 'stiflexs@gmail.com';
const EDITEUR = 'Carneiro David';
const MAJ = '13 octobre 2026';
const PRIX = { stiflex: 49, aico: 79, pack: 99 };
const BROUILLON = `<p class="note">Document en cours de finalisation : il sera relu avant l'ouverture des ventes.</p>`;

const menu = [
  ['index.html', 'Accueil'], ['stiflex.html', 'Stiflex'], ['ai-company-os.html', 'AI Company OS'],
];
const pied = [
  ['mentions-legales.html', 'Mentions légales'], ['cgv.html', 'Conditions de vente'], ['licence.html', 'Licence'], ['confidentialite.html', 'Confidentialité'],
];

function page(fichier, titre, description, corps) {
  const lien = ([href, texte]) => `<a href="${href}"${href === fichier ? ' aria-current="page"' : ''}>${texte}</a>`;
  writeFileSync(fichier, `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${titre}</title>
<meta name="description" content="${description}">
<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="page">
<header class="haut">
  <a class="marque" href="index.html">⬡ <span>STIFLEX</span></a>
  <nav class="menu" aria-label="Navigation">${menu.map(lien).join('')}</nav>
</header>
<main>
${corps.trim()}
</main>
<footer class="bas">
  <span>© 2026 ${EDITEUR}</span>${pied.map(lien).join('')}<a href="mailto:${CONTACT}">Contact</a>
</footer>
</div>
</body>
</html>
`);
}

const bientot = `<a class="bouton plein" aria-disabled="true">Bientôt disponible</a>`;
const essai = `<p>Essai gratuit de 14 jours, puis licence à vie avec 1 an de mises à jour.</p>`;

// ------------------------------------------------------------------ Accueil
page('index.html', 'Stiflex et AI Company OS', 'Des agents IA qui travaillent pour toi, sur ton ordinateur : Stiflex et AI Company OS.', `
<h1>Des agents IA qui travaillent pour toi, sur ton ordinateur.</h1>
<p class="chapo">Deux logiciels Windows, en français, qui fonctionnent sur ta machine : tes données restent chez toi. Utilise-les séparément, ou ensemble pour aller plus loin.</p>
<div class="grille">
  <section class="carte">
    <h2>Stiflex</h2>
    <p>Ta station d'agents IA : un assistant (ORION) à qui tu parles, une équipe qui fait de vraies tâches — recherches, fichiers, automatisations — dans un bureau animé.</p>
    <p class="prix">${PRIX.stiflex} € <small>TTC, achat unique</small></p>
    <a class="bouton" href="stiflex.html">Découvrir Stiflex</a>
  </section>
  <section class="carte">
    <h2>AI Company OS</h2>
    <p>Ton entreprise d'agents IA : une organisation complète (direction, marketing, ventes, finance…) qui planifie le travail et te demande ton accord avant d'agir.</p>
    <p class="prix">${PRIX.aico} € <small>TTC, achat unique</small></p>
    <a class="bouton" href="ai-company-os.html">Découvrir AI Company OS</a>
  </section>
  <section class="carte pack">
    <h2>Le pack</h2>
    <p>Les deux logiciels, reliés : AI Company OS confie des tâches concrètes à Stiflex, et ORION consulte ton entreprise.</p>
    <p class="prix">${PRIX.pack} € <small>TTC au lieu de ${PRIX.stiflex + PRIX.aico} €</small></p>
    ${bientot}
  </section>
</div>
${essai}
<h2>Ce qu'il faut savoir</h2>
<ul class="liste">
  <li>Windows 10 ou 11 (64 bits).</li>
  <li>Les agents réfléchissent avec un modèle d'IA que tu choisis (par exemple Claude) : il te faut ton propre abonnement ou ta propre clé API, facturés par le fournisseur d'IA.</li>
  <li>Une connexion Internet pour l'IA et la vérification de la licence (30 jours hors ligne tolérés).</li>
</ul>
`);

// ------------------------------------------------------------------ Stiflex
page('stiflex.html', 'Stiflex — station d\'agents IA', 'Stiflex : ta station d\'agents IA en français, avec un assistant vocal, sur ton ordinateur.', `
<h1>Stiflex</h1>
<p class="chapo">Ta station d'agents IA. Tu donnes des ordres à ORION, à la voix ou au clavier ; ton équipe d'agents s'en occupe et tu suis tout dans un bureau animé.</p>
<h2>Ce que Stiflex fait</h2>
<ul class="liste">
  <li><strong>Un assistant qui parle français</strong> : ORION te comprend à la voix et te répond.</li>
  <li><strong>Une vraie équipe</strong> : tu crées des agents spécialisés (recherche, écriture, code…) qui se répartissent le travail.</li>
  <li><strong>De vraies tâches</strong> : recherches sur le web, lecture et écriture de fichiers, petits programmes, rapports.</li>
  <li><strong>Des routines</strong> : un point chaque matin, une veille chaque semaine, du travail pendant ton absence.</li>
  <li><strong>Des connecteurs</strong> pour brancher tes outils, et des recettes toutes prêtes.</li>
  <li><strong>Tu gardes la main</strong> : les actions sensibles te sont demandées avant d'être faites ; un arrêt d'urgence coupe tout.</li>
  <li><strong>Choix de l'IA</strong> : Claude, ChatGPT, Groq, OpenRouter et d'autres, avec ton propre abonnement ou ta clé.</li>
</ul>
<h2>Prix</h2>
<p class="prix">${PRIX.stiflex} € <small>TTC, achat unique — 1 an de mises à jour</small></p>
${essai}
${bientot}
<p class="note">Stiflex est construit à partir du logiciel libre StarNet (licence MIT). Voir la page <a href="licence.html">Licence</a>.</p>
`);

// ------------------------------------------------------------------ AI Company OS
page('ai-company-os.html', 'AI Company OS — entreprise d\'agents IA', 'AI Company OS : une organisation complète d\'agents IA qui travaille pour ton entreprise, sous ton contrôle.', `
<h1>AI Company OS</h1>
<p class="chapo">Une entreprise d'agents IA au service de la tienne. Tu fixes l'objectif ; le directeur (Atlas) prépare un plan, tu le valides, et chaque équipe s'y met.</p>
<h2>Ce que AI Company OS fait</h2>
<ul class="liste">
  <li><strong>Une organisation complète</strong> : direction, finance, marketing, ventes, tech, opérations, administratif, sécurité.</li>
  <li><strong>Jusqu'à 4 activités</strong>, chacune avec son équipe (pilote, production, contenus, service client), que tu nommes au premier lancement.</li>
  <li><strong>Rien sans ton accord</strong> : dépenses, publications et envois aux clients attendent ta validation.</li>
  <li><strong>Sécurité</strong> : coffre-fort chiffré pour tes clés, filtre anti-fuite de données, journal de toutes les actions, budget IA plafonné.</li>
  <li><strong>Rapports</strong> réguliers de tes équipes, tableau de bord.</li>
  <li><strong>Avec Stiflex</strong> (pack) : les tâches concrètes sur l'ordinateur ou le web sont confiées à ta station Stiflex.</li>
</ul>
<p class="note">La finance, les paiements et le trading fonctionnent en <strong>simulation</strong> : AI Company OS ne déplace jamais d'argent réel. Une clé API Anthropic (Claude) est nécessaire ; son usage est facturé par Anthropic.</p>
<h2>Prix</h2>
<p class="prix">${PRIX.aico} € <small>TTC, achat unique — 1 an de mises à jour</small></p>
${essai}
${bientot}
`);

// ------------------------------------------------------------------ Mentions légales
page('mentions-legales.html', 'Mentions légales', 'Mentions légales du site Stiflex.', `
<div class="doc">
<h1>Mentions légales</h1>
${BROUILLON}
<h2>Éditeur</h2>
<p>${EDITEUR}, entrepreneur individuel (micro-entreprise)<br>
SIRET : ${A('numéro SIRET')}<br>
Adresse : ${A('adresse professionnelle')}<br>
Contact : <a href="mailto:${CONTACT}">${CONTACT}</a><br>
Directeur de la publication : ${EDITEUR}<br>
TVA : ${A('« TVA non applicable, art. 293 B du CGI » si franchise en base, ou numéro de TVA')}</p>
<h2>Vente</h2>
<p>Les licences sont vendues par l'intermédiaire de Gumroad, plateforme de vente qui agit comme revendeur (« merchant of record ») : elle encaisse le paiement, envoie le reçu et collecte la TVA applicable. Ses conditions s'appliquent au paiement.</p>
<h2>Hébergement</h2>
<p>Ce site est hébergé par GitHub Pages (GitHub, Inc., San Francisco, États-Unis).</p>
<h2>Propriété intellectuelle</h2>
<p>Les marques « Stiflex » et « AI Company OS », les textes et visuels de ce site appartiennent à ${EDITEUR}, sauf mention contraire. Stiflex intègre des composants libres dont les licences sont listées sur la page <a href="licence.html">Licence</a>.</p>
<p><small>Mise à jour : ${MAJ}</small></p>
</div>
`);

// ------------------------------------------------------------------ CGV
page('cgv.html', 'Conditions générales de vente', 'Conditions générales de vente des licences Stiflex et AI Company OS.', `
<div class="doc">
<h1>Conditions générales de vente</h1>
${BROUILLON}
<h2>1. Objet</h2>
<p>Les présentes conditions encadrent la vente de licences d'utilisation des logiciels Stiflex et AI Company OS (ensemble, « les Logiciels »), édités par ${EDITEUR} (voir les <a href="mentions-legales.html">mentions légales</a>), aux particuliers et aux professionnels.</p>
<h2>2. Produits</h2>
<p>Chaque achat donne une licence d'utilisation à durée illimitée du Logiciel concerné, pour un ordinateur, avec un an de mises à jour à compter de l'achat. Les Logiciels fonctionnent sous Windows 10 ou 11 (64 bits). Ils utilisent des services d'intelligence artificielle tiers (par exemple Claude d'Anthropic) avec l'abonnement ou la clé du client : ces services ne sont pas inclus et sont facturés par leurs fournisseurs. Un essai gratuit de 14 jours permet de vérifier la compatibilité avant tout achat.</p>
<h2>3. Prix</h2>
<p>Les prix sont indiqués en euros, toutes taxes comprises. Le prix applicable est celui affiché au moment de la commande.</p>
<h2>4. Commande et paiement</h2>
<p>La commande et le paiement sont réalisés sur la page de paiement de Gumroad, qui encaisse le paiement (carte bancaire, PayPal…) et envoie le reçu. La commande est ferme à la confirmation du paiement.</p>
<h2>5. Livraison</h2>
<p>La clé de licence et le lien de téléchargement sont envoyés immédiatement par e-mail après le paiement.</p>
<h2>6. Droit de rétractation</h2>
<p>Pour un contenu numérique fourni sans support matériel, le consommateur peut renoncer à son droit de rétractation de 14 jours en acceptant expressément, au moment de la commande, que l'exécution commence immédiatement (article L221-28, 13° du Code de la consommation). L'essai gratuit de 14 jours permet de tester le Logiciel avant l'achat. ${A('politique de remboursement retenue, ex. « remboursement sur demande dans les 14 jours suivant l\'achat »')}</p>
<h2>7. Garanties</h2>
<p>Le consommateur bénéficie de la garantie légale de conformité des contenus et services numériques (articles L224-25-12 et suivants du Code de la consommation). En cas de défaut, contacter <a href="mailto:${CONTACT}">${CONTACT}</a>.</p>
<h2>8. Responsabilité</h2>
<p>Les Logiciels s'appuient sur des modèles d'intelligence artificielle qui peuvent se tromper : le client reste responsable des décisions prises et des contenus publiés à partir de leurs propositions. Les fonctions financières d'AI Company OS fonctionnent en simulation et ne constituent pas un conseil financier.</p>
<h2>9. Médiation</h2>
<p>En cas de litige, le consommateur peut recourir gratuitement au médiateur de la consommation : ${A('nom et coordonnées du médiateur de la consommation choisi')}. Il peut aussi utiliser la plateforme européenne de règlement en ligne des litiges.</p>
<h2>10. Droit applicable</h2>
<p>Les présentes conditions sont soumises au droit français.</p>
<p><small>Mise à jour : ${MAJ}</small></p>
</div>
`);

// ------------------------------------------------------------------ Licence
page('licence.html', 'Licence d\'utilisation', 'Contrat de licence d\'utilisation de Stiflex et AI Company OS, et composants libres.', `
<div class="doc">
<h1>Licence d'utilisation</h1>
${BROUILLON}
<h2>1. Ce que tu peux faire</h2>
<p>La licence te permet d'installer et d'utiliser le Logiciel acheté sur un ordinateur à la fois, pour tes besoins personnels ou professionnels. Pour l'utiliser sur un autre ordinateur, écris à ${CONTACT} : nous transférons ta licence.</p>
<h2>2. Ce qui n'est pas permis</h2>
<ul class="liste">
  <li>revendre, louer ou partager ta clé de licence ;</li>
  <li>contourner la vérification de licence ;</li>
  <li>décompiler le Logiciel, sauf dans les cas autorisés par la loi (article L122-6-1 du Code de la propriété intellectuelle).</li>
</ul>
<h2>3. Essai</h2>
<p>Le Logiciel peut être utilisé gratuitement pendant 14 jours. Ensuite, une licence est nécessaire pour continuer ; tes données restent sur ton ordinateur.</p>
<h2>4. Mises à jour</h2>
<p>L'achat inclut un an de mises à jour. Au-delà, la version installée continue de fonctionner.</p>
<h2>5. Composants libres</h2>
<p>Stiflex est construit à partir de <strong>StarNet</strong> (https://github.com/androoAGI/starnet), logiciel libre d'Andrew Sims publié sous licence MIT. Conformément à cette licence, la notice suivante est conservée :</p>
<pre class="note" style="white-space:pre-wrap;font-size:13px">MIT License

Copyright (c) 2026 Andrew Sims

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.</pre>
<p>Stiflex n'est ni affilié à StarNet ni approuvé par son auteur. Les ajouts et modifications propres à Stiflex, le nom « Stiflex » et son logo appartiennent à ${EDITEUR}.</p>
<p>Les Logiciels utilisent aussi d'autres composants libres (notamment Whisper, Kokoro, Tauri, React), chacun sous sa propre licence, fournie avec le Logiciel.</p>
<p><small>Mise à jour : ${MAJ}</small></p>
</div>
`);

// ------------------------------------------------------------------ Confidentialité
page('confidentialite.html', 'Politique de confidentialité', 'Comment Stiflex et AI Company OS traitent tes données.', `
<div class="doc">
<h1>Politique de confidentialité</h1>
${BROUILLON}
<h2>En bref</h2>
<p>Stiflex et AI Company OS fonctionnent sur ton ordinateur. Tes conversations, fichiers, tâches et réglages y restent. Ils ne sont envoyés qu'aux services que <strong>tu</strong> choisis d'utiliser.</p>
<h2>Responsable</h2>
<p>${EDITEUR} — contact : <a href="mailto:${CONTACT}">${CONTACT}</a>.</p>
<h2>Ce qui quitte ton ordinateur</h2>
<ul class="liste">
  <li><strong>Fournisseur d'IA que tu choisis</strong> (Anthropic, OpenAI, Groq, OpenRouter…) : les messages et tâches que tu confies aux agents, pour qu'ils soient traités. Leur politique de confidentialité s'applique.</li>
  <li><strong>Reconnaissance vocale en ligne</strong> (si tu l'actives, par exemple Groq) : l'enregistrement de ta voix, pour le transcrire. Sinon, la reconnaissance se fait sur ton ordinateur.</li>
  <li><strong>Vérification de la licence</strong> (Gumroad) : ta clé de licence et l'identifiant du produit, au moment de l'activation puis au plus une fois par semaine. Aucune autre information sur ton ordinateur n'est envoyée.</li>
  <li><strong>Achat</strong> (Gumroad) : les informations de commande et de paiement, traitées par Gumroad.</li>
  <li><strong>Services que tu connectes toi-même</strong> (messageries, outils en ligne) : uniquement ce que tu leur confies.</li>
</ul>
<h2>Ce que nous ne faisons pas</h2>
<p>Aucune publicité, aucune revente de données, aucun suivi de ton utilisation : les Logiciels n'envoient pas de statistiques d'usage à l'éditeur.</p>
<h2>Tes droits</h2>
<p>Conformément au RGPD, tu peux demander l'accès, la rectification ou la suppression des données te concernant détenues par l'éditeur (en pratique : ton adresse e-mail d'achat) en écrivant à <a href="mailto:${CONTACT}">${CONTACT}</a>. Tu peux aussi saisir la CNIL (cnil.fr). Les données présentes sur ton ordinateur se suppriment en désinstallant le Logiciel et en effaçant son dossier de données.</p>
<h2>Ce site</h2>
<p>Ce site n'utilise ni cookie ni outil de mesure d'audience. Son hébergeur (GitHub Pages) peut enregistrer des journaux techniques (dont l'adresse IP) pour la sécurité du service.</p>
<p><small>Mise à jour : ${MAJ}</small></p>
</div>
`);

console.log('pages générées');
