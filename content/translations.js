(function () {
  const en = {
    meta: {
      title: "Jesús Caballero | Industrial AI Engineer",
      description: "Industrial AI Engineer focused on edge ML systems, predictive maintenance, industrial analytics, and OT-aware deployment for real operational environments.",
      keywords: "Industrial AI Engineer, Edge ML, Predictive Maintenance, Industrial Analytics, Oil and Gas, FastAPI, Docker, LangGraph, Time Series, Anomaly Detection",
      ogTitle: "Jesús Caballero | Industrial AI Engineer",
      ogDescription: "Industrial AI Engineer building edge-ready ML systems for predictive maintenance, industrial analytics, and OT-aware production environments.",
      twitterTitle: "Jesús Caballero | Industrial AI Engineer",
      twitterDescription: "Industrial AI Engineer building edge-ready ML systems for predictive maintenance and industrial analytics."
    },
    common: {
      skipLink: "Skip to content",
      languageSelectorLabel: "Language selector"
    },
    brand: {
      logoAlt: "Jesús Caballero logo",
      name: "Jesús Caballero",
      role: "Industrial AI Engineer",
      homeAriaLabel: "Jesús Caballero home"
    },
    nav: {
      links: ["About", "Experience", "Skills", "Project", "Education", "Contact"],
      toggleLabel: "Toggle navigation"
    },
    hero: {
      eyebrow: "Industrial AI • Edge ML • Predictive Maintenance",
      title: "Industrial AI systems built for real operational environments.",
      lead: "I design and deliver edge-ready AI solutions across industrial analytics, predictive monitoring, and OT-aware software systems. My work connects machine learning, backend engineering, and deployment constraints that generic ML portfolios usually ignore.",
      buttons: {
        primary: "View featured project",
        secondary: "Download CV"
      },
      links: ["LinkedIn", "GitHub", "Email", "CV ES"],
      panel: {
        label: "Positioning",
        title: "Hybrid profile across AI, industrial systems, edge deployment, and automation.",
        bullets: [
          "Industrial AI Engineer with end-to-end ownership.",
          "Predictive monitoring for pumps, compressors, and asset health workflows.",
          "FastAPI, Docker/Podman, ARM edge deployment, and OT-aware execution.",
          "LangGraph-based agentic tooling for industrial dataset reasoning."
        ],
        metrics: [
          {
            title: "Edge ML",
            description: "ARM-ready, constrained environments, continuous operation"
          },
          {
            title: "Industrial Analytics",
            description: "Time series, anomaly detection, health and efficiency metrics"
          },
          {
            title: "Technical Leadership",
            description: "Architecture decisions, mentoring, technical demos"
          }
        ]
      }
    },
    about: {
      eyebrow: "About",
      title: "Not a generic data scientist, and not only a software engineer.",
      paragraphs: [
        "I’m an Industrial AI Engineer with experience designing machine learning systems for predictive maintenance and industrial asset monitoring, with a strong focus on deployment realities. My work spans model development, backend services, industrial visualization, and edge execution in environments where reliability matters as much as model quality.",
        "I work comfortably across industrial analytics, backend implementation, OT-aware deployment, embedded systems, and technical decision-making. That combination lets me move from industrial data and modeling logic to production-ready systems that are practical in the field."
      ],
      pills: [
        "Predictive Maintenance",
        "Industrial Asset Monitoring",
        "Oil & Gas Environments",
        "FastAPI Systems",
        "Docker / Podman",
        "LangGraph Agents",
        "ESP32 / Arduino"
      ]
    },
    experience: {
      eyebrow: "Experience",
      title: "Public-safe experience focused on capabilities, architecture, and reliable operation.",
      roles: [
        {
          role: "Industrial AI / Control Engineer",
          company: "Proctek S.A.",
          date: "March 2024 - Present",
          summary: "Lead the technical design of industrial AI systems for predictive maintenance and asset monitoring in production environments.",
          bullets: [
            "Build end-to-end applications that combine FastAPI services, machine learning pipelines, industrial dashboards, and edge deployment.",
            "Design predictive monitoring workflows for pumps and compressors, including anomaly detection, forecasting, and asset health indicators.",
            "Deploy and adapt solutions for industrial edge targets running under constrained connectivity and operational requirements.",
            "Support technical decision-making, mentor junior engineers, and participate in technical validation and demonstrations."
          ]
        },
        {
          role: "Mechatronics Engineer",
          company: "Quynza Technologies",
          date: "March 2022 - January 2024",
          summary: "Worked at the hardware-software boundary for industrial mechatronic systems, building a strong base in embedded control, HMI design, and practical system integration.",
          bullets: [
            "Developed embedded solutions with Arduino and ESP32 for control and data acquisition.",
            "Contributed to industrial HMI interfaces and technical documentation for physical systems.",
            "Supported hardware-oriented engineering work including PCB-related integration and mechatronic system design."
          ]
        }
      ]
    },
    skills: {
      eyebrow: "Skills & Stack",
      title: "Technical range built around deployment-ready industrial AI.",
      groups: [
        {
          title: "AI / ML",
          items: [
            "scikit-learn",
            "Time series analysis",
            "Anomaly detection",
            "Data pipelines",
            "Feature engineering",
            "Baseline modeling"
          ]
        },
        {
          title: "Backend",
          items: [
            "Python",
            "FastAPI",
            "API-oriented architectures",
            "Operational dashboards",
            "Technical integration workflows"
          ]
        },
        {
          title: "Edge / Infrastructure",
          items: [
            "Docker",
            "Podman",
            "ARM deployment",
            "Constrained environments",
            "Continuous operation design"
          ]
        },
        {
          title: "Industrial / OT",
          items: [
            "Predictive maintenance",
            "Industrial analytics",
            "Oil & Gas asset monitoring",
            "PLC knowledge",
            "SCADA and IIoT exposure"
          ]
        },
        {
          title: "Embedded / Hardware",
          items: [
            "ESP32",
            "Arduino",
            "Microcontroller programming",
            "Control and data acquisition",
            "Mechatronic integration"
          ]
        },
        {
          title: "Leadership & Communication",
          items: [
            "Technical architecture",
            "Junior mentoring",
            "Technical demos",
            "Solution validation",
            "Cross-functional collaboration"
          ]
        }
      ]
    },
    project: {
      eyebrow: "Featured Project",
      title: "Industrial Dataset Readiness Platform",
      summary: "Deterministic, run-based dataset analysis and baseline modeling for industrial and technical tabular workflows.",
      description: "This project is designed as a structured analytical system rather than a generic AI chatbot. It combines a Python analysis engine, a FastAPI backend, and a lightweight interface to run traceable diagnostics, readiness checks, and baseline modeling flows with explicit outputs.",
      details: [
        {
          title: "Problem",
          text: "Early-stage work on industrial datasets is often notebook-heavy, inconsistent, and weakly documented, especially when data quality, time structure, leakage risk, or modeling readiness are unclear."
        },
        {
          title: "Approach",
          text: "Uses deterministic analysis modes, readiness gating, and run-scoped artifacts so each execution produces structured outputs instead of ad hoc exploration. A constrained conversational layer sits on top of the analytical core instead of replacing it."
        },
        {
          title: "Technical Value",
          text: "The system emphasizes explicit execution semantics, reproducible run history, artifact-driven workflows, and practical backend/frontend integration for explainable ML analysis."
        }
      ],
      framingLabel: "Technical framing",
      framing: [
        "Deterministic dataset analysis platform",
        "Run-based ML workflow system",
        "Artifact-driven analytical execution",
        "Industrial and time-series dataset bias"
      ],
      stackLabel: "Technical stack",
      stack: [
        "Python",
        "FastAPI",
        "Vanilla JS",
        "Run-scoped artifacts",
        "Baseline modeling",
        "Readiness gating",
        "Optional LLM / RAG layers"
      ],
      statusLabel: "Current public status",
      status: [
        "Public documentation is being prepared.",
        "Public demo is not published yet.",
        "No public repository link is shown until the publishable package is ready."
      ]
    },
    future: {
      eyebrow: "Future Portfolio",
      title: "Building the public portfolio progressively and selectively.",
      cards: [
        {
          title: "More public projects coming soon",
          text: "Future additions will focus on publishable work only, with clear separation from employer-confidential systems."
        },
        {
          title: "Technical notes in preparation",
          text: "Planned public material may include architecture notes, edge deployment lessons, and industrial AI workflow writeups."
        },
        {
          title: "Designed for expansion",
          text: "The site structure is ready for future project pages, docs links, screenshots, or a lightweight serverless contact flow."
        }
      ]
    },
    education: {
      education: {
        eyebrow: "Education",
        title: "Academic foundation in automation and mechatronics.",
        items: [
          {
            title: "MSc in Industrial Automation Engineering",
            institution: "National University of Colombia, Bogota",
            years: "2023 - 2025"
          },
          {
            title: "BSc in Mechatronics Engineering",
            institution: "National University of Colombia, Bogota",
            years: "2017 - 2022"
          }
        ]
      },
      certifications: {
        eyebrow: "Certifications",
        title: "Recent certifications aligned with ML and industrial digital systems.",
        items: [
          {
            title: "IBM Machine Learning Professional Certificate",
            issuer: "Coursera - IBM, 2025"
          },
          {
            title: "IBM Data Science Professional Certificate",
            issuer: "Coursera - IBM, 2025"
          },
          {
            title: "IoT Systems and Industrial Applications with Design Thinking",
            issuer: "Coursera - LearnQuest, 2025"
          },
          {
            title: "ThingWorx Technical Essentials",
            issuer: "PTC Field Academy, 2024"
          },
          {
            title: "An Introduction to Programming the Internet of Things",
            issuer: "Coursera - University of California, Irvine, 2023"
          },
          {
            title: "Mathematics for Machine Learning",
            issuer: "Coursera - Imperial College London, 2020"
          }
        ]
      }
    },
    honors: {
      eyebrow: "Honors",
      title: "Academic distinctions presented with restraint and credibility.",
      items: [
        {
          title: "National Recognition - Saber Pro Exam",
          text: "Recognized by the Colombian Ministry of Education for top performance in the 2022 national engineering graduate exam."
        },
        {
          title: "Best Undergraduate Thesis - Mechatronics Engineering",
          text: "Awarded by the National University of Colombia in 2022 for outstanding academic and technical contribution."
        },
        {
          title: "Top Academic Performance - Mechatronics Engineering Cohort",
          text: "Recognized among the highest-performing graduates of the 2022-2 cohort by the National University of Colombia."
        }
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Open to technical conversations, engineering opportunities, and collaboration.",
      text: "Based in Bogota, Colombia. The fastest way to reach me is by email or LinkedIn.",
      portraitAlt: "Jesús Caballero portrait",
      actions: [
        "jesuscaballero0@gmail.com",
        "LinkedIn",
        "GitHub"
      ]
    },
    footer: {
      name: "Jesús Daniel Caballero Colina",
      tagline: "Industrial AI Engineer • Edge ML Systems • Predictive Maintenance"
    }
  };

  function mirrorShape(value) {
    if (Array.isArray(value)) {
      return value.map((item) => mirrorShape(item));
    }

    if (value && typeof value === "object") {
      return Object.fromEntries(
        Object.entries(value).map(([key, nested]) => [key, mirrorShape(nested)])
      );
    }

    return "";
  }

  window.TRANSLATIONS = {
    en,
    es: {
      meta: {
        title: "Jesús Caballero | Ingeniero de IA Industrial",
        description: "Ingeniero de IA industrial enfocado en sistemas de ML en el edge, mantenimiento predictivo, analítica industrial y despliegue orientado a entornos OT reales.",
        keywords: "Ingeniero de IA Industrial, Edge ML, Mantenimiento predictivo, Analítica industrial, Oil and Gas, FastAPI, Docker, LangGraph, Series de tiempo, Detección de anomalías",
        ogTitle: "Jesús Caballero | Ingeniero de IA Industrial",
        ogDescription: "Ingeniero de IA industrial que construye sistemas de ML listos para edge en mantenimiento predictivo, analítica industrial y entornos productivos orientados a OT.",
        twitterTitle: "Jesús Caballero | Ingeniero de IA Industrial",
        twitterDescription: "Ingeniero de IA industrial que construye sistemas de ML listos para edge en mantenimiento predictivo y analítica industrial."
      },
    common: {
      skipLink: "Saltar al contenido",
      languageSelectorLabel: "Selector de idioma"
    },
      brand: {
        logoAlt: "Logo de Jesús Caballero",
        name: "Jesús Caballero",
        role: "Ingeniero de IA Industrial",
        homeAriaLabel: "Inicio de Jesús Caballero"
      },
      nav: {
        links: ["Sobre mí", "Experiencia", "Habilidades", "Proyecto", "Educación", "Contacto"],
        toggleLabel: "Alternar navegación"
      },
      hero: {
        eyebrow: "IA industrial • Edge ML • Mantenimiento predictivo",
        title: "Sistemas de IA industrial construidos para entornos operativos reales.",
        lead: "Diseño y desarrollo soluciones de IA listas para edge en analítica industrial, monitoreo predictivo y sistemas de software orientados a OT. Mi trabajo conecta machine learning, ingeniería backend y restricciones de despliegue que los portafolios genéricos de ML suelen ignorar.",
        buttons: {
          primary: "Ver proyecto destacado",
          secondary: "Descargar CV"
        },
        links: ["LinkedIn", "GitHub", "Correo", "CV ES"],
        panel: {
          label: "Posicionamiento",
          title: "Perfil híbrido entre IA, sistemas industriales, despliegue en edge y automatización.",
          bullets: [
            "Ingeniero de IA industrial con ownership end-to-end.",
            "Monitoreo predictivo para bombas, compresores y flujos de salud de activos.",
            "FastAPI, Docker/Podman, despliegue ARM en edge y ejecución orientada a OT.",
            "Herramientas agénticas basadas en LangGraph para razonamiento sobre datasets industriales."
          ],
          metrics: [
            {
              title: "Edge ML",
              description: "Listo para ARM, entornos restringidos y operación continua"
            },
            {
              title: "Analítica industrial",
              description: "Series de tiempo, detección de anomalías y métricas de salud y eficiencia"
            },
            {
              title: "Liderazgo técnico",
              description: "Decisiones de arquitectura, mentoría y demos técnicas"
            }
          ]
        }
      },
      about: {
        eyebrow: "Sobre mí",
        title: "No soy un científico de datos genérico, ni solo un ingeniero de software.",
        paragraphs: [
          "Soy un Ingeniero de IA Industrial con experiencia en el diseño de sistemas de machine learning para mantenimiento predictivo y monitoreo de activos industriales, con un fuerte enfoque en la realidad del despliegue. Mi trabajo abarca desarrollo de modelos, servicios backend, visualización industrial y ejecución en edge en entornos donde la confiabilidad importa tanto como la calidad del modelo.",
          "Me desenvuelvo con soltura entre analítica industrial, implementación backend, despliegue orientado a OT, sistemas embebidos y toma de decisiones técnicas. Esa combinación me permite pasar de la lógica de datos y modelado industrial a sistemas listos para producción que resultan prácticos en campo."
        ],
        pills: [
          "Mantenimiento predictivo",
          "Monitoreo de activos industriales",
          "Entornos Oil & Gas",
          "Sistemas FastAPI",
          "Docker / Podman",
          "Agentes con LangGraph",
          "ESP32 / Arduino"
        ]
      },
      experience: {
        eyebrow: "Experiencia",
        title: "Experiencia pública y segura enfocada en capacidades, arquitectura y operación confiable.",
        roles: [
          {
            role: "Ingeniero de IA Industrial / Control",
            company: "Proctek S.A.",
            date: "Marzo 2024 - Actualidad",
            summary: "Lidero el diseño técnico de sistemas de IA industrial para mantenimiento predictivo y monitoreo de activos en entornos productivos.",
            bullets: [
              "Desarrollo aplicaciones end-to-end que combinan servicios FastAPI, pipelines de machine learning, dashboards industriales y despliegue en edge.",
              "Diseño flujos de monitoreo predictivo para bombas y compresores, incluyendo detección de anomalías, pronóstico y métricas de salud de activos.",
              "Despliego y adapto soluciones para objetivos edge industriales que operan bajo restricciones de conectividad y requerimientos operativos.",
              "Apoyo la toma de decisiones técnicas, la mentoría de ingenieros junior y la validación y demostración técnica de soluciones."
            ]
          },
          {
            role: "Ingeniero Mecatrónico",
            company: "Quynza Technologies",
            date: "Marzo 2022 - Enero 2024",
            summary: "Trabajé en la frontera hardware-software para sistemas mecatrónicos industriales, construyendo una base sólida en control embebido, diseño HMI e integración práctica de sistemas.",
            bullets: [
              "Desarrollé soluciones embebidas con Arduino y ESP32 para control y adquisición de datos.",
              "Contribuí a interfaces HMI industriales y documentación técnica para sistemas físicos.",
              "Apoyé trabajo de ingeniería orientado a hardware, incluyendo integración relacionada con PCB y diseño de sistemas mecatrónicos."
            ]
          }
        ]
      },
      skills: {
        eyebrow: "Habilidades y stack",
        title: "Alcance técnico construido alrededor de IA industrial lista para despliegue.",
        groups: [
          {
            title: "IA / ML",
            items: [
              "scikit-learn",
              "Análisis de series de tiempo",
              "Detección de anomalías",
              "Pipelines de datos",
              "Ingeniería de características",
              "Modelado base"
            ]
          },
          {
            title: "Backend",
            items: [
              "Python",
              "FastAPI",
              "Arquitecturas orientadas a API",
              "Dashboards operativos",
              "Flujos de integración técnica"
            ]
          },
          {
            title: "Edge / Infraestructura",
            items: [
              "Docker",
              "Podman",
              "Despliegue en ARM",
              "Entornos restringidos",
              "Diseño para operación continua"
            ]
          },
          {
            title: "Industrial / OT",
            items: [
              "Mantenimiento predictivo",
              "Analítica industrial",
              "Monitoreo de activos Oil & Gas",
              "Conocimiento de PLC",
              "Experiencia en SCADA e IIoT"
            ]
          },
          {
            title: "Embebidos / Hardware",
            items: [
              "ESP32",
              "Arduino",
              "Programación de microcontroladores",
              "Control y adquisición de datos",
              "Integración mecatrónica"
            ]
          },
          {
            title: "Liderazgo y comunicación",
            items: [
              "Arquitectura técnica",
              "Mentoría a perfiles junior",
              "Demos técnicas",
              "Validación de soluciones",
              "Colaboración transversal"
            ]
          }
        ]
      },
      project: {
        eyebrow: "Proyecto destacado",
        title: "Plataforma de readiness para datasets industriales",
        summary: "Análisis determinístico y run-based de datasets, con modelado base para flujos de trabajo tabulares industriales y técnicos.",
        description: "Este proyecto está diseñado como un sistema analítico estructurado, no como un chatbot genérico de IA. Combina un motor de análisis en Python, un backend FastAPI y una interfaz liviana para ejecutar diagnósticos trazables, chequeos de readiness y flujos de modelado base con salidas explícitas.",
        details: [
          {
            title: "Problema",
            text: "El trabajo inicial sobre datasets industriales suele depender en exceso de notebooks, ser inconsistente y quedar débilmente documentado, especialmente cuando la calidad de los datos, la estructura temporal, el riesgo de leakage o la readiness para modelado no están claros."
          },
          {
            title: "Enfoque",
            text: "Utiliza modos de análisis determinísticos, gating de readiness y artefactos por ejecución para que cada run genere salidas estructuradas en lugar de exploración ad hoc. Una capa conversacional restringida se apoya en el núcleo analítico en vez de reemplazarlo."
          },
          {
            title: "Valor técnico",
            text: "El sistema enfatiza semántica de ejecución explícita, historial reproducible por run, flujos analíticos orientados por artefactos e integración práctica backend/frontend para análisis de ML explicable."
          }
        ],
        framingLabel: "Marco técnico",
        framing: [
          "Plataforma determinística de análisis de datasets",
          "Sistema run-based de flujo de trabajo de ML",
          "Ejecución analítica guiada por artefactos",
          "Sesgo hacia datasets industriales y de series de tiempo"
        ],
        stackLabel: "Stack técnico",
        stack: [
          "Python",
          "FastAPI",
          "Vanilla JS",
          "Artefactos por ejecución",
          "Modelado base",
          "Gating de readiness",
          "Capas opcionales de LLM / RAG"
        ],
        statusLabel: "Estado público actual",
        status: [
          "La documentación pública está en preparación.",
          "La demo pública aún no está publicada.",
          "No se muestra un repositorio público hasta que el paquete publicable esté listo."
        ]
      },
      future: {
        eyebrow: "Portafolio futuro",
        title: "Construyendo el portafolio público de forma progresiva y selectiva.",
        cards: [
          {
            title: "Más proyectos públicos próximamente",
            text: "Las futuras incorporaciones se enfocarán únicamente en trabajo publicable, con una separación clara frente a sistemas confidenciales del empleador."
          },
          {
            title: "Notas técnicas en preparación",
            text: "El material público planificado puede incluir notas de arquitectura, aprendizajes de despliegue en edge y writeups de flujos de IA industrial."
          },
          {
            title: "Diseñado para crecer",
            text: "La estructura del sitio está lista para futuras páginas de proyecto, enlaces a documentación, capturas o un flujo de contacto ligero con serverless."
          }
        ]
      },
      education: {
        education: {
          eyebrow: "Educación",
          title: "Base académica en automatización y mecatrónica.",
          items: [
            {
              title: "Maestría en Ingeniería de Automatización Industrial",
              institution: "Universidad Nacional de Colombia, Bogotá",
              years: "2023 - 2025"
            },
            {
              title: "Ingeniería Mecatrónica",
              institution: "Universidad Nacional de Colombia, Bogotá",
              years: "2017 - 2022"
            }
          ]
        },
        certifications: {
          eyebrow: "Certificaciones",
          title: "Certificaciones recientes alineadas con ML y sistemas digitales industriales.",
          items: [
            {
              title: "IBM Machine Learning Professional Certificate",
              issuer: "Coursera - IBM, 2025"
            },
            {
              title: "IBM Data Science Professional Certificate",
              issuer: "Coursera - IBM, 2025"
            },
            {
              title: "IoT Systems and Industrial Applications with Design Thinking",
              issuer: "Coursera - LearnQuest, 2025"
            },
            {
              title: "ThingWorx Technical Essentials",
              issuer: "PTC Field Academy, 2024"
            },
            {
              title: "An Introduction to Programming the Internet of Things",
              issuer: "Coursera - University of California, Irvine, 2023"
            },
            {
              title: "Mathematics for Machine Learning",
              issuer: "Coursera - Imperial College London, 2020"
            }
          ]
        }
      },
      honors: {
        eyebrow: "Distinciones",
        title: "Distinciones académicas presentadas con sobriedad y credibilidad.",
        items: [
          {
            title: "Reconocimiento nacional - Examen Saber Pro",
            text: "Reconocido por el Ministerio de Educación de Colombia por obtener un desempeño destacado en el examen nacional de egreso para ingenierías en 2022."
          },
          {
            title: "Mejor trabajo de grado - Ingeniería Mecatrónica",
            text: "Otorgado por la Universidad Nacional de Colombia en 2022 por una contribución académica y técnica sobresaliente."
          },
          {
            title: "Mejor rendimiento académico - Cohorte de Ingeniería Mecatrónica",
            text: "Reconocido entre los graduados con mejor desempeño de la cohorte 2022-2 por la Universidad Nacional de Colombia."
          }
        ]
      },
      contact: {
        eyebrow: "Contacto",
        title: "Abierto a conversaciones técnicas, oportunidades de ingeniería y colaboración.",
        text: "Con base en Bogotá, Colombia. La forma más rápida de contactarme es por correo o LinkedIn.",
        portraitAlt: "Retrato de Jesús Caballero",
        actions: [
          "jesuscaballero0@gmail.com",
          "LinkedIn",
          "GitHub"
        ]
      },
      footer: {
        name: "Jesús Daniel Caballero Colina",
        tagline: "Ingeniero de IA Industrial • Sistemas de Edge ML • Mantenimiento predictivo"
      }
    }
  };
})();
