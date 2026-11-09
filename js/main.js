const IC={
 web:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
 mobile:'<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>',
 sys:'<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
 db:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
 cons:'<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2V17h6v-.3c0-.8.4-1.5 1-2A7 7 0 0 0 12 2z"/>',
 user:'<circle cx="9" cy="8" r="4"/><path d="M2 21c0-4 3-6 7-6s7 2 7 6M17 11a3 3 0 1 0 0-6M22 20c0-3-2-5-5-5.5"/>',
 team:'<circle cx="9" cy="8" r="4"/><path d="M2 21c0-4 3-6 7-6s7 2 7 6M17 11a3 3 0 1 0 0-6M22 20c0-3-2-5-5-5.5"/>',
 code:'<path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/>',
 shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="m9 12 2 2 4-4"/>',
 support:'<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/><path d="M19 20c0 1.5-2 2-5 2"/>',
 pin:'<path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
 phone:'<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/>',
 mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'
};
const svg=k=>`<svg viewBox="0 0 24 24" aria-hidden="true">${IC[k]}</svg>`;
// componente reutilizável: card com ícone
const Card=({ic,t,d,cls=''})=>`<article class="card rv ${cls}"><div class="ico">${svg(ic)}</div><h3>${t}</h3><p>${d}</p></article>`;

const SERVICOS=[
 {ic:'web',t:'Desenvolvimento Web',d:'Sites institucionais, portais e aplicações web rápidas, acessíveis e prontas para crescer.'},
 {ic:'mobile',t:'Desenvolvimento Mobile',d:'Aplicativos para iOS e Android com experiência fluida e integração com os seus sistemas.'},
 {ic:'sys',t:'Sistemas Empresariais',d:'ERPs, CRMs e painéis sob medida que automatizam processos e centralizam a operação.'},
 {ic:'db',t:'Banco de Dados',d:'Modelagem, migração e otimização de bancos relacionais e NoSQL, com backup e monitoramento.'},
 {ic:'cons',t:'Consultoria em TI',d:'Diagnóstico de arquitetura, escolha de tecnologias e plano de evolução para o seu time.'}
];
const DIFS=[
 {ic:'user',t:'Soluções personalizadas',d:'Cada sistema nasce do processo do cliente, não de um modelo pronto.'},
 {ic:'team',t:'Equipe especializada',d:'Engenheiros, designers e analistas com experiência em produtos reais.'},
 {ic:'code',t:'Tecnologia moderna',d:'Cloud, APIs e arquiteturas atuais, sempre com código revisado e testado.'},
 {ic:'shield',t:'Segurança e qualidade',d:'Boas práticas de segurança, LGPD e testes automatizados em cada entrega.'},
 {ic:'support',t:'Suporte contínuo',d:'Monitoramento, correções e evolução depois do lançamento.'}
];
const PROJ=[{n:'SpinLav',d:'Sistema web para lavanderia: o cliente solicita o serviço, vê tempo e valor estimados, agenda coleta em casa ou retirada e acompanha o pedido. O painel administrativo tem agenda do dia, bloqueio de horários, aviso por WhatsApp e login com verificação em duas etapas.',tech:['JavaScript','Supabase','PostgreSQL','PWA','Vercel'],url:'https://spinlavtest.vercel.app/'}];
const Projeto=p=>`<article class="card proj feat rv"><div class="thumb"><svg viewBox="0 0 300 180" fill="none" stroke="#00D4FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="100" y="14" width="100" height="152" rx="14"/><path d="M100 46h100"/><circle cx="116" cy="30" r="3"/><circle cx="130" cy="30" r="3"/><circle cx="150" cy="106" r="36"/><path d="M122 108c9-8 15 8 28 0s19 8 28 0"/></svg></div>
<div class="pbody"><h3>${p.n}</h3><p>${p.d}</p><div class="chips">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div><a class="link" href="${p.url}" target="_blank" rel="noopener">Ver projeto <span aria-hidden="true">↗</span></a></div></article>`;

