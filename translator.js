/**
 * TechFixPGZ - Cyberpunk Language Translator
 * Handles client-side translation between Galician (gl) and English (en)
 * with persistence, dynamic UI injection, and MutationObserver for dynamic components.
 */

const translations = {
    // Navbar links
    "Servizos": "Services",
    "Tenda Virtual": "Virtual Store",
    "Quen Somos": "About Us",
    "Organigrama": "Org Chart",
    "Contacto e Localización": "Contact & Location",

    // Footer
    "Alma galega, conectando co futuro dende a nosa terra.": "Galician soul, connecting with the future from our land.",
    "Alma galega, conectando co futuro.": "Galician soul, connecting with the future.",

    // index.html
    "Benvido a TechFix": "Welcome to TechFix",
    "Reparación de dispositivos.": "Device repair.",
    "Smartphones e accesorios.": "Smartphones and accessories.",
    "O noso compromiso técnico.": "Our technical commitment.",
    "Estrutura interna corporativa.": "Internal corporate structure.",
    "Dirección física en Ourense.": "Physical address in Ourense.",

    // compromiso.html
    "Volver ó inicio": "Back to home",
    "O Noso Compromiso": "Our Technical",
    "Técnico": "Commitment",
    "Rapidez (24h - 48h)": "Speed (24h - 48h)",
    "Entendemos que o teu dispositivo é vital. Garantimos un tempo de resposta récord para que non te quedes desconectado máis tempo do necesario.": "We understand that your device is vital. We guarantee a record response time so you don't stay disconnected longer than necessary.",
    "Profesionalidade Garantida": "Guaranteed Professionalism",
    "Contamos cun equipo de técnicos certificados que tratan cada dispositivo con precisión quirúrgica, utilizando compoñentes de alta calidade.": "We have a team of certified technicians who treat each device with surgical precision, using high quality components.",
    "Servizo a domicilio": "Home service",
    "A túa comodidade é a nosa prioridade. Recollida e entrega na porta da túa casa para que o proceso de reparación sexa invisible para ti.": "Your comfort is our priority. Pickup and delivery at your doorstep so that the repair process is invisible to you.",
    "Garantía TechFixPGZ": "TechFixPGZ Warranty",
    "Cada reparación que realizamos inclúe unha garantía técnica de seguimento. Se o problema persiste, nós facémonos cargo. O noso obxectivo é a túa tranquilidade total.": "Every repair we perform includes a technical follow-up warranty. If the problem persists, we take care of it. Our goal is your total peace of mind.",

    // contacto.html
    "Onde estamos": "Where we are",
    "Rúa Nsa. Sra. da Saínza, 14": "14 Nsa. Sra. da Saínza Street",
    "Teléfono": "Phone",
    "Síguenos": "Follow us",
    "Mantente ao día de todas as nosas novidades técnicas e ofertas na tenda virtual.": "Stay up to date with all our technical news and offers in the virtual store.",
    "Onde nos atopar": "Where to find us",

    // organigrama.html
    "Estrutura Interna": "Internal Corporate",
    "Corporativa": "Structure",
    "Dirección Xeral": "General Direction",
    "Estratexia, supervisión de procesos e toma de decisións corporativas.": "Strategy, process supervision and corporate decision making.",
    "Departamento Técnico": "Technical Department",
    "Responsables da reparación, mantemento e diagnóstico de dispositivos con técnicos certificados.": "Responsible for repair, maintenance and diagnostics of devices with certified technicians.",
    "Atención ao Cliente": "Customer Service",
    "Xestión de citas, servizo a domicilio e seguimento da satisfacción do usuario.": "Management of appointments, home service and follow-up of user satisfaction.",
    "Logística e Tenda": "Logistics and Store",
    "Control de stock na tenda virtual e coordinación da recollida e entrega dos dispositivos.": "Stock control in the virtual store and coordination of collection and delivery of devices.",

    // reparacions.html
    "← VOLVER AO INICIO": "← BACK TO HOME",
    "Servizos de Reparación": "Repair Services",
    "Explora as nosas opcións dispoñibles. Selecciona unha categoría ou filtra co buscador para atopar o que necesitas.": "Explore our available options. Select a category or filter with the search engine to find what you need.",
    "Móbiles e Tablets": "Mobiles & Tablets",
    "Ordenadores": "Computers",
    "Buscar reparación (batería, pantalla...)...": "Search repair (battery, screen...)...",
    "Cambiar Pantalla": "Change Screen",
    "Smartphones (OLED / LCD / AMOLED)": "Smartphones (OLED / LCD / AMOLED)",
    "Prezo estimado:": "Estimated price:",
    "Diagnóstico previo gratuíto na nosa tenda.": "Free diagnostic in our store.",
    "Cambiar Batería": "Change Battery",
    "Smartphones (Todas as marcas e modelos)": "Smartphones (All brands and models)",
    "Compoñentes con garantía de ata 1 ano.": "Components with up to 1 year warranty.",
    "Reparar Conector de Carga": "Repair Charging Connector",
    "Portos USB-C, Lightning e Micro-USB": "USB-C, Lightning and Micro-USB ports",
    "Solución a problemas de falso contacto.": "Solution to loose connection problems.",
    "Cambiar Pantalla / Cristal": "Change Screen / Glass",
    "Tablets (iPad, Samsung Galaxy Tab, Xiaomi)": "Tablets (iPad, Samsung Galaxy Tab, Xiaomi)",
    "Calibración táctil exacta de alta precisión.": "High-precision exact touch calibration.",
    "Cambiar Tapa Traseira": "Change Back Cover",
    "Cristal traseiro ou chasis de aluminio danado": "Damaged back glass or aluminum chassis",
    "Substitución técnica con selado perimetral.": "Technical replacement with perimeter sealing.",
    "Recuperación e Software": "Recovery & Software",
    "Desbloqueo, bucle de arranque ou malware": "Unlocking, boot loop or malware",
    "Actualización do sistema operativo mantendo datos.": "Operating system update keeping data.",
    "Reparar Cámara": "Repair Camera",
    "Substitución de lentes e módulos de enfoque": "Replacement of lenses and focus modules",
    "Fotos nítidas e enfocadas de novo.": "Sharp and focused photos again.",
    "Reparar Audio/Altavoz": "Repair Audio/Speaker",
    "Solución a problemas de son e micrófonos": "Solution to sound and microphone problems",
    "Limpeza ou substitución de compoñentes de audio.": "Cleaning or replacement of audio components.",
    "Sensor de Huella": "Fingerprint Sensor",
    "Reparación de lectores de seguridade": "Repair of security readers",
    "Seguridade biométrica restaurada.": "Biometric security restored.",
    "Módulo Wi-Fi / Bluetooth": "Wi-Fi / Bluetooth Module",
    "Problemas de conexión inalámbrica": "Wireless connection problems",
    "Estabilidade total na túa rede.": "Total stability on your network.",
    "Tratamento Humidade": "Moisture Treatment",
    "Reanimación de dispositivos mollados": "Reanimation of wet devices",
    "Limpeza ultrasónica profesional.": "Professional ultrasonic cleaning.",
    "Teclado Tablet": "Tablet Keyboard",
    "Reparación de teclados externos/conectores": "Repair of external keyboards/connectors",
    "Recupera a produtividade no teu traballo.": "Recover productivity in your work.",
    "Portátiles (Calquera tamanho: 13\" a 17.3\")": "Laptops (Any size: 13\" to 17.3\")",
    "Mantenemento Técnico": "Technical Maintenance",
    "Limpeza interna profunda + Pasta térmica": "Deep internal cleaning + Thermal paste",
    "Evita sobrequecementos e mellora o rendemento.": "Prevents overheating and improves performance.",
    "Instalar Sistema Operativo": "Install Operating System",
    "Windows/Linux, configuración e drivers": "Windows/Linux, configuration and drivers",
    "Inclúe optimización inicial e backup opcional.": "Includes initial optimization and optional backup.",
    "Cambiar / Ampliar Disco SSD": "Change / Upgrade SSD Disk",
    "Mellora de velocidade extrema (Torres/Portátiles)": "Extreme speed upgrade (Towers/Laptops)",
    "Multiplica por 10 a velocidade do teu vello ordenador.": "Multiply the speed of your old computer by 10.",
    "Reparación por Líquidos": "Liquid Damage Repair",
    "Limpeza por ultrasonidos de placas molladas": "Ultrasonic cleaning of wet boards",
    "Tratamento químico contra a corrosión interna.": "Chemical treatment against internal corrosion.",
    "Reparar Fonte de Alimentación": "Repair Power Supply",
    "O PC non acende ou apágase de forma repentina": "The PC does not turn on or shuts down suddenly",
    "Substitución de compoñentes con certificado de enerxía.": "Replacement of components with power certificate.",
    "Reparar Tarxeta Gráfica": "Repair Graphics Card",
    "Reballing e reparación de soldaduras": "Reballing and solder repair",
    "Solución para problemas de vídeo e artifacts.": "Solution for video and artifacts issues.",
    "Ampliación de RAM": "RAM Upgrade",
    "Mellora de memoria para alto rendemento": "Memory upgrade for high performance",
    "Multitarea sen ralentizacións.": "Multitasking without slowdowns.",
    "Cambiar Ventilador": "Change Fan",
    "Eliminación de ruídos e sobrequecementos": "Removal of noise and overheating",
    "Fluxo de aire óptimo para o teu equipo.": "Optimal airflow for your equipment.",
    "Limpeza de Malware": "Malware Cleaning",
    "Eliminación de virus, troyanos e adware": "Removal of viruses, trojans and adware",
    "Navegación segura e sen ameazas.": "Safe and threat-free browsing.",
    "Recuperación de Datos": "Data Recovery",
    "Recuperación de ficheiros borrados ou discos danados": "Recovery of deleted files or damaged disks",
    "Intentamos recuperar os teus documentos vitais.": "We try to recover your vital documents.",
    "Batería de Portátil": "Laptop Battery",
    "Substitución de baterías vellas ou hinchadas": "Replacement of old or swollen batteries",
    "Gañando autonomía e horas de traballo.": "Gaining autonomy and working hours.",
    "Non se atoparon servizos correspondentes coa túa busca. Contacta connosco.": "No services matching your search were found. Contact us.",

    // catalogo.html
    "Produtos": "Products",
    "Explora a nosa gama de produtos dispoñibles. Selecciona unha categoría ou utiliza o buscador para localizar exactamente o que buscas.": "Explore our range of available products. Select a category or use the search engine to locate exactly what you are looking for.",
    "Buscar producto...": "Search product...",
    "Funda Transparente": "Transparent Case",
    "Protección anti-impactos": "Anti-impact protection",
    "Cargador 20W": "20W Charger",
    "Adaptador 20W USB-C": "20W USB-C Adapter",
    "Cable Lightning": "Lightning Cable",
    "Carga eficiente e sincronización rápida": "Efficient charging and fast sync",
    "Cable USB-C": "USB-C Cable",
    "Non se atoparon produtos que coincidan coa túa busca.": "No products matching your search were found.",

    // Dynamic items / Modals / Toasts
    "Orzamento Base Estimado": "Estimated Base Budget",
    "Configura a túa solicitude:": "Configure your request:",
    "Servizo Urxente Exprés (+20€)": "Express Urgent Service (+20€)",
    "Reparación prioritaria en menos de 2 horas.": "Priority repair in less than 2 hours.",
    "Recollida e envío a domicilio (+9.95€)": "Pickup and home delivery (+9.95€)",
    "Recollida na túa casa en calquera punto de Galicia.": "Pickup at your home anywhere in Galicia.",
    "Solicitar Cita / Orzamento": "Request Appointment / Quote",
    "Datos e Produto": "Data & Product",
    "Indícanos os datos do equipo e o problema.": "Tell us the device details and the issue.",
    "Marca e Modelo *": "Brand & Model *",
    "Describe o problema *": "Describe the issue *",
    "Nome completo *": "Full name *",
    "Teléfono *": "Phone *",
    "Confirmar": "Confirm",
    "Solicitude Completada": "Request Completed",
    "Negro Estelar": "Stellar Black",
    "Prata": "Silver",
    "Azul Titanio": "Titanium Blue",
    "Branco Puro": "Pure White",
    "Solicitar Dispositivo": "Request Device",
    "Selecciona o teu modelo": "Select your model",
    "Solicitar Funda": "Request Case",
    "Finalizar Pedido": "Finalize Order",
    "Enderezo de entrega *": "Delivery address *",
    "Teléfono de contacto *": "Contact phone *",
    "Confirmar Compra": "Confirm Purchase",
    "Solicitude recibida correctamente. Contactaremos contigo.": "Request received successfully. We will contact you.",
    "Grazas, ": "Thank you, ",
    "Recibimos a solicitude para: ": "We received the request for: ",
    "Problema: ": "Issue: ",
    "Un técnico revisará o teu caso en breve.": "A technician will review your case shortly.",
    "Grazas": "Thank you",
    "Recibimos a solicitude para": "We received the request for",
    "Problema": "Issue"
};

