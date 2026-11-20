const bloodGroups = ['A+', 'A−', 'B+', 'B−', 'AB+', 'AB−', 'O+', 'O−'];
const areas = ['Ahmedabad','Ranip','New Ranip','Vadaj','Sabarmati','Chandkheda','Motera','Gota','Thaltej','Satellite','Bopal','Maninagar','Nikol','Naroda','Vatva','Isanpur','Paldi','Navrangpura','CG Road','Juhapura','Shahibaug','Memnagar','Drive-In'];
const translations = {
  en: {hero:'Every minute matters.<br><em>Be someone\'s lifeline.</em>',sub:'Connect people who need blood with willing donors in Ahmedabad.',request:'🩸 Request Blood',donor:'＋ Become a Donor',requestTitle:'Emergency blood request',donorTitle:'Donor registration',submitReq:'Post emergency request',submitDon:'Register as donor',name:'Full name',phone:'Mobile number',group:'Blood group',units:'Units needed',hospital:'Hospital / location',area:'Area',notes:'Additional details (optional)',availability:'Available to donate?',urgent:'Urgent request',recent:'Urgent requests',empty:'No urgent requests posted on this device yet.',thanks:'Saved on this device only. This prototype does not notify real donors.',availabilityYes:'Yes, I can be contacted',availabilityNo:'Not currently available',findDonors:'Find donors',donorsIntro:'Filter registered donors by blood group, area, and—when they have opted in—GPS distance.',allGroups:'All groups',allAreas:'All areas',distance:'Within distance',anyDistance:'Any distance',useLocation:'📍 Use my location',locationNeeded:'Allow location access to filter by distance. You can still search by area.',locationReady:'Your location is ready. Distance is calculated only for donors who opted in to share theirs.',locationError:'Could not get your location. Allow location access or search by area.',donorsEmpty:'No available donors match these filters on this device.',noDonors:'No donors registered on this device yet.',contactDonor:'Call donor',callRequester:'Call requester',distanceAway:'away',areaFilter:'Area',groupFilter:'Blood group',how:'How it works',step1:'Share a need',step1Text:'Enter blood group, units, hospital and contact number.',step2:'Find a donor',step2Text:'Filter registered donors by blood group, Ahmedabad area and opted-in distance.',step3:'Confirm safely',step3Text:'Hospital staff confirm availability, testing and compatibility.',areasTitle:'Ahmedabad areas',call:'Call',urgentLabel:'URGENT',locationPrompt:'Share GPS location for distance search (optional)',distancePrivacy:'Your GPS coordinates stay in this browser and are only used for approximate distance filtering.',donorSaved:'Donor registered on this device only.',requestSaved:'Request posted on this device only.',invalidPhone:'Enter a valid 10-digit Indian mobile number.',km:'km'},
  hi: {hero:'हर मिनट महत्वपूर्ण है।<br><em>किसी की जीवनरेखा बनें।</em>',sub:'अहमदाबाद में रक्त की आवश्यकता वाले लोगों को इच्छुक रक्तदाताओं से जोड़ें।',request:'🩸 रक्त की मांग करें',donor:'＋ रक्तदाता बनें',requestTitle:'आपातकालीन रक्त अनुरोध',donorTitle:'रक्तदाता पंजीकरण',submitReq:'आपात अनुरोध पोस्ट करें',submitDon:'रक्तदाता पंजीकरण',name:'पूरा नाम',phone:'मोबाइल नंबर',group:'ब्लड ग्रुप',units:'यूनिट की आवश्यकता',hospital:'अस्पताल / स्थान',area:'क्षेत्र',notes:'अतिरिक्त जानकारी (वैकल्पिक)',availability:'दान के लिए उपलब्ध?',urgent:'अत्यावश्यक अनुरोध',recent:'अत्यावश्यक अनुरोध',empty:'इस डिवाइस पर अभी कोई अनुरोध नहीं है।',thanks:'केवल इस डिवाइस पर सेव हुआ। यह प्रोटोटाइप दाताओं को सूचित नहीं करता।',availabilityYes:'हाँ, संपर्क किया जा सकता है',availabilityNo:'अभी उपलब्ध नहीं',findDonors:'रक्तदाता खोजें',donorsIntro:'ब्लड ग्रुप, क्षेत्र और अनुमति मिलने पर GPS दूरी से रक्तदाता खोजें।',allGroups:'सभी ग्रुप',allAreas:'सभी क्षेत्र',distance:'दूरी के भीतर',anyDistance:'कोई भी दूरी',useLocation:'📍 मेरी लोकेशन इस्तेमाल करें',locationNeeded:'दूरी के अनुसार खोजने के लिए लोकेशन की अनुमति दें। क्षेत्र के अनुसार खोज जारी है।',locationReady:'लोकेशन तैयार है। दूरी केवल उन दाताओं के लिए दिखाई जाती है जिन्होंने लोकेशन साझा करने की अनुमति दी है।',locationError:'लोकेशन नहीं मिली। अनुमति दें या क्षेत्र से खोजें।',donorsEmpty:'इस डिवाइस पर इन फिल्टर से मेल खाने वाले उपलब्ध दाता नहीं हैं।',noDonors:'इस डिवाइस पर अभी कोई दाता पंजीकृत नहीं है।',contactDonor:'दाता को कॉल करें',callRequester:'अनुरोधकर्ता को कॉल करें',distanceAway:'दूर',areaFilter:'क्षेत्र',groupFilter:'ब्लड ग्रुप',how:'यह कैसे काम करता है',step1:'ज़रूरत साझा करें',step1Text:'ब्लड ग्रुप, यूनिट, अस्पताल और संपर्क नंबर दर्ज करें।',step2:'दाता खोजें',step2Text:'ब्लड ग्रुप, अहमदाबाद क्षेत्र और अनुमति-प्राप्त दूरी से खोजें।',step3:'सुरक्षित रूप से पुष्टि करें',step3Text:'अस्पताल के कर्मचारी उपलब्धता, जांच और अनुकूलता की पुष्टि करें।',areasTitle:'अहमदाबाद के क्षेत्र',call:'कॉल',urgentLabel:'तत्काल',locationPrompt:'दूरी खोज के लिए GPS लोकेशन साझा करें (वैकल्पिक)',distancePrivacy:'GPS निर्देशांक इसी ब्राउज़र में रहते हैं और केवल अनुमानित दूरी खोज में उपयोग होते हैं।',donorSaved:'दाता केवल इस डिवाइस पर पंजीकृत हुआ।',requestSaved:'अनुरोध केवल इस डिवाइस पर पोस्ट हुआ।',invalidPhone:'10 अंकों का सही भारतीय मोबाइल नंबर दर्ज करें।',km:'किमी'},
  gu: {hero:'દરેક મિનિટ મહત્વની છે.<br><em>કોઈનો જીવનદાતા બનો.</em>',sub:'અમદાવાદમાં રક્તની જરૂર હોય તેવા લોકોને સ્વૈચ્છિક દાતાઓ સાથે જોડો.',request:'🩸 રક્તની વિનંતી',donor:'＋ દાતા બનો',requestTitle:'તાત્કાલિક રક્ત વિનંતી',donorTitle:'દાતા નોંધણી',submitReq:'તાત્કાલિક વિનંતી પોસ્ટ કરો',submitDon:'દાતા નોંધણી',name:'પૂરું નામ',phone:'મોબાઇલ નંબર',group:'બ્લડ ગ્રુપ',units:'જરૂરી યુનિટ',hospital:'હોસ્પિટલ / સ્થળ',area:'વિસ્તાર',notes:'વધારાની માહિતી (વૈકલ્પિક)',availability:'દાન માટે ઉપલબ્ધ?',urgent:'તાત્કાલિક વિનંતી',recent:'તાત્કાલિક વિનંતીઓ',empty:'આ ઉપકરણ પર હજી કોઈ વિનંતી નથી.',thanks:'ફક્ત આ ઉપકરણ પર સાચવ્યું. આ પ્રોટોટાઇપ દાતાઓને સૂચના મોકલતું નથી.',availabilityYes:'હા, સંપર્ક કરી શકાય',availabilityNo:'હાલ ઉપલબ્ધ નથી',findDonors:'દાતાઓ શોધો',donorsIntro:'બ્લડ ગ્રુપ, વિસ્તાર અને મંજૂરી હોય ત્યારે GPS અંતરથી દાતાઓ શોધો.',allGroups:'બધા ગ્રુપ',allAreas:'બધા વિસ્તારો',distance:'અંતરની અંદર',anyDistance:'કોઈપણ અંતર',useLocation:'📍 મારું સ્થાન વાપરો',locationNeeded:'અંતરથી શોધવા સ્થાનની મંજૂરી આપો. વિસ્તારથી શોધ ચાલુ રાખી શકો છો.',locationReady:'તમારું સ્થાન તૈયાર છે. અંતર ફક્ત સ્થાન શેર કરવા મંજૂરી આપેલા દાતાઓ માટે ગણાય છે.',locationError:'સ્થાન મળી શક્યું નહીં. મંજૂરી આપો અથવા વિસ્તારથી શોધો.',donorsEmpty:'આ ઉપકરણ પર આ ફિલ્ટર સાથે ઉપલબ્ધ દાતા નથી.',noDonors:'આ ઉપકરણ પર હજી કોઈ દાતા નોંધાયા નથી.',contactDonor:'દાતાને કૉલ કરો',callRequester:'વિનંતી કરનારને કૉલ કરો',distanceAway:'દૂર',areaFilter:'વિસ્તાર',groupFilter:'બ્લડ ગ્રુપ',how:'આ કેવી રીતે કામ કરે છે',step1:'જરૂર જણાવો',step1Text:'બ્લડ ગ્રુપ, યુનિટ, હોસ્પિટલ અને સંપર્ક નંબર દાખલ કરો.',step2:'દાતા શોધો',step2Text:'બ્લડ ગ્રુપ, અમદાવાદ વિસ્તાર અને મંજૂર અંતરથી શોધો.',step3:'સુરક્ષિત પુષ્ટિ કરો',step3Text:'હોસ્પિટલ સ્ટાફ ઉપલબ્ધતા, પરીક્ષણ અને સુસંગતતાની પુષ્ટિ કરે.',areasTitle:'અમદાવાદના વિસ્તારો',call:'કૉલ',urgentLabel:'તાત્કાલિક',locationPrompt:'અંતર શોધ માટે GPS સ્થાન શેર કરો (વૈકલ્પિક)',distancePrivacy:'તમારા GPS કોઓર્ડિનેટ આ બ્રાઉઝરમાં જ રહે છે અને ફક્ત અંદાજિત અંતર માટે વપરાય છે.',donorSaved:'દાતા ફક્ત આ ઉપકરણ પર નોંધાયો.',requestSaved:'વિનંતી ફક્ત આ ઉપકરણ પર પોસ્ટ થઈ.',invalidPhone:'10 અંકનો માન્ય ભારતીય મોબાઇલ નંબર દાખલ કરો.',km:'કિમી'}
};
const keys = {requests:'bloodnow_requests', donors:'bloodnow_donors', location:'bloodnow_location'};
let lang = 'en';
let mode = 'request';
let userLocation = readJSON(keys.location, null);
const t = key => translations[lang][key] || translations.en[key] || key;
const $ = id => document.getElementById(id);