document.getElementById('srv').innerHTML=SERVICOS.map(s=>Card(s)).join('');
document.getElementById('dif').innerHTML=DIFS.map(s=>Card(s)).join('');
document.getElementById('prj').innerHTML=PROJ.map(Projeto).join('');
document.getElementById('inf').innerHTML=[['pin','Av. Paulista, 1500 · 12º andar','São Paulo - SP, 01310-200'],['phone','(11) 4002-8800','Segunda a sexta, 9h às 18h'],['mail','contato@nexora.tech','Resposta em até 1 dia útil']].map(([i,a,b])=>`<div><div class="ico">${svg(i)}</div><div><b>${a}</b>${b}</div></div>`).join('');
const SOC={in:'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7c.6-1 1.9-2 3.9-2 4 0 4.3 2.6 4.3 5.9V21h-4v-5.6c0-1.4 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9z',gh:'M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.6-1.3-2.2-.3-4.600-1.100-4.600-5 0-1.100.4-2 1-2.700-.1-.3-.4-1.300.1-2.700 0 0 .8-.3 2.700 1a9.300 9.300 0 0 1 5 0c1.900-1.300 2.700-1 2.700-1 .5 1.400.2 2.400.1 2.700.6.7 1 1.600 1 2.700 0 3.900-2.400 4.700-4.600 5 .4.3.7.9.7 1.800v2.700c0 .3.2.6.7.5A10 10 0 0 0 12 2z',ig:'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm5 3.500a4.500 4.500 0 1 1 0 9 4.500 4.500 0 0 1 0-9zm0 2a2.500 2.500 0 1 0 0 5 2.500 2.500 0 0 0 0-5zM17.500 5.500a1 1 0 1 1 0 2 1 1 0 0 1 0-2z',x:'M18.200 2H21l-6.500 7.400L22 22h-6l-4.700-6.100L5.900 22H3l7-8L2.500 2h6.100l4.200 5.600zm-1 18h1.600L7.900 3.800H6.200z'};
document.getElementById('soc').innerHTML=Object.entries({in:'LinkedIn',gh:'GitHub',ig:'Instagram',x:'X'}).map(([k,n])=>`<a href="#inicio" aria-label="${n}"><svg viewBox="0 0 24 24"><path d="${SOC[k]}"/></svg></a>`).join('');
document.getElementById('yr').textContent=new Date().getFullYear();

// header: fixo, com fundo ao rolar; menu mobile
const hdr=document.getElementById('hdr'),mb=document.getElementById('menu'),nv=document.getElementById('nv');
const onScroll=()=>hdr.classList.toggle('sc',scrollY>20);addEventListener('scroll',onScroll,{passive:true});onScroll();
mb.onclick=()=>{const o=nv.classList.toggle('open');mb.setAttribute('aria-expanded',o);mb.textContent=o?'✕':'☰'};
nv.onclick=e=>{if(e.target.closest('a')){nv.classList.remove('open');mb.setAttribute('aria-expanded','false');mb.textContent='☰'}};

// link ativo no menu
const links=[...nv.querySelectorAll('a:not(.btn)')];
const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting)links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+en.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('main section[id]').forEach(s=>io.observe(s));

// revelar ao rolar
const rv=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');rv.unobserve(en.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>rv.observe(el));


// formulário (demonstração, sem envio real)
const f=document.getElementById('f'),ok=document.getElementById('ok');
f.addEventListener('submit',e=>{e.preventDefault();
 if(!f.nome.value.trim()||!/^\S+@\S+\.\S+$/.test(f.email.value)||!f.tipo.value||!f.msg.value.trim()){ok.textContent='Preencha nome, um e-mail válido, o tipo de serviço e a mensagem.';ok.className='ok show';return}
 ok.textContent=`Obrigado, ${f.nome.value.trim().split(' ')[0]}! Recebemos sua mensagem e retornaremos por e-mail em até um dia útil.`;ok.className='ok show';f.reset()});