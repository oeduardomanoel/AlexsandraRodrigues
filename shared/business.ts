// Fonte única de verdade do negócio.
// Tudo aqui foi tirado do Instagram (@alexsandra_podologa) e do Google Maps.
// Ajuste neste arquivo e o site, o schema.org, o llms.txt e o sitemap acompanham.

export const business = {
  name: 'Alexsandra Rodrigues Podóloga',
  brand: 'Alexsandra Rodrigues',
  tagline: 'Centro de Bem-Estar e Podologia',
  person: 'Alexsandra Rodrigues',
  role: 'Podologista e Laserterapeuta',
  city: 'Itapema',
  state: 'SC',
  phoneDisplay: '(47) 99731-9955',
  phoneE164: '+5547997319955',
  whatsapp: '5547997319955',
  instagram: 'https://www.instagram.com/alexsandra_podologa/',
  instagramHandle: '@alexsandra_podologa',
  instagramClinic: 'https://www.instagram.com/centrodebemestarepodologia/',
  mapsUrl:
    'https://www.google.com/maps/place/Alexsandra+Rodrigues+Pod%C3%B3loga/@-27.1351688,-48.5976398,17z/data=!4m6!3m5!1s0x94d8af0fbfc87f07:0xa9322331953366ae!8m2!3d-27.1351688!4d-48.5976398!16s%2Fg%2F11fn620b17',
  reviewsUrl: 'https://maps.google.com/?cid=12191845837108897454',
  address: {
    street: 'Av. Nereu Ramos, 4848, 1º andar, sala 10',
    building: 'Prédio Comercial Cipriani (Espaço Arlete Melazzo)',
    reference: 'Bem no começo da Rua 286',
    district: 'Meia Praia',
    city: 'Itapema',
    state: 'SC',
    postalCode: '88220-000',
    country: 'BR',
  },
  geo: { lat: -27.1351688, lng: -48.5976398 },
  hours: [
    { days: 'Segunda a sábado', time: '9h às 18h' },
    { days: 'Domingo', time: 'Fechado' },
  ],
  openingHoursSpec: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '18:00',
  },
  rating: { value: '5,0', count: 45 },
  yearsExperience: 30,
  university: 'Universidade Anhembi Morumbi',
  universityCity: 'São Paulo',
  pioneer: 'Primeira podóloga de Itapema com formação de nível superior em Podologia',
} as const

export const waLink = (msg = 'Oi, Alexsandra! Vim pelo site e quero agendar uma avaliação.') =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(msg)}`

export const services = [
  {
    slug: 'unha-encravada',
    title: 'Unha encravada',
    short: 'Alívio da dor com técnica que respeita a unha, e orientação pra ela não voltar a encravar.',
    icon: 'nail',
  },
  {
    slug: 'micose-nas-unhas',
    title: 'Micose nas unhas',
    short: 'Tratamento da micose de unha (onicomicose) com acompanhamento, pra unha voltar a crescer saudável.',
    icon: 'drop',
  },
  {
    slug: 'laserterapia',
    title: 'Laserterapia',
    short: 'Laser como aliado no tratamento das unhas e da pele dos pés, sem dor e sem pressa.',
    icon: 'laser',
  },
  {
    slug: 'pe-diabetico',
    title: 'Pé diabético',
    short: 'Cuidado preventivo e delicado pra quem tem diabetes, com atenção a cada detalhe.',
    icon: 'heart',
  },
  {
    slug: 'calos-e-calosidades',
    title: 'Calos e calosidades',
    short: 'Remoção cuidadosa de calos e áreas endurecidas que incomodam a cada passo.',
    icon: 'foot',
  },
  {
    slug: 'rachaduras-nos-pes',
    title: 'Rachaduras nos calcanhares',
    short: 'Pele dos pés hidratada e recuperada, pronta pra sandália e pra areia.',
    icon: 'leaf',
  },
] as const

// Avaliações públicas do Google Maps (texto original, sem edição)
export const reviews = [
  {
    author: 'Débora Ribeiro',
    text: 'Atendimento, espaço e profissional maravilhoso! Desde o início até a saída tudo impecável, estou muito satisfeita, virei cliente! Alexsandra Rodrigues #MÃOSDEFADA!',
  },
  {
    author: 'junior jus',
    text: 'Excelente profissional e busca entender as necessidades do cliente fazendo um atendimento totalmente humanizado e diferenciado super recomendo fez milagres nos meus pés',
  },
  {
    author: 'Jus Simas',
    text: 'Super recomendo profissional e faz um super tratamento sabendo realmente as suas necessidades',
  },
] as const

export const reviewHighlights = [
  'Atendimento profissional...deixa o pé da gente igual a bum bum de bebê.',
  'Única que deu jeito nas minhas unhas haha',
  'Clínica com uma estrutura espetacular!',
] as const

export const faqs = [
  {
    q: 'Onde fica o consultório da Alexsandra Rodrigues em Itapema?',
    a: 'Na Av. Nereu Ramos, 4848, no Prédio Comercial Cipriani, 1º andar, sala 10, bairro Meia Praia, em Itapema (SC). Fica bem no começo da Rua 286, dentro do Espaço Arlete Melazzo.',
  },
  {
    q: 'Qual o horário de atendimento?',
    a: 'De segunda a sábado, das 9h às 18h. Domingo o consultório fica fechado. O atendimento é com hora marcada pelo WhatsApp (47) 99731-9955.',
  },
  {
    q: 'A Alexsandra Rodrigues tem formação em Podologia?',
    a: 'Tem. Ela é a primeira podóloga de Itapema com formação de nível superior em Podologia, pela Universidade Anhembi Morumbi, em São Paulo. São 30 anos de profissão, com especializações na área.',
  },
  {
    q: 'O que faz uma podóloga?',
    a: 'A podóloga cuida da saúde dos pés e das unhas: trata unha encravada, micose, calos, rachaduras e acompanha pés de pessoas com diabetes. É um cuidado de saúde, diferente de pedicure estética.',
  },
  {
    q: 'Tratar unha encravada dói?',
    a: 'O objetivo do atendimento é tirar a dor, não causar mais. A Alexsandra avalia o grau da inflamação e escolhe a técnica mais confortável pra cada caso. Muita gente sai do consultório já aliviada.',
  },
  {
    q: 'Quem tem diabetes pode fazer podologia?',
    a: 'Pode e deve. Pessoas com diabetes têm mais risco de feridas nos pés que demoram a cicatrizar, por isso o acompanhamento com podóloga ajuda a prevenir complicações. O atendimento é feito com cuidados específicos pra esse público.',
  },
  {
    q: 'Quantas sessões preciso pra tratar micose na unha?',
    a: 'Depende do quanto a unha está comprometida. Na avaliação a Alexsandra explica o plano de tratamento e a frequência ideal pro seu caso, sem promessa genérica.',
  },
  {
    q: 'Como agendar uma consulta?',
    a: 'Pelo WhatsApp (47) 99731-9955. É só mandar uma mensagem contando o que está incomodando que ela responde com os horários disponíveis.',
  },
] as const