// Main function to translate elements on page
function translateDOM(root, toLang) {
    if (!root) return;

    // Use TreeWalker to inspect all text nodes safely
    const walker = document.createTreeWalker(
        root,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );

    let textNode;
    while (textNode = walker.nextNode()) {
        const text = textNode.nodeValue.trim();
        if (!text) continue;

        // Skip translation button text node
        if (textNode.parentElement && textNode.parentElement.closest('#lang-toggle-btn')) {
            continue;
        }

        // Special handling for dynamic titles like "Configuración de [Smartphone]"
        if (toLang === 'en') {
            if (text.startsWith("Configuración de ")) {
                textNode.nodeValue = textNode.nodeValue.replace("Configuración de ", "Configuration of ");
                continue;
            }
            if (translations[text]) {
                textNode.nodeValue = textNode.nodeValue.replace(text, translations[text]);
            }
        } else {
            // Reverse lookup: English to Galician
            if (text.startsWith("Configuration of ")) {
                textNode.nodeValue = textNode.nodeValue.replace("Configuration of ", "Configuración de ");
                continue;
            }
            const key = Object.keys(translations).find(k => translations[k] === text);
            if (key) {
                textNode.nodeValue = textNode.nodeValue.replace(text, key);
            }
        }
    }

    // Translate input placeholders
    const inputs = root.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        const placeholder = input.placeholder;
        if (!placeholder) return;

        if (toLang === 'en') {
            if (translations[placeholder]) {
                input.placeholder = translations[placeholder];
            }
        } else {
            const key = Object.keys(translations).find(k => translations[k] === placeholder);
            if (key) {
                input.placeholder = key;
            }
        }
    });
}