function readJSON(key, fallback) { try { const value = JSON.parse(localStorage.getItem(key)); return value ?? fallback; } catch { return fallback; } }
function safeText(value) { return String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char])); }
function loadList(key) { const data = readJSON(key, []); return Array.isArray(data) ? data : []; }
function selectOptions(items, first) { return `<option value="">${safeText(first)}</option>` + items.map(item => `<option value="${safeText(item)}">${safeText(item)}</option>`).join(''); }
function updateLang() {
  document.documentElement.lang = lang;
  $('heroTitle').innerHTML = t('hero'); $('heroSub').textContent = t('sub');
  $('requestBtn').textContent = t('request'); $('donorBtn').textContent = t('donor');
  $('donorsTitle').textContent = t('findDonors'); $('donorsIntro').textContent = t('donorsIntro');
  $('filterGroupLabel').textContent = t('groupFilter'); $('filterAreaLabel').textContent = t('areaFilter'); $('filterDistanceLabel').textContent = t('distance');
  $('filterGroup').innerHTML = selectOptions(bloodGroups, t('allGroups'));
  $('filterArea').innerHTML = selectOptions(areas, t('allAreas'));
  $('filterDistance').innerHTML = `<option value="">${t('anyDistance')}</option><option value="5">5 ${t('km')}</option><option value="10">10 ${t('km')}</option><option value="25">25 ${t('km')}</option><option value="50">50 ${t('km')}</option>`;
  $('locateBtn').textContent = t('useLocation'); $('howTitle').textContent = t('how'); $('step1Title').textContent = t('step1'); $('step1Text').textContent = t('step1Text'); $('step2Title').textContent = t('step2'); $('step2Text').textContent = t('step2Text'); $('step3Title').textContent = t('step3'); $('step3Text').textContent = t('step3Text'); $('areasTitle').textContent = t('areasTitle'); $('requestsTitle').textContent = t('recent');
  $('areas').innerHTML = areas.map(area => `<span>${safeText(area)}</span>`).join('');
  $('locationStatus').textContent = userLocation ? t('locationReady') : '';
  renderDonors(); renderRequests();
  if (!$('formPanel').hidden) renderForm();
}
function showForm(newMode) { mode = newMode; $('formPanel').hidden = false; renderForm(); $('formPanel').scrollIntoView({behavior:'smooth', block:'start'}); }
function hideForm() { $('formPanel').hidden = true; }
function field(key, type = 'text', extra = '', full = false) {
  const id = `field-${key}`;
  const label = `<label for="${id}">${t(key)}</label>`;
  let control;
  if (type === 'select') control = `<select id="${id}" name="${key}" required>${extra}</select>`;
  else if (type === 'textarea') control = `<textarea id="${id}" name="${key}" rows="2" placeholder="${t(key)}"></textarea>`;
  else control = `<input id="${id}" name="${key}" type="${type}" ${extra} required>`;
  return `<div class="field ${full ? 'full' : ''}">${label}${control}</div>`;
}
function renderForm() {
  const isRequest = mode === 'request';
  $('formTitle').textContent = t(isRequest ? 'requestTitle' : 'donorTitle');
  const groups = selectOptions(bloodGroups, '—');
  const areaOptions = selectOptions(areas, '—');
  const extraFields = isRequest
    ? `${field('units', 'select', '<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4+">4+</option>')}${field('hospital', 'text', 'maxlength="100"', true)}`
    : `${field('availability', 'select', `<option value="yes">${t('availabilityYes')}</option><option value="no">${t('availabilityNo')}</option>`)}`;
  const locationField = isRequest ? '' : `<div class="field full locationOpt"><label><input type="checkbox" name="shareLocation" id="shareLocation"> ${t('locationPrompt')}</label><small>${t('distancePrivacy')}</small><button type="button" class="secondary" id="captureDonorLocation">📍 ${t('useLocation')}</button><span id="donorLocationStatus" class="status" role="status"></span></div>`;
  $('mainForm').innerHTML = `<div class="formGrid">${field('name', 'text', 'maxlength="80" autocomplete="name"')}${field('phone', 'tel', 'pattern="[6-9][0-9]{9}" maxlength="10" inputmode="numeric" autocomplete="tel" placeholder="10-digit mobile number"')}${field('group', 'select', groups)}${extraFields}${field('area', 'select', areaOptions)}${field('notes', 'textarea', '', true)}${locationField}</div><button class="submit" type="submit">${t(isRequest ? 'submitReq' : 'submitDon')}</button>`;
  $('mainForm').onsubmit = saveForm;
  if (!isRequest) $('captureDonorLocation').addEventListener('click', () => getLocation(true));
}
function getLocation(forDonor = false) {
  const status = forDonor ? $('donorLocationStatus') : $('locationStatus');
  if (!navigator.geolocation) { status.textContent = t('locationError'); return; }
  status.textContent = t('locationNeeded');
  navigator.geolocation.getCurrentPosition(position => {
    userLocation = {latitude: position.coords.latitude, longitude: position.coords.longitude};
    localStorage.setItem(keys.location, JSON.stringify(userLocation));
    status.textContent = t('locationReady');
    if (!forDonor) renderDonors();
  }, () => { status.textContent = t('locationError'); }, {enableHighAccuracy:false, timeout:10000, maximumAge:300000});
}
function saveForm(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const phone = String(formData.get('phone') || '').trim();
  if (!/^[6-9]\d{9}$/.test(phone)) { alert(t('invalidPhone')); return; }
  const data = Object.fromEntries(formData);
  data.phone = phone; data.type = mode; data.date = new Date().toISOString();
  data.id = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
  if (mode === 'donor') {
    data.available = data.availability === 'yes'; delete data.availability;
    if (formData.get('shareLocation') === 'on' && userLocation) { data.latitude = userLocation.latitude; data.longitude = userLocation.longitude; }
    else { delete data.latitude; delete data.longitude; }
    const donors = loadList(keys.donors); donors.unshift(data); localStorage.setItem(keys.donors, JSON.stringify(donors));
  } else {
    data.urgent = formData.get('urgent') === 'on';
    const requests = loadList(keys.requests); requests.unshift(data); localStorage.setItem(keys.requests, JSON.stringify(requests));
  }
  alert(mode === 'donor' ? t('donorSaved') : t('requestSaved'));
  hideForm(); renderDonors(); renderRequests();
}
function distanceKm(a, b) {
  const toRadians = degrees => degrees * Math.PI / 180;
  const dLat = toRadians(b.latitude - a.latitude), dLon = toRadians(b.longitude - a.longitude);
  const lat1 = toRadians(a.latitude), lat2 = toRadians(b.latitude);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}
