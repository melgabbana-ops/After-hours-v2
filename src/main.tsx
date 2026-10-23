import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, LockKeyhole, Sparkles, Gamepad2, Layers3, MoonStar, Target, UsersRound, ShoppingBag, ShieldCheck, CheckCircle2, Pause, Square, CirclePlay } from "lucide-react";
import "./styles.css";

type Screen = "home" | "experience" | "safety" | "profile";
type Plan = { safeword:string; amberSignal:string; boundaries:string };

const emptyPlan:Plan={safeword:"",amberSignal:"",boundaries:""};
function readPlan():Plan {
  try { const raw=localStorage.getItem("afterhours.safety-plan.v1"); if(!raw)return emptyPlan; const value=JSON.parse(raw); return {safeword:typeof value.safeword==="string"?value.safeword:"",amberSignal:typeof value.amberSignal==="string"?value.amberSignal:"",boundaries:typeof value.boundaries==="string"?value.boundaries:""}; } catch { return emptyPlan; }
}
function App() {
 const [screen,setScreen]=React.useState<Screen>("home");
 const [language,setLanguage]=React.useState<"nl"|"en">("nl");
 const [ageConfirmed,setAgeConfirmed]=React.useState(false);
 const [consent,setConsent]=React.useState(false);
 const [status,setStatus]=React.useState<"ready"|"active"|"paused"|"stopped">("ready");
 const [plan,setPlan]=React.useState<Plan>(readPlan);
 const [saved,setSaved]=React.useState(false);
 const [message,setMessage]=React.useState("");
 const [round,setRound]=React.useState(0);
 const [task,setTask]=React.useState<string|null>(null);
 const t=(nl:string,en:string)=>language==="nl"?nl:en;
 const enterExperience=()=>{ if(!ageConfirmed){setMessage(t("Bevestig eerst dat je 18 jaar of ouder bent.","Confirm that you are 18 or older first."));return;} setScreen("experience");setMessage(""); };
 const savePlan=()=>{try{localStorage.setItem("afterhours.safety-plan.v1",JSON.stringify(plan));setSaved(true);setMessage(t("Veiligheidsplan bewaard op dit apparaat.","Safety plan saved on this device."));}catch{setMessage(t("Opslaan is niet gelukt.","Could not save."));}};
 const clearPlan=()=>{localStorage.removeItem("afterhours.safety-plan.v1");setPlan(emptyPlan);setSaved(false);setMessage(t("Veiligheidsplan gewist.","Safety plan cleared."));};
 const rounds=[
  {title:t("De Eerste Stap","The First Step"),body:t("Spreek af wat welkom is, wat niet past en wat openblijft voor overleg.","Agree on what feels welcome, what is off-limits, and what remains open for discussion.")},
  {title:t("De Richting","Choose Your Direction"),body:t("Kies samen een richting. Vraag, luister en pas aan wanneer iemand daarom vraagt.","Choose a direction together. Ask, listen, and adjust whenever requested.")},
  {title:t("Aftercare","Aftercare"),body:t("Check bij elkaar in, neem rustig de tijd en sluit af met zorg voor elkaar.","Check in with one another, take your time, and finish with care.")}
 ];
 React.useEffect(()=>{ const onPop=()=>{setScreen("home")}; window.addEventListener("popstate",onPop); return()=>window.removeEventListener("popstate",onPop)},[]);
 return <main className="app-shell">
  <header className="topbar">
   <a className="brand" href="#" onClick={e=>{e.preventDefault();setScreen("home")}} aria-label="AFTER HOURS home"><span className="brand-mark">✧</span><span>AFTER <em>HOURS</em></span></a>
   <div className="top-actions"><span className="adult-tag">18+ · {t("PRIVÉWERELD","PRIVATE EXPERIENCE")}</span><button className="language-toggle" onClick={()=>setLanguage(language==="nl"?"en":"nl")} aria-label={t("Taal wisselen","Switch language")}>{language.toUpperCase()} <span className="muted">/ {language==="nl"?"EN":"NL"}</span></button></div>
  </header>
  {screen==="home" && <>
   <section className="hero">
    <div className="hero-orb orb-one"></div><div className="hero-orb orb-two"></div>
    <div className="hero-copy"><span className="eyebrow"><Sparkles size={14}/> KINKY · PLAY · CONNECT</span>
     <h1>AFTER<br/><em>HOURS</em></h1><div className="gold-rule"><span/></div>
     <p className="tagline">{t("JOUW REGELS. JOUW GRENZEN. JOUW ERVARING.","YOUR RULES. YOUR LIMITS. YOUR EXPERIENCE.")}</p>
     <p className="lead">{t("Een premium interactieve wereld voor volwassenen. Bewust gekozen, veilig en helemaal op jouw tempo.","A premium interactive world for adults. Deliberate, safe, and entirely at your pace.")}</p>
     <label className="age-check"><input type="checkbox" checked={ageConfirmed} onChange={e=>{setAgeConfirmed(e.target.checked);setMessage("")}}/><span>{t("Ik verklaar dat ik 18 jaar of ouder ben.","I confirm that I am 18 or older.")}</span></label>
     <button className="primary-cta" onClick={enterExperience}>{t("BETREED AFTER HOURS","ENTER AFTER HOURS")} <ArrowUpRight size={18}/></button>
     <p className="fineprint">{t("De leeftijdsverklaring is geen officiële leeftijdsverificatie. Toestemming wordt apart gevraagd.","Self-declared age is not formal age verification. Consent is requested separately.")}</p>
     {message && <p role="status" className="status-message">{message}</p>}
    </div>
    <div className="hero-art" aria-hidden="true"><div className="art-ring ring-a"></div><div className="art-ring ring-b"></div><div className="art-symbol">A<span>H</span></div><div className="art-caption">YOUR NIGHT · YOUR RULES</div></div>
   </section>
   <section className="feature-section"><div className="section-heading"><span className="eyebrow">{t("ONTDEK DE PRIVÉWERELD","EXPLORE THE PRIVATE WORLD")}</span><h2>{t("Meer dan een spel.","More than a game.")}</h2><p>{t("Ontdek ervaringen, reflectie en progressie binnen jouw grenzen.","Explore experiences, reflection and progress within your boundaries.")}</p></div>
    <div className="feature-grid">
     {[[Gamepad2,t("Kinky games","Kinky games"),t("Interactieve ervaringen","Interactive experiences")],[Layers3,t("Kinky tarot","Kinky tarot"),t("Kaarten en reflectie","Cards and reflection")],[MoonStar,t("Astrologie","Astrology"),t("Ontdek jouw sterrenbeeld","Explore your zodiac")],[Target,t("Missies","Missions"),t("Dagelijks en wekelijks","Daily and weekly")],[UsersRound,t("Connect","Connect"),t("Op jouw voorwaarden","On your terms")],[ShoppingBag,t("Shop","Shop"),t("Jouw AFTER HOURS","Your AFTER HOURS")]].map(([Icon,title,copy]:any,i)=><article className="feature-card" key={i}><span className="feature-num">0{i+1}</span><Icon size={21}/><h3>{title}</h3><p>{copy}</p></article>)}
    </div>
   </section>
   <section className="promise"><div className="promise-icon"><ShieldCheck size={25}/></div><span className="eyebrow">CONSENT FIRST</span><h2>{t("Jouw grenzen bepalen de ervaring.","Your boundaries lead the experience.")}</h2><p>{t("Een pauze is altijd mogelijk. Stoppen mag altijd. Geen enkele eerdere afspraak gaat boven een huidige grens.","Pause whenever you need. You can always stop. No prior agreement outranks a current boundary.")}</p><button className="secondary-cta" onClick={()=>setScreen("safety")}>{t("STEL JE VEILIGHEIDSPLAN IN","SET YOUR SAFETY PLAN")} <ArrowUpRight size={16}/></button></section>
   <footer className="footer"><span>AFTER HOURS · CINEMATIC BLACK & GOLD</span><span>{t("Verken bewust. Kies zelf.","Explore mindfully. Choose for yourself.")}</span></footer>
  </>}
  {screen==="experience" && <section className="workspace">
   <button className="back-link" onClick={()=>setScreen("home")}>← {t("Terug naar home","Back home")}</button>
   <span className="eyebrow"><Sparkles size={14}/> {t("BEWUST · SAMEN · OP JOUW TEMPO","MINDFUL · TOGETHER · AT YOUR PACE")}</span><h1>{t("De ervaring","The Experience")}</h1>
   <p className="workspace-lead">{t("Een veilige basis begint met afstemmen. Vink toestemming aan voordat je begint.","A safe foundation starts with a check-in. Confirm consent before starting.")}</p>
   <label className="consent-check"><input type="checkbox" checked={consent} onChange={e=>{setConsent(e.target.checked);if(!e.target.checked&&status==="active")setStatus("paused")}}/><span>{t("We stemmen vrijwillig af en kunnen op elk moment stoppen.","We are choosing this willingly and may stop at any time.")}</span></label>
   <div className="session-card"><div className="session-top"><span className="eyebrow">{t("RONDE","ROUND")} 0{round+1} / 03</span><span className={'session-state state-'+status}>{t(status==="ready"?"KLAAR":status==="active"?"ACTIEF":status==="paused"?"GEPAUZEERD":"GESTOPT",status.toUpperCase())}</span></div>
    <h2>{rounds[round].title}</h2><p>{rounds[round].body}</p>
    <div className="session-progress"><span style={{width:((round+1)/3*100)+"%"}}/></div>
    {task&&<p className="task-note">{t("Gekozen focus: ","Selected focus: ")}{task}</p>}
    <div className="task-options">{[t("Rustig opbouwen","Build slowly"),t("Grenzen en signalen","Boundaries and signals"),t("Vertrouwen","Trust")].map(x=><button className={'task-choice '+(task===x?'chosen':'')} key={x} onClick={()=>setTask(x)}>{x}</button>)}</div>
    <div className="session-controls">
      {status!=="active"&&status!=="stopped"&&<button className="primary-cta" disabled={!consent} onClick={()=>{setStatus("active");setMessage("")}}>{status==="paused"?t("HERVAT","RESUME"):t("START RONDE","START ROUND")} <CirclePlay size={17}/></button>}
      {status==="active"&&<button className="secondary-cta" onClick={()=>setStatus("paused")}><Pause size={16}/> {t("PAUZE","PAUSE")}</button>}
      {status!=="stopped"&&<button className="stop-button" onClick={()=>{setStatus("stopped");setConsent(false)}}><Square size={15}/> {t("STOP NU","STOP NOW")}</button>}
      {status==="active"&&round<2&&<button className="secondary-cta" onClick={()=>{setRound(r=>r+1);setTask(null);setStatus("ready");setConsent(false)}}>{t("VOLGENDE RONDE","NEXT ROUND")} →</button>}
    </div>
    <p className="safety-note"><LockKeyhole size={14}/> {t("Stoppen mag altijd, ook zonder uitleg.","You may always stop, without explanation.")}</p>
   </div>
   <button className="secondary-cta" onClick={()=>setScreen("safety")}>{t("VEILIGHEIDSPLAN","SAFETY PLAN")}</button>
  </section>}
  {screen==="safety" && <section className="workspace">
    <button className="back-link" onClick={()=>setScreen("home")}>← {t("Terug naar home","Back home")}</button>
    <span className="eyebrow"><LockKeyhole size={14}/> {t("PRIVÉ · OP DIT APPARAAT","PRIVATE · ON THIS DEVICE")}</span><h1>{t("Jouw veiligheidsplan","Your safety plan")}</h1>
    <p className="workspace-lead">{t("Deze afspraken worden alleen lokaal in deze browser opgeslagen.","These agreements are saved only in this browser's local storage.")}</p>
    <div className="session-card safety-form">
      <label>{t("Stopwoord","Safeword")}<input maxLength={80} value={plan.safeword} onChange={e=>{setPlan({...plan,safeword:e.target.value});setSaved(false)}} placeholder={t("Bijvoorbeeld: ROOD","For example: RED")}/></label>
      <label>{t("Pauze- of bijstuurwoord","Pause or slow-down signal")}<input maxLength={80} value={plan.amberSignal} onChange={e=>{setPlan({...plan,amberSignal:e.target.value});setSaved(false)}} placeholder={t("Bijvoorbeeld: ORANJE","For example: AMBER")}/></label>
      <label>{t("Grenzen en afspraken","Boundaries and agreements")}<textarea rows={4} maxLength={1000} value={plan.boundaries} onChange={e=>{setPlan({...plan,boundaries:e.target.value});setSaved(false)}} placeholder={t("Wat is niet welkom? Wat vraagt een check-in?","What is off-limits? What needs a check-in?")}/></label>
      <div className="session-controls"><button className="primary-cta" onClick={savePlan}>{t("AFSPRAKEN OPSLAAN","SAVE AGREEMENTS")}</button><button className="stop-button" onClick={clearPlan}>{t("WISSEN","CLEAR")}</button></div>
      {saved&&<p role="status" className="status-message"><CheckCircle2 size={16}/> {t("Bewaard op dit apparaat.","Saved on this device.")}</p>}
      <p className="safety-note">{t("Je mag op elk moment stoppen. Een stopwoord vervangt geen communicatie.","You may stop at any time. A safeword does not replace communication.")}</p>
    </div>
  </section>}
  {screen==="profile" && <section className="workspace"><button className="back-link" onClick={()=>setScreen("home")}>← {t("Terug","Back")}</button><span className="eyebrow">{t("JOUW RUIMTE","YOUR SPACE")}</span><h1>{t("Profiel","Profile")}</h1><div className="session-card"><p>{t("Deze preview bewaart alleen veiligheidsafspraken lokaal. Accounts en online synchronisatie worden aangesloten zodra de backendconfiguratie beschikbaar is.","This preview stores safety agreements locally. Accounts and online sync will be connected once backend configuration is available.")}</p><button className="secondary-cta" onClick={()=>setScreen("safety")}>{t("OPEN VEILIGHEIDSPLAN","OPEN SAFETY PLAN")}</button></div></section>}
 </main>;
}
createRoot(document.getElementById("root")!).render(<React.StrictMode><App/></React.StrictMode>);