// Toggles language between 'gl' (Galician) and 'en' (English)
function toggleLanguage() {
    const currentLang = localStorage.getItem('selectedLang') || 'gl';
    const nextLang = currentLang === 'gl' ? 'en' : 'gl';

    // Save language selection
    localStorage.setItem('selectedLang', nextLang);

    // Apply translations to the whole document body
    translateDOM(document.body, nextLang);

    // Update lang attribute on html tag
    document.documentElement.setAttribute('lang', nextLang);

    // Update button text & state
    updateToggleButton(nextLang);
}

// Updates the visual text and state of the toggle button
function updateToggleButton(lang) {
    const btn = document.getElementById('lang-toggle-btn');
    if (btn) {
        if (lang === 'en') {
            btn.innerHTML = `<i class="bi bi-translate me-1"></i> GL`;
            btn.setAttribute('aria-label', 'Traducir ao galego');
        } else {
            btn.innerHTML = `<i class="bi bi-translate me-1"></i> EN`;
            btn.setAttribute('aria-label', 'Translate to English');
        }
    }
}

// Injects the toggle button to the navbar
function injectToggleButton() {
    const nav = document.querySelector('.navbar-nav');
    if (nav) {
        // Prevent duplicate injection
        if (document.getElementById('lang-toggle-btn')) return;

        const li = document.createElement('li');
        li.className = 'nav-item d-flex align-items-center ms-lg-3 mt-2 mt-lg-0';
        li.innerHTML = `
            <button class="btn btn-action-tech py-1 px-3" id="lang-toggle-btn" style="min-width: 80px;" aria-label="Translate to English">
                <i class="bi bi-translate me-1"></i> EN
            </button>
        `;
        nav.appendChild(li);

        document.getElementById('lang-toggle-btn').addEventListener('click', toggleLanguage);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject language button
    injectToggleButton();

    // 2. Load stored language (defaults to Galician)
    const storedLang = localStorage.getItem('selectedLang') || 'gl';
    
    if (storedLang === 'en') {
        // Set lang attribute on html tag
        document.documentElement.setAttribute('lang', 'en');
        // Translate the initial DOM
        translateDOM(document.body, 'en');
        // Set toggle button to show 'GL' (indicating we can switch back to Galician)
        updateToggleButton('en');
    } else {
        document.documentElement.setAttribute('lang', 'gl');
        updateToggleButton('gl');
    }

    // 3. Set up MutationObserver to translate dynamically rendered elements (like modals/toasts)
    const observer = new MutationObserver((mutations) => {
        const currentLang = localStorage.getItem('selectedLang') || 'gl';
        if (currentLang === 'en') {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        translateDOM(node, 'en');
                    }
                });
            });
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
});