function renderDonors() {
  const group = $('filterGroup').value, area = $('filterArea').value, radius = Number($('filterDistance').value || 0);
  const all = loadList(keys.donors).filter(donor => donor.available !== false);
  let donors = all.filter(donor => (!group || donor.group === group) && (!area || donor.area === area));
  if (radius) donors = donors.filter(donor => userLocation && Number.isFinite(donor.latitude) && Number.isFinite(donor.longitude) && distanceKm(userLocation, donor) <= radius);
  if (radius && !userLocation) $('locationStatus').textContent = t('locationNeeded');
  const box = $('donors');
  if (!donors.length) { box.innerHTML = `<div class="empty">${all.length ? t('donorsEmpty') : t('noDonors')}</div>`; return; }
  if (userLocation) donors.sort((a, b) => distanceKm(userLocation, a) - distanceKm(userLocation, b));
  box.innerHTML = donors.slice(0, 30).map(donor => {
    const distance = userLocation && Number.isFinite(donor.latitude) && Number.isFinite(donor.longitude) ? `<p>${distanceKm(userLocation, donor).toFixed(1)} ${t('km')} ${t('distanceAway')}</p>` : '';
    return `<article class="request"><div><strong>${safeText(donor.group || 'Blood')} · ${safeText(donor.name || '')}</strong><p>${safeText(donor.area || 'Ahmedabad')} · ${safeText(t('availabilityYes'))}</p>${distance}</div><a href="tel:${safeText(donor.phone || '')}">${t('contactDonor')}</a></article>`;
  }).join('');
}
function renderRequests() {
  const requests = loadList(keys.requests).sort((a, b) => Number(Boolean(b.urgent)) - Number(Boolean(a.urgent)) || String(b.date).localeCompare(String(a.date)));
  const box = $('requests');
  if (!requests.length) { box.innerHTML = `<div class="empty">${t('empty')}</div>`; return; }
  box.innerHTML = requests.slice(0, 12).map(request => `<article class="request"><div><strong>${request.urgent ? `<span class="urgentTag">${t('urgentLabel')}</span> ` : ''}${safeText(request.group || 'Blood')} · ${safeText(request.units || '1')} unit(s)</strong><p>${safeText(request.hospital || request.area || 'Ahmedabad')} · ${safeText(request.area || '')}</p><p>${safeText(request.name || '')} · ${safeText(request.date ? new Date(request.date).toLocaleString() : '')}</p></div><a href="tel:${safeText(request.phone || '')}">${t('callRequester')}</a></article>`).join('');
}
$('requestBtn').addEventListener('click', () => showForm('request'));
$('donorBtn').addEventListener('click', () => showForm('donor'));
$('closeForm').addEventListener('click', hideForm);
$('lang').addEventListener('change', event => { lang = event.target.value; updateLang(); });
$('filterGroup').addEventListener('change', renderDonors); $('filterArea').addEventListener('change', renderDonors); $('filterDistance').addEventListener('change', renderDonors);
$('locateBtn').addEventListener('click', () => getLocation(false));
updateLang();
