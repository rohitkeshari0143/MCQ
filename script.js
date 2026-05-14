/* ════════════════════════════════════════════════════════════
   QUOVA — script.js  (Enhanced Edition)
   Sound effects · Emoji particle explosions · Extra charts
   ════════════════════════════════════════════════════════════ */

'use strict';

/* ─── 1. QUESTION DATA ─── */
const QUESTION_BANK = [
  {
    subject: "Internet Of Things",
    emoji: "📡",
    color: "#6366f1",
    questions:[
  {
    "question": "What role does power efficiency play in the selection of hardware components for IoT applications? 🔋",
    "options": {
      "A": "Impact on data security 🔐",
      "B": "Influence on device lifespan ⏳",
      "C": "Correlation with data accuracy 📊",
      "D": "Relationship with network speed 🌐"
    },
    "answer": "B"
  },
  {
    "question": "What is a common issue related to the wireless medium access in IoT communication? 📡",
    "options": {
      "A": "Limited battery life of devices 🔋",
      "B": "High security protocols 🔐",
      "C": "Large bandwidth availability 📶",
      "D": "Low data transmission speed 🐢"
    },
    "answer": "A"
  },
  {
    "question": "Which MAC protocol is commonly used in IoT networks for low power consumption? 💤",
    "options": {
      "A": "Carrier Sense Multiple Access (CSMA) 📡",
      "B": "Time Division Multiple Access (TDMA) ⏰",
      "C": "Code Division Multiple Access (CDMA) 🔢",
      "D": "Frequency Division Multiple Access (FDMA) 📶"
    },
    "answer": "A"
  },
  {
    "question": "What is a primary concern when surveying routing protocols for IoT applications? 🗺️",
    "options": {
      "A": "Scalability 📈",
      "B": "Software compatibility 💻",
      "C": "Hardware complexity 🧩",
      "D": "Real-time data processing ⚡"
    },
    "answer": "A"
  },
  {
    "question": "When deploying sensors in IoT networks, what is crucial for effective coverage and data collection? 📍",
    "options": {
      "A": "Placing sensors in isolated areas 🏝️",
      "B": "Ensure sensors are tightly packed together 📦",
      "C": "Randomly scattering sensors 🎲",
      "D": "Strategic sensor placement 🎯"
    },
    "answer": "D"
  },
  {
    "question": "What is a key challenge associated with node discovery in IoT environments? 🔍",
    "options": {
      "A": "Limited network congestion 🚦",
      "B": "Quick identification of nearby nodes ⚡",
      "C": "Nodes being too easily detectable 👁️",
      "D": "Node mobility 🚶‍♂️"
    },
    "answer": "D"
  },
  {
    "question": "In IoT, which type of routing protocol is commonly used for constrained devices with low power? 🔋",
    "options": {
      "A": "Proactive ⚡",
      "B": "Reactive 🔄",
      "C": "Hybrid 🔀",
      "D": "Static 📌"
    },
    "answer": "B"
  },
  {
    "question": "What is a disadvantage of using contention-based MAC protocols in IoT networks? ⚠️",
    "options": {
      "A": "Low energy efficiency 🔋",
      "B": "High collision rates 💥",
      "C": "Simplified device synchronization 🔄",
      "D": "Increased data throughput 📈"
    },
    "answer": "B"
  },
  {
    "question": "Which technology in IoT is used for the unique identification and tracking of items using radio waves? 📡",
    "options": {
      "A": "NFC (Near Field Communication) 📱",
      "B": "Bluetooth 🎧",
      "C": "RFID (Radio Frequency Identification) 🏷️",
      "D": "GPS (Global Positioning System) 🛰️"
    },
    "answer": "C"
  },
  {
    "question": "What type of networks are commonly used in IoT for connecting various devices wirelessly? 🌐",
    "options": {
      "A": "Local Area Networks (LANs) 🏢",
      "B": "Wide Area Networks (WANs) 🌍",
      "C": "Wireless Sensor Networks (WSNs) 📡",
      "D": "Metropolitan Area Networks (MANs) 🏙️"
    },
    "answer": "C"
  },
  {
    "question": "Participatory sensing technology in IoT involves: 👥",
    "options": {
      "A": "Passive data collection by sensors 📊",
      "B": "Active involvement of users in data collection 🙋",
      "C": "Centralized data processing 💻",
      "D": "Real-time data transmission ⚡"
    },
    "answer": "B"
  },
  {
    "question": "Which of the following is NOT an example of an embedded computing basic in the context of IoT? 💻",
    "options": {
      "A": "Microcontrollers 🧠",
      "B": "Sensors 📡",
      "C": "Real-time operating systems ⏰",
      "D": "Firmware 🔧"
    },
    "answer": "C"
  },
  {
    "question": "What is the primary role of hardware platforms in IoT ecosystems? 🖥️",
    "options": {
      "A": "Data analysis and interpretation 📊",
      "B": "Physical computing and data collection 📡",
      "C": "Cloud storage management ☁️",
      "D": "Software development 💻"
    },
    "answer": "B"
  },
  {
    "question": "Which type of embedded platform is specifically designed to support IoT applications and technologies? 🔧",
    "options": {
      "A": "Wearable devices ⌚",
      "B": "Smartphones 📱",
      "C": "Single-board computers 🖥️",
      "D": "Gaming consoles 🎮"
    },
    "answer": "C"
  },
  {
    "question": "What does an embedded computing system use to interact with the outside world? 🌍",
    "options": {
      "A": "Bluetooth 📶",
      "B": "GPIO (General Purpose Input/Output) pins 🔌",
      "C": "USB ports 🔌",
      "D": "HDMI cables 🖥️"
    },
    "answer": "B"
  },
  {
    "question": "In IoT, what is the purpose of a power management system in embedded platforms? 🔋",
    "options": {
      "A": "Data encryption 🔐",
      "B": "Ensuring data integrity ✓",
      "C": "Regulating power consumption ⚡",
      "D": "Communication with cloud servers ☁️"
    },
    "answer": "C"
  },
  {
    "question": "Which MAC protocol is known for its simplicity and effectiveness in IoT networks with low traffic? 📡",
    "options": {
      "A": "Token Passing 🎫",
      "B": "Pure ALOHA 📡",
      "C": "Reservation ALOHA 📅",
      "D": "Carrier Sense Multiple Access with Collision Avoidance (CSMA/CA) 🚦"
    },
    "answer": "B"
  },
  {
    "question": "What is a benefit of using proactive routing protocols in IoT networks? ⚡",
    "options": {
      "A": "Reduced control message overhead 📉",
      "B": "Minimal routing table maintenance 📋",
      "C": "Quick response to network changes 🔄",
      "D": "Low initial setup complexity 🔧"
    },
    "answer": "C"
  },
  {
    "question": "When choosing a MAC protocol for IoT, what impact does contention-based protocols have on network efficiency? 📡",
    "options": {
      "A": "Higher energy consumption 🔋",
      "B": "Lower collision rates 📉",
      "C": "Improved real-time data transmission ⚡",
      "D": "Enhanced scalability 📈"
    },
    "answer": "A"
  },
  {
    "question": "How does node discovery contribute to energy efficiency in IoT networks? 🔍",
    "options": {
      "A": "Reducing redundant data transmissions 📉",
      "B": "Increasing network bandwidth 📶",
      "C": "Extending device battery life 🔋",
      "D": "Enhancing data encryption 🔐"
    },
    "answer": "A"
  },
  {
    "question": "Which factor is crucial for successful deployment of IoT sensor nodes? 📍",
    "options": {
      "A": "Strong device authentication 🔐",
      "B": "Regular security updates 🔄",
      "C": "Continuous data backups 💾",
      "D": "Adequate power supply 🔋"
    },
    "answer": "D"
  },
  {
    "question": "What is a common example of a home automation application using IoT technology? 🏠",
    "options": {
      "A": "Automated lighting systems 💡",
      "B": "Bicycle manufacturing 🚲",
      "C": "Agricultural irrigation systems 🚜",
      "D": "Airline reservation systems ✈️"
    },
    "answer": "A"
  },
  {
    "question": "Which of the following is an industry application of IoT? 🏭",
    "options": {
      "A": "Smart refrigerators 🧊",
      "B": "Online gaming platforms 🎮",
      "C": "Predictive maintenance in manufacturing equipment 🔧",
      "D": "Social media networks 📱"
    },
    "answer": "C"
  },
  {
    "question": "What is a common surveillance application of IoT technology? 📹",
    "options": {
      "A": "Smart thermostats 🌡️",
      "B": "GPS navigation 🗺️",
      "C": "Video monitoring systems 🎥",
      "D": "E-commerce platforms 🛒"
    },
    "answer": "C"
  },
  {
    "question": "Which of the following is NOT typically considered an IoT application? ❌",
    "options": {
      "A": "Traffic management systems 🚦",
      "B": "Wearable health devices ⌚",
      "C": "Music streaming services 🎵",
      "D": "Smart grid technology ⚡"
    },
    "answer": "C"
  },
  {
    "question": "What is a critical aspect of securing IoT devices? 🔐",
    "options": {
      "A": "Keeping all security measures secret 🤫",
      "B": "Ignoring security concerns 🙈",
      "C": "Regularly updating device software and implementing strong authentication 🔄",
      "D": "Blaming security breaches on aliens 👽"
    },
    "answer": "C"
  },
  {
    "question": "Which technology is fundamental for enabling IoT applications in remote locations? 🏔️",
    "options": {
      "A": "Invisible ink ✒️",
      "B": "Satellite communication 🛰️",
      "C": "Carrier pigeons 🐦",
      "D": "Telepathy 🧠"
    },
    "answer": "B"
  },
  {
    "question": "What does the term 'Edge Computing' refer to in IoT? ⚡",
    "options": {
      "A": "Performing data processing closer to the data source 📍",
      "B": "Balancing on the edge of tall buildings 🏢",
      "C": "Creating data processing centers in outer space 🚀",
      "D": "Using a knife to cut your internet connection 🔪"
    },
    "answer": "A"
  },
  {
    "question": "Which of the following is an example of wearable IoT technology? ⌚",
    "options": {
      "A": "Smartwatches ⌚",
      "B": "Wooden clogs 👞",
      "C": "Cowboy hats 🤠",
      "D": "Flip phones 📱"
    },
    "answer": "A"
  },
  {
    "question": "What is the primary purpose of IoT technology in agriculture? 🚜",
    "options": {
      "A": "Making farmers' lives more complicated 😩",
      "B": "Improving crop management and increasing efficiency 🌾",
      "C": "Teaching cows to dance 🐄💃",
      "D": "Broadcasting karaoke shows in the fields 🎤"
    },
    "answer": "B"
  },
  {
    "question": "What type of technology is commonly used in IoT for detecting and monitoring physical phenomena? 📡",
    "options": {
      "A": "Sensors 🔍",
      "B": "Transistors 🔌",
      "C": "Resistors ⚡",
      "D": "Amplifiers 🔊"
    },
    "answer": "A"
  },
  {
    "question": "Which of the following is an example of a digital sensor used in IoT applications? 🔢",
    "options": {
      "A": "Thermocouple 🌡️",
      "B": "Photodiode 💡",
      "C": "Accelerometer 📳",
      "D": "Light-dependent resistor 🌞"
    },
    "answer": "C"
  },
  {
    "question": "In the context of IoT, what are actuators primarily responsible for? 🎮",
    "options": {
      "A": "Collecting data 📊",
      "B": "Processing data 💻",
      "C": "Storing data 💾",
      "D": "Executing actions ⚙️"
    },
    "answer": "D"
  },
  {
    "question": "Which factor is essential to consider when planning sensor deployment in IoT systems? 📍",
    "options": {
      "A": "Network latency ⏱️",
      "B": "Encrypted data transmission 🔐",
      "C": "Sensory data storage capacity 💾",
      "D": "Communication range 📡"
    },
    "answer": "D"
  },
  {
    "question": "When selecting a MAC protocol for an IoT network, what should be a priority for high device connectivity? 📡",
    "options": {
      "A": "Low latency ⚡",
      "B": "High channel capacity 📶",
      "C": "Device synchronization 🔄",
      "D": "Energy efficiency 🔋"
    },
    "answer": "D"
  },
  {
    "question": "What is a critical consideration when evaluating the performance of routing protocols in IoT? 🗺️",
    "options": {
      "A": "Number of network devices 🔢",
      "B": "Distance between nodes 📏",
      "C": "Network topology changes 🔄",
      "D": "Data encryption methods 🔐"
    },
    "answer": "C"
  },
  {
    "question": "Which routing protocol is designed to address the dynamic nature and scalability of IoT networks? 🔄",
    "options": {
      "A": "Optimized Link State Routing (OLSR) 📡",
      "B": "Destination-Sequenced Distance Vector (DSDV) 📋",
      "C": "Ad hoc On-Demand Distance Vector (AODV) 🚀",
      "D": "Routing Information Protocol (RIP) 📡"
    },
    "answer": "C"
  },
  {
    "question": "What is a common characteristic of sensor nodes in IoT applications? 📡",
    "options": {
      "A": "High processing power 🚀",
      "B": "Large memory storage 💾",
      "C": "Long battery life 🔋",
      "D": "Limited processing and memory resources 🧩"
    },
    "answer": "D"
  },
  {
    "question": "Why is node discovery important in IoT networks? 🔍",
    "options": {
      "A": "To prevent unauthorized network access 🔐",
      "B": "To optimize network security 🛡️",
      "C": "To establish network connectivity 🌐",
      "D": "To reduce data latency ⏱️"
    },
    "answer": "C"
  },
  {
    "question": "In IoT, which routing protocol is more suitable for networks with changing topologies? 🔄",
    "options": {
      "A": "Distance Vector 📏",
      "B": "Link State 🔗",
      "C": "Hybrid 🔀",
      "D": "Proactive ⚡"
    },
    "answer": "C"
  },
  {
    "question": "When deploying sensors in urban environments for IoT applications, what should be considered to enhance communication reliability? 🏙️",
    "options": {
      "A": "Close proximity to water sources 💧",
      "B": "Avoiding line of sight communication 🚫",
      "C": "Height of sensor placement 📈",
      "D": "Random sensor placement 🎲"
    },
    "answer": "C"
  },
  {
    "question": "How does IoT impact data collection and analysis? 📊",
    "options": {
      "A": "It makes data collection and analysis more difficult 😩",
      "B": "It has no impact on data processes 🚫",
      "C": "It enhances data collection and analysis capabilities 📈",
      "D": "It only works on weekends 📅"
    },
    "answer": "C"
  },
  {
    "question": "What does the conceptual framework of IoT outline? 🏗️",
    "options": {
      "A": "The best IoT memes 😂",
      "B": "The theoretical structure and design of IoT systems 📐",
      "C": "The rules of IoT chess ♟️",
      "D": "The history of IoT legends 📜"
    },
    "answer": "B"
  },
  {
    "question": "Which statement best describes the vision of IoT? 👁️",
    "options": {
      "A": "To connect all devices and objects to the internet 🌐",
      "B": "To disconnect all devices from the internet 🔌",
      "C": "To create more confusion in the world 😵",
      "D": "To move all devices to outer space 🚀"
    },
    "answer": "A"
  },
  {
    "question": "What is the significance of the architectural view in IoT systems? 🏛️",
    "options": {
      "A": "It provides a physical model for IoT devices 📦",
      "B": "It offers a blueprint for designing IoT networks 📐",
      "C": "It predicts the future of IoT technologies 🔮",
      "D": "It is purely decorative 🎨"
    },
    "answer": "B"
  },
  {
    "question": "Which sector benefits most from IoT applications? 📈",
    "options": {
      "A": "Everything but the healthcare sector 🚫",
      "B": "Only the fashion industry 👗",
      "C": "Various industries like healthcare, agriculture, and transportation 🏥🚜🚚",
      "D": "The bubble gum industry 🍬"
    },
    "answer": "C"
  },
  {
    "question": "How do IoT devices communicate with each other? 📡",
    "options": {
      "A": "Through telepathy 🧠",
      "B": "Via carrier pigeons 🐦",
      "C": "Over a network using protocols 🌐",
      "D": "Through interpretive dance 💃"
    },
    "answer": "C"
  },
  {
    "question": "What role do sensors play in IoT systems? 📡",
    "options": {
      "A": "Collecting data from the environment 🌍",
      "B": "Making toast 🍞",
      "C": "Predicting the future 🔮",
      "D": "Creating chaos 🌪️"
    },
    "answer": "A"
  },
  {
    "question": "Which phrase best describes the concept of 'smart cities' in the context of IoT? 🏙️",
    "options": {
      "A": "Cities that know all your secrets 🤫",
      "B": "Urban areas that use IoT technologies to improve services and efficiency 📈",
      "C": "Cities made of candy 🍭",
      "D": "Cities run entirely by robots 🤖"
    },
    "answer": "B"
  },
  {
    "question": "How does IoT technology contribute to environmental sustainability? 🌍",
    "options": {
      "A": "By increasing waste production 🗑️",
      "B": "By optimizing energy consumption ⚡",
      "C": "By depleting natural resources ⛏️",
      "D": "By encouraging pollution 🏭"
    },
    "answer": "B"
  },
  {
    "question": "Which of the following is a benefit of using IoT in supply chain management? 📦",
    "options": {
      "A": "Decreased visibility into logistics 👁️",
      "B": "Increased operational inefficiencies 📉",
      "C": "Improved inventory tracking 📊",
      "D": "Limited access to real-time data 🚫"
    },
    "answer": "C"
  },
  {
    "question": "In which sector are smart meters commonly used as an IoT application? ⚡",
    "options": {
      "A": "Entertainment 🎬",
      "B": "Telecommunications 📱",
      "C": "Utilities 💧",
      "D": "Hospitality 🏨"
    },
    "answer": "C"
  },
  {
    "question": "What is a common smart city application of IoT technology? 🏙️",
    "options": {
      "A": "Noise pollution sensors 🔊",
      "B": "Ice cream production 🍦",
      "C": "Social media platforms 📱",
      "D": "Online shopping websites 🛒"
    },
    "answer": "A"
  },
  {
    "question": "Which industry often utilizes IoT for condition monitoring of equipment? 🔧",
    "options": {
      "A": "Fashion 👗",
      "B": "Mining ⛏️",
      "C": "Travel ✈️",
      "D": "Food service 🍔"
    },
    "answer": "B"
  },
  {
    "question": "How does IoT technology facilitate remote monitoring in the field of oil and gas? 🛢️",
    "options": {
      "A": "By reducing safety measures ⚠️",
      "B": "By enabling real-time data collection 📊",
      "C": "By increasing manual inspections 🔍",
      "D": "By limiting communication channels 📡"
    },
    "answer": "B"
  },
  {
    "question": "What is an example of an IoT application in smart grid technology? ⚡",
    "options": {
      "A": "Professional sports leagues 🏀",
      "B": "Traffic light control systems 🚦",
      "C": "Real-time energy consumption monitoring 📊",
      "D": "Social networking sites 📱"
    },
    "answer": "C"
  },
  {
    "question": "Why is data integration important in IoT architecture? 🔗",
    "options": {
      "A": "To create data silos 🏢",
      "B": "To increase complexity 🧩",
      "C": "To enhance decision-making and insights 💡",
      "D": "To hinder communication 🚫"
    },
    "answer": "C"
  },
  {
    "question": "How do standards considerations impact the scalability of IoT solutions? 📏",
    "options": {
      "A": "They have no effect 🚫",
      "B": "They limit scalability 📉",
      "C": "They promote interoperability and scalability 📈",
      "D": "They increase security risks ⚠️"
    },
    "answer": "C"
  },
  {
    "question": "Which architectural approach is more focused on real-time data processing? ⚡",
    "options": {
      "A": "IoT 🌐",
      "B": "M2M 🤖",
      "C": "Both are equally focused on real-time processing ⚖️",
      "D": "Neither focus on real-time data processing 🚫"
    },
    "answer": "A"
  },
  {
    "question": "What does IoT stand for? 🔤",
    "options": {
      "A": "Internet of Technology 💻",
      "B": "Internet of Things 🌐",
      "C": "Internet on Television 📺",
      "D": "Internet of Thinking 🧠"
    },
    "answer": "B"
  },
  {
    "question": "Which of the following is a key component of IoT architecture? 🏗️",
    "options": {
      "A": "Microprocessors 🧠",
      "B": "Cooking utensils 🍳",
      "C": "Musical instruments 🎵",
      "D": "Gardening tools 🌱"
    },
    "answer": "A"
  },
  {
    "question": "What is M2M communication in the context of IoT? 🤖",
    "options": {
      "A": "Man to Man communication 👨",
      "B": "Machine to Machine communication 💻",
      "C": "Mind to Mind communication 🧠",
      "D": "Map to Map communication 🗺️"
    },
    "answer": "B"
  },
  {
    "question": "Which technology is commonly used for wireless communication in IoT devices? 📡",
    "options": {
      "A": "Morse Code •–•",
      "B": "Zigbee 🐝",
      "C": "Smoke Signals 💨",
      "D": "Carrier Pigeons 🐦"
    },
    "answer": "B"
  },
  {
    "question": "Which of the following is NOT a potential source of IoT data? ❌",
    "options": {
      "A": "Sensors 📡",
      "B": "Smartphones 📱",
      "C": "Social Media 💬",
      "D": "Refrigerators 🧊"
    },
    "answer": "C"
  },
  {
    "question": "In the IoT world, what does the 'Internet' refer to? 🌐",
    "options": {
      "A": "A vast network of interconnected computers 💻",
      "B": "A series of tubes 📦",
      "C": "A secret underground society 🤫",
      "D": "A magical portal ✨"
    },
    "answer": "A"
  },
  {
    "question": "What is a common example of IoT technology in everyday life? 🏠",
    "options": {
      "A": "Smart thermostats 🌡️",
      "B": "Manual typewriters 📇",
      "C": "Horse-drawn carriages 🐴",
      "D": "Abacus 🧮"
    },
    "answer": "A"
  },
  {
    "question": "In which industry is IoT technology commonly used for asset tracking? 📦",
    "options": {
      "A": "Fashion 👗",
      "B": "Healthcare 🏥",
      "C": "Logistics 🚚",
      "D": "Tourism ✈️"
    },
    "answer": "C"
  },
  {
    "question": "What is an example of an IoT application in healthcare? 🏥",
    "options": {
      "A": "Online shopping platforms 🛒",
      "B": "Remote patient monitoring 📊",
      "C": "Weather forecasting 🌤️",
      "D": "Ride-sharing services 🚗"
    },
    "answer": "B"
  },
  {
    "question": "How does IoT technology enhance energy efficiency in buildings? 🏢",
    "options": {
      "A": "By increasing water consumption 💧",
      "B": "By optimizing HVAC systems based on occupancy 🌡️",
      "C": "By promoting excessive energy consumption ⚡",
      "D": "By encouraging paper wastage 📄"
    },
    "answer": "B"
  },
  {
    "question": "What is a key benefit of using IoT in agriculture? 🚜",
    "options": {
      "A": "Increased water usage 💧",
      "B": "Improved crop monitoring and management 🌾",
      "C": "Decreased food production 📉",
      "D": "Enhanced soil erosion 🌪️"
    },
    "answer": "B"
  },
  {
    "question": "Which of the following is an example of an industrial IoT use case? 🏭",
    "options": {
      "A": "Inventory management in retail stores 🛒",
      "B": "Personal fitness trackers ⌚",
      "C": "Fleet management for transportation companies 🚚",
      "D": "Social media applications 📱"
    },
    "answer": "C"
  },
  {
    "question": "What is a potential challenge of implementing IoT in smart cities? 🏙️",
    "options": {
      "A": "Improved traffic flow 🚦",
      "B": "Increased safety measures 🛡️",
      "C": "Privacy and security concerns 🔐",
      "D": "Enhanced communication networks 📡"
    },
    "answer": "C"
  },
  {
    "question": "Which industry commonly utilizes IoT for predictive maintenance of machinery? 🔧",
    "options": {
      "A": "Agriculture 🚜",
      "B": "Construction 🏗️",
      "C": "Manufacturing 🏭",
      "D": "Entertainment 🎬"
    },
    "answer": "C"
  },
  {
    "question": "What is a unique feature of IoT applications in the automotive industry? 🚗",
    "options": {
      "A": "Monitoring heart rate ❤️",
      "B": "Autonomous driving technologies 🤖",
      "C": "Weather forecasting 🌤️",
      "D": "Food delivery services 🍔"
    },
    "answer": "B"
  },
  {
    "question": "What is an example of an IoT application in retail? 🛒",
    "options": {
      "A": "Real-time inventory tracking 📊",
      "B": "Recipe sharing platforms 🍳",
      "C": "Fitness tracking apps ⌚",
      "D": "Online dating websites 💕"
    },
    "answer": "A"
  },
  {
    "question": "Which of the following is NOT a typical capability needed in an IoT architecture? ❌",
    "options": {
      "A": "Real-time data analytics ⚡",
      "B": "Device management 📱",
      "C": "Unlimited energy usage 🔋",
      "D": "Remote monitoring 📡"
    },
    "answer": "C"
  },
  {
    "question": "What should be considered when outlining an IoT architecture with regards to security? 🔐",
    "options": {
      "A": "Security is not important in IoT 🚫",
      "B": "Security should be an afterthought ⏰",
      "C": "Security should be integrated from the beginning 🔒",
      "D": "Security can be added at the end 🏁"
    },
    "answer": "C"
  },
  {
    "question": "Which of the following is a common standard in IoT technology? 📏",
    "options": {
      "A": "Non-standardized communication protocols 🚫",
      "B": "Vendor-specific solutions 🏢",
      "C": "Wi-Fi and Bluetooth only 📶",
      "D": "MQTT and CoAP 📡"
    },
    "answer": "D"
  },
  {
    "question": "What is the main benefit of having a Reference Architecture in IoT? 🏛️",
    "options": {
      "A": "It limits scalability 📉",
      "B": "It restricts communication 🚫",
      "C": "It provides a common framework for development 🏗️",
      "D": "It increases complexity 🧩"
    },
    "answer": "C"
  },
  {
    "question": "How does a Reference Model aid in the development of IoT solutions? 📐",
    "options": {
      "A": "It provides no value 🚫",
      "B": "It increases security risks ⚠️",
      "C": "It helps to establish common terminology and concepts 📚",
      "D": "It causes confusion 😵"
    },
    "answer": "C"
  },
  {
    "question": "In M2M vs IoT architecture, which tends to have more diverse devices to manage? 🤖 vs 🌐",
    "options": {
      "A": "M2M 🤖",
      "B": "IoT 🌐",
      "C": "Both have the same amount ⚖️",
      "D": "Neither have any devices to manage 🚫"
    },
    "answer": "B"
  },
  {
    "question": "Which of the following is NOT a primary consideration in M2M vs IoT architectural design? ❌",
    "options": {
      "A": "Scalability 📈",
      "B": "Security 🔐",
      "C": "Data Privacy 🤫",
      "D": "Consumption of data 📊"
    },
    "answer": "D"
  },
  {
    "question": "What plays a crucial role in the success of IoT deployments? 🏆",
    "options": {
      "A": "Non-standardized communication 🚫",
      "B": "Limited connectivity 📡",
      "C": "Standardized architectures and interfaces 📏",
      "D": "Vendor lock-in 🔒"
    },
    "answer": "C"
  },
  {
    "question": "What is a key challenge when developing an M2M architecture? 🤖",
    "options": {
      "A": "Enabling device communication 📡",
      "B": "Managing data flow 📊",
      "C": "Ensuring low latency ⚡",
      "D": "None of the above 🚫"
    },
    "answer": "D"
  },
  {
    "question": "Which of the following is an example of an IoT supported hardware platform that provides a comprehensive development environment? 🖥️",
    "options": {
      "A": "Arduino 🤖",
      "B": "PlayStation 🎮",
      "C": "Laptop 💻",
      "D": "Smartwatch ⌚"
    },
    "answer": "A"
  },
  {
    "question": "What hardware component is essential for an embedded device to communicate wirelessly in IoT applications? 📡",
    "options": {
      "A": "Antenna 📡",
      "B": "Fan 💨",
      "C": "Thermal paste 🧴",
      "D": "Power supply 🔋"
    },
    "answer": "A"
  },
  {
    "question": "In the context of IoT, what role does a real-time operating system (RTOS) play in embedded platforms? ⏰",
    "options": {
      "A": "Providing high-speed internet connectivity 🌐",
      "B": "Enabling real-time data processing ⚡",
      "C": "Enhancing graphic performance 🎮",
      "D": "Improving battery life 🔋"
    },
    "answer": "B"
  },
  {
    "question": "Which of the following statements is true about the use of firmware in embedded systems for IoT? 🔧",
    "options": {
      "A": "Firmware is non-upgradable and static 🚫",
      "B": "Firmware controls the operation of hardware components 🎮",
      "C": "Firmware is only used for debugging purposes 🐛",
      "D": "Firmware is interchangeable with software 🔄"
    },
    "answer": "B"
  },
  {
    "question": "What is a key advantage of using embedded computing platforms for IoT applications? 💻",
    "options": {
      "A": "Unlimited power supply 🔋",
      "B": "High processing speed 🚀",
      "C": "Large form factor 📦",
      "D": "Cost-effectiveness 💰"
    },
    "answer": "D"
  },
  {
    "question": "Which hardware component is crucial for enabling data storage and retrieval in IoT devices? 💾",
    "options": {
      "A": "Microphone 🎤",
      "B": "Hard drive 💽",
      "C": "Graphics card 🎮",
      "D": "Memory module 🧠"
    },
    "answer": "D"
  },
  {
    "question": "How do IoT devices utilize sensors and actuators for data acquisition and implementation? 📡⚙️",
    "options": {
      "A": "Sensors for data storage, actuators for data retrieval 💾",
      "B": "Sensors for data processing, actuators for data analysis 💻",
      "C": "Sensors for data collection, actuators for executing actions 📊",
      "D": "Sensors for data transmission, actuators for communication 📡"
    },
    "answer": "C"
  },
  {
    "question": "Which networking technology is commonly used for connecting IoT devices over short distances? 📡",
    "options": {
      "A": "Ethernet 🔌",
      "B": "Wi-Fi 📶",
      "C": "Zigbee 🐝",
      "D": "Cellular 📱"
    },
    "answer": "C"
  },
  {
    "question": "What is a key main design principle for M2M architecture? 🤖",
    "options": {
      "A": "Low latency ⚡",
      "B": "High energy consumption 🔋",
      "C": "Limited scalability 📉",
      "D": "Centralized data processing 💻"
    },
    "answer": "A"
  },
  {
    "question": "Which of the following is a needed capability in IoT architecture? 🏗️",
    "options": {
      "A": "Decreased data security 📉",
      "B": "High device autonomy 🤖",
      "C": "Standardized communication protocols 📏",
      "D": "Singular data processing center for each organization 🏢"
    },
    "answer": "C"
  },
  {
    "question": "In IoT architecture outline, what is a common approach to data communication? 📡",
    "options": {
      "A": "Decentralized data processing 🌐",
      "B": "High accessibility barriers 🚧",
      "C": "Centralized data storage 💾",
      "D": "Low device interoperability 🔗"
    },
    "answer": "A"
  },
  {
    "question": "When considering standards in IoT architecture, why are they important? 📏",
    "options": {
      "A": "To limit innovation 🚫",
      "B": "To hinder interoperability 🔗",
      "C": "To ensure security and compatibility 🔐",
      "D": "To increase data silos 🏢"
    },
    "answer": "C"
  },
  {
    "question": "Which of the following best describes a Reference Architecture in IoT? 🏛️",
    "options": {
      "A": "A highly customized solution 🎨",
      "B": "A generic blueprint providing common structures and functions 📐",
      "C": "A rigid framework without flexibility 🔒",
      "D": "An isolated system with no connectivity 🚫"
    },
    "answer": "B"
  },
  {
    "question": "What is the purpose of a Reference Model in IoT architecture? 📐",
    "options": {
      "A": "To confuse system developers 😵",
      "B": "To restrict design options 🚫",
      "C": "To provide a common language and understanding 💬",
      "D": "To stifle creativity 🎨"
    },
    "answer": "C"
  },
  {
    "question": "What does M2M stand for in the context of Architecture? 🤖",
    "options": {
      "A": "Many to Many 🔢",
      "B": "Mini to Massive 📏",
      "C": "Machine to Machine 💻",
      "D": "Mobile to Mobile 📱"
    },
    "answer": "C"
  },
  {
    "question": "How do Main design principles differ between M2M and IoT architectures? 🤖 vs 🌐",
    "options": {
      "A": "They are exactly the same ⚖️",
      "B": "M2M focuses more on security, while IoT focuses on scalability 🔐📈",
      "C": "IoT is all about energy consumption, while M2M is not 🔋",
      "D": "There are no design principles in IoT architecture 🚫"
    },
    "answer": "B"
  },
  {
    "question": "What is the main purpose of routing in IoT networks? 🗺️",
    "options": {
      "A": "To play games online 🎮",
      "B": "To send messages to friends 💬",
      "C": "To find the best path for data to travel 🛤️",
      "D": "To make phone calls 📞"
    },
    "answer": "C"
  },
  {
    "question": "Which of these is an example of an IoT device in your home? 🏠",
    "options": {
      "A": "A paper book 📖",
      "B": "A smart thermostat 🌡️",
      "C": "A wooden chair 🪑",
      "D": "A regular pencil ✏️"
    },
    "answer": "B"
  },
  {
    "question": "What helps IoT devices talk to each other? 💬",
    "options": {
      "A": "Sign language 🤟",
      "B": "Written letters ✉️",
      "C": "Wireless signals 📡",
      "D": "Smoke signals 💨"
    },
    "answer": "C"
  },
  {
    "question": "Why do IoT devices need to save power? 🔋",
    "options": {
      "A": "To help save money on electricity 💰",
      "B": "To make them look prettier ✨",
      "C": "To make them heavier ⚖️",
      "D": "To make them louder 🔊"
    },
    "answer": "A"
  },
  {
    "question": "What is a network protocol? 📡",
    "options": {
      "A": "A set of rules for devices to communicate 📏",
      "B": "A type of computer game 🎮",
      "C": "A kind of internet password 🔐",
      "D": "A charging cable 🔌"
    },
    "answer": "A"
  },
  {
    "question": "What happens when IoT devices share data? 📊",
    "options": {
      "A": "They make loud noises 🔊",
      "B": "They change color 🎨",
      "C": "They help each other work better 🤝",
      "D": "They turn off automatically ⚡"
    },
    "answer": "C"
  },
  {
    "question": "What is an important feature of IoT routing? 🗺️",
    "options": {
      "A": "It needs lots of power 🔋",
      "B": "It works with few messages 📉",
      "C": "It only works during daytime ☀️",
      "D": "It requires constant human help 👨"
    },
    "answer": "B"
  },
  {
    "question": "Which is a common problem in IoT networks? ⚠️",
    "options": {
      "A": "Devices moving too fast 💨",
      "B": "Battery life running low 🔋",
      "C": "Devices being too heavy ⚖️",
      "D": "Networks being too colorful 🎨"
    },
    "answer": "B"
  },
  {
    "question": "How do IoT devices know where to send information? 📡",
    "options": {
      "A": "They guess randomly 🎲",
      "B": "They ask a person 👨",
      "C": "They follow routing tables 📋",
      "D": "They always send to the same place 📍"
    },
    "answer": "C"
  },
  {
    "question": "What makes a good IoT network? 🌟",
    "options": {
      "A": "Using lots of power 🔋",
      "B": "Working reliably with little energy ⚡",
      "C": "Having very few devices 🔢",
      "D": "Making loud beeping sounds 🔊"
    },
    "answer": "B"
  },
  {
    "question": "What is a sensor used for? 📡",
    "options": {
      "A": "To play video games 🎮",
      "B": "To detect changes in the environment 🌍",
      "C": "To make phone calls 📞",
      "D": "To write messages ✍️"
    },
    "answer": "B"
  },
  {
    "question": "Which of these is an example of a sensor we use every day? 📏",
    "options": {
      "A": "A pencil ✏️",
      "B": "A paper clip 📎",
      "C": "A thermometer 🌡️",
      "D": "A rubber band 🩹"
    },
    "answer": "C"
  },
  {
    "question": "Where might you find a motion sensor? 🚶",
    "options": {
      "A": "In automatic doors at the supermarket 🚪",
      "B": "Inside a pencil case 📦",
      "C": "Under a desk 🪑",
      "D": "Inside a book 📖"
    },
    "answer": "A"
  },
  {
    "question": "What does a temperature sensor help us know? 🌡️",
    "options": {
      "A": "What time it is ⏰",
      "B": "How loud something is 🔊",
      "C": "How hot or cold something is 🔥❄️",
      "D": "What color something is 🎨"
    },
    "answer": "C"
  },
  {
    "question": "Which sensor helps keep us safe at home? 🏠",
    "options": {
      "A": "TV remote 📺",
      "B": "Light switch 💡",
      "C": "Smoke detector 🚨",
      "D": "Door handle 🚪"
    },
    "answer": "C"
  },
  {
    "question": "What can a light sensor do? 💡",
    "options": {
      "A": "Make sounds 🔊",
      "B": "Turn lights on when it gets dark 🌙",
      "C": "Cook food 🍳",
      "D": "Clean rooms 🧹"
    },
    "answer": "B"
  },
  {
    "question": "Which device uses sensors to know when you touch it? 👆",
    "options": {
      "A": "A regular book 📖",
      "B": "A wooden table 🪑",
      "C": "A tablet screen 📱",
      "D": "A paper notebook 📓"
    },
    "answer": "C"
  },
  {
    "question": "What might a weather sensor tell us? 🌤️",
    "options": {
      "A": "What movies are playing 🎬",
      "B": "If it's going to rain ☔",
      "C": "What time to go to bed ⏰",
      "D": "What to eat for lunch 🍔"
    },
    "answer": "B"
  },
  {
    "question": "How do sensors help our homes be 'smart'? 🏠",
    "options": {
      "A": "They do our homework 📚",
      "B": "They make our lunch 🍳",
      "C": "They detect when we need help 🆘",
      "D": "They paint our walls 🎨"
    },
    "answer": "C"
  },
  {
    "question": "Which sensor helps cars park safely? 🚗",
    "options": {
      "A": "Distance sensor 📏",
      "B": "Time sensor ⏰",
      "C": "Color sensor 🎨",
      "D": "Sound sensor 🔊"
    },
    "answer": "A"
  },
  {
    "question": "What is IoT? 🔤",
    "options": {
      "A": "Internet of Trees 🌳",
      "B": "Internet of Things 🌐",
      "C": "Internet of Time ⏰",
      "D": "Internet of Television 📺"
    },
    "answer": "B"
  },
  {
    "question": "Which device helps make a home 'smart'? 🏠",
    "options": {
      "A": "A regular light bulb 💡",
      "B": "A smart thermostat 🌡️",
      "C": "A regular doorbell 🔔",
      "D": "A standard clock ⏰"
    },
    "answer": "B"
  },
  {
    "question": "What can a smart doorbell do? 🔔",
    "options": {
      "A": "Only ring when pressed 🛎️",
      "B": "Show who is at your door on your phone 📱",
      "C": "Make coffee ☕",
      "D": "Clean the floor 🧹"
    },
    "answer": "B"
  },
  {
    "question": "How do smart lights help at home? 💡",
    "options": {
      "A": "They never need to be replaced 🔄",
      "B": "They can only turn on and off ⚪",
      "C": "They can change colors and brightness 🎨",
      "D": "They work without electricity ⚡"
    },
    "answer": "C"
  },
  {
    "question": "What is a common use of IoT in schools? 🏫",
    "options": {
      "A": "Smart attendance tracking 📊",
      "B": "Making lunch 🍳",
      "C": "Cleaning windows 🪟",
      "D": "Painting walls 🎨"
    },
    "answer": "A"
  },
  {
    "question": "Which is an example of IoT in healthcare? 🏥",
    "options": {
      "A": "Paper charts 📄",
      "B": "Regular thermometers 🌡️",
      "C": "Smart health monitors 📊",
      "D": "Regular watches ⌚"
    },
    "answer": "C"
  },
  {
    "question": "How can IoT help keep a home safe? 🏠",
    "options": {
      "A": "By painting the walls 🎨",
      "B": "Through security cameras 📹",
      "C": "By cleaning windows 🪟",
      "D": "By watering plants 🌱"
    },
    "answer": "B"
  },
  {
    "question": "What can smart kitchen appliances do? 🍳",
    "options": {
      "A": "Tell you when food is running low 📊",
      "B": "Cook food by themselves 🤖",
      "C": "Clean the house 🧹",
      "D": "Drive a car 🚗"
    },
    "answer": "A"
  },
  {
    "question": "How do motion sensors work in a smart home? 🚶",
    "options": {
      "A": "They make coffee ☕",
      "B": "They detect movement 🏃",
      "C": "They cook food 🍳",
      "D": "They clean floors 🧹"
    },
    "answer": "B"
  },
  {
    "question": "What is a smart thermostat used for? 🌡️",
    "options": {
      "A": "Making phone calls 📞",
      "B": "Playing music 🎵",
      "C": "Controlling home temperature 🌡️",
      "D": "Washing dishes 🍽️"
    },
    "answer": "C"
  },
  {
    "question": "How can IoT help in farming? 🚜",
    "options": {
      "A": "By controlling water and temperature 💧🌡️",
      "B": "By painting fences 🎨",
      "C": "By driving tractors 🚜",
      "D": "By cleaning barns 🧹"
    },
    "answer": "A"
  },
  {
    "question": "What is a benefit of smart lighting? 💡",
    "options": {
      "A": "It never breaks 🔧",
      "B": "It saves energy ⚡",
      "C": "It cooks food 🍳",
      "D": "It cleans rooms 🧹"
    },
    "answer": "B"
  },
  {
    "question": "How can IoT help with pet care? 🐾",
    "options": {
      "A": "It walks the dog 🐕",
      "B": "It trains pets 🎓",
      "C": "It monitors pet food and water 🍲💧",
      "D": "It grooms pets ✂️"
    },
    "answer": "C"
  },
  {
    "question": "What can smart watches do? ⌚",
    "options": {
      "A": "Cook meals 🍳",
      "B": "Track health and exercise ❤️🏃",
      "C": "Clean houses 🧹",
      "D": "Drive cars 🚗"
    },
    "answer": "B"
  },
  {
    "question": "How do smart refrigerators help? 🧊",
    "options": {
      "A": "They make ice cream 🍦",
      "B": "They drive to the store 🚗",
      "C": "They track food items 📊",
      "D": "They wash dishes 🍽️"
    },
    "answer": "C"
  },
  {
    "question": "What is a voice assistant? 🎤",
    "options": {
      "A": "A robot that cleans 🤖",
      "B": "A device that follows voice commands 🗣️",
      "C": "A machine that cooks 🍳",
      "D": "A tool that paints 🎨"
    },
    "answer": "B"
  },
  {
    "question": "How can IoT help save energy? ⚡",
    "options": {
      "A": "By turning off unused lights 💡",
      "B": "By cooking faster 🍳",
      "C": "By cleaning better 🧹",
      "D": "By painting walls 🎨"
    },
    "answer": "A"
  },
  {
    "question": "What is a smart garden system? 🌱",
    "options": {
      "A": "A robot that pulls weeds 🤖",
      "B": "A system that waters plants automatically 💧",
      "C": "A machine that picks flowers 🌸",
      "D": "A tool that cuts grass ✂️"
    },
    "answer": "B"
  },
  {
    "question": "How do smart cameras help in security? 📹",
    "options": {
      "A": "They cook food 🍳",
      "B": "They clean windows 🪟",
      "C": "They watch for unusual activity 👀",
      "D": "They paint walls 🎨"
    },
    "answer": "C"
  },
  {
    "question": "What is a smart door lock? 🔒",
    "options": {
      "A": "A lock that needs a key 🔑",
      "B": "A lock you can control with your phone 📱",
      "C": "A lock that paints itself 🎨",
      "D": "A lock that makes noise 🔊"
    },
    "answer": "B"
  },
  {
    "question": "What does MAC stand for in computer networks? 🔤",
    "options": {
      "A": "Machine Access Code 💻",
      "B": "Multiple Access Control 🔢",
      "C": "Medium Access Control 📡",
      "D": "Mobile Access Connection 📱"
    },
    "answer": "C"
  },
  {
    "question": "Which of these is most like how MAC protocol works? 📡",
    "options": {
      "A": "Taking turns talking in class 🗣️",
      "B": "Everyone shouting at once 📢",
      "C": "Only one person allowed to talk all day 🚫",
      "D": "Writing notes instead of talking ✍️"
    },
    "answer": "A"
  },
  {
    "question": "What is the main job of MAC protocol in IoT devices? 📡",
    "options": {
      "A": "To make devices faster ⚡",
      "B": "To help devices share the network fairly ⚖️",
      "C": "To make the internet work 🌐",
      "D": "To save battery power only 🔋"
    },
    "answer": "B"
  },
  {
    "question": "When IoT devices want to send messages at the same time, what happens? ⏰",
    "options": {
      "A": "All messages get lost ❌",
      "B": "They take turns using MAC protocol 🔄",
      "C": "The biggest device goes first 📏",
      "D": "They wait for the internet to work better ⏳"
    },
    "answer": "B"
  },
  {
    "question": "Which is an example of a simple MAC protocol rule? 📏",
    "options": {
      "A": "Listen before talking 👂",
      "B": "Talk as loud as possible 📢",
      "C": "Never stop talking 🗣️",
      "D": "Ignore other devices 🙈"
    },
    "answer": "A"
  },
  {
    "question": "How does MAC protocol help IoT devices save energy? 🔋",
    "options": {
      "A": "By making them work faster ⚡",
      "B": "By turning them off completely 🔴",
      "C": "By letting them sleep when not sending messages 💤",
      "D": "By using more battery power 🔋"
    },
    "answer": "C"
  },
  {
    "question": "What happens if IoT devices don't follow MAC protocol rules? ⚠️",
    "options": {
      "A": "Nothing changes 🔄",
      "B": "Messages might crash into each other 💥",
      "C": "The internet stops working 🚫",
      "D": "Devices work better 📈"
    },
    "answer": "B"
  },
  {
    "question": "Which is most important for MAC protocol in IoT? 🌟",
    "options": {
      "A": "Making devices more expensive 💰",
      "B": "Using more energy 🔋",
      "C": "Helping devices work together nicely 🤝",
      "D": "Making devices bigger 📦"
    },
    "answer": "C"
  },
  {
    "question": "How is MAC protocol like a traffic light? 🚦",
    "options": {
      "A": "It makes everything go faster ⚡",
      "B": "It helps control when devices can send messages 📡",
      "C": "It uses green and red lights 🟢🔴",
      "D": "It stops all messages 🚫"
    },
    "answer": "B"
  },
  {
    "question": "What makes a MAC protocol good for IoT devices? 🌟",
    "options": {
      "A": "It uses lots of power 🔋",
      "B": "It's very complicated 🧩",
      "C": "It's simple and saves energy 💚",
      "D": "It only works with big devices 📦"
    },
    "answer": "C"
  },
  {
    "question": "What is IoT? 🔤",
    "options": {
      "A": "A type of robot 🤖",
      "B": "Internet of Things-devices connected to the internet 🌐",
      "C": "A computer game 🎮",
      "D": "A type of telephone 📞"
    },
    "answer": "B"
  },
  {
    "question": "Which device below is NOT usually an IoT device? ❌",
    "options": {
      "A": "Smart doorbell 🔔",
      "B": "Smart light bulb 💡",
      "C": "Paper notebook 📓",
      "D": "Smart thermostat 🌡️"
    },
    "answer": "C"
  },
  {
    "question": "What do IoT devices need to work? ⚡",
    "options": {
      "A": "Paint and crayons 🎨",
      "B": "An internet connection 🌐",
      "C": "A television 📺",
      "D": "A radio 📻"
    },
    "answer": "B"
  },
  {
    "question": "What helps IoT devices talk to each other? 💬",
    "options": {
      "A": "A platform or system 🖥️",
      "B": "A microphone 🎤",
      "C": "A camera 📷",
      "D": "A speaker 🔊"
    },
    "answer": "A"
  },
  {
    "question": "Why do we use IoT devices? 🤔",
    "options": {
      "A": "To play video games only 🎮",
      "B": "To make life easier and save time ⏰",
      "C": "To watch movies 🎬",
      "D": "To read books 📖"
    },
    "answer": "B"
  },
  {
    "question": "Which is an example of an IoT device at home? 🏠",
    "options": {
      "A": "A regular light switch 🔘",
      "B": "A wooden chair 🪑",
      "C": "A smart refrigerator 🧊",
      "D": "A regular doorknob 🚪"
    },
    "answer": "C"
  },
  {
    "question": "What can IoT devices help us do? 🆘",
    "options": {
      "A": "Only play music 🎵",
      "B": "Only turn on lights 💡",
      "C": "Only open doors 🚪",
      "D": "Many different helpful tasks ✅"
    },
    "answer": "D"
  },
  {
    "question": "What is important for IoT devices to work safely? 🛡️",
    "options": {
      "A": "They need to be painted blue 💙",
      "B": "They need to be very big 📏",
      "C": "They need good security 🔐",
      "D": "They need to make noise 🔊"
    },
    "answer": "C"
  },
  {
    "question": "How do people control IoT devices? 🎮",
    "options": {
      "A": "By dancing 💃",
      "B": "Using apps on phones or tablets 📱",
      "C": "By singing 🎤",
      "D": "By jumping 🤸"
    },
    "answer": "B"
  },
  {
    "question": "What is a benefit of using IoT devices? 🌟",
    "options": {
      "A": "They make houses prettier 🏠",
      "B": "They only work outside 🌳",
      "C": "They need no electricity 🔌",
      "D": "They can save energy ⚡"
    },
    "answer": "D"
  },
  {
    "question": "What is IoT mainly about? 🎯",
    "options": {
      "A": "Playing video games 🎮",
      "B": "Connecting everyday objects to the internet 🌐",
      "C": "Writing stories ✍️",
      "D": "Making phone calls 📞"
    },
    "answer": "B"
  },
  {
    "question": "Which device below is NOT typically an IoT device? ❌",
    "options": {
      "A": "Smart thermostat 🌡️",
      "B": "Paper notebook 📓",
      "C": "Smart doorbell 🔔",
      "D": "Smart light bulb 💡"
    },
    "answer": "B"
  },
  {
    "question": "What is the main purpose of sensors in IoT devices? 📡",
    "options": {
      "A": "To make music 🎵",
      "B": "To collect information 📊",
      "C": "To play games 🎮",
      "D": "To draw pictures 🎨"
    },
    "answer": "B"
  },
  {
    "question": "Which is an example of how IoT helps at home? 🏠",
    "options": {
      "A": "Turning lights on/off with your voice 🗣️",
      "B": "Writing with a pencil ✏️",
      "C": "Reading a paper book 📖",
      "D": "Playing with toys 🧸"
    },
    "answer": "A"
  },
  {
    "question": "What does a smart home device need to work properly? ⚙️",
    "options": {
      "A": "Batteries only 🔋",
      "B": "Internet connection 🌐",
      "C": "Paint 🎨",
      "D": "Water 💧"
    },
    "answer": "B"
  },
  {
    "question": "How do IoT devices usually communicate with each other? 📡",
    "options": {
      "A": "Through mail ✉️",
      "B": "By making sounds 🔊",
      "C": "Through wireless networks 📶",
      "D": "Using string 🧵"
    },
    "answer": "C"
  },
  {
    "question": "Which is a benefit of using IoT devices? 🌟",
    "options": {
      "A": "They never need power 🔋",
      "B": "They make life easier by automating tasks 🤖",
      "C": "They work without internet 🌐",
      "D": "They only work during daytime ☀️"
    },
    "answer": "B"
  },
  {
    "question": "What is an important part of IoT security? 🔐",
    "options": {
      "A": "Using strong passwords 🔑",
      "B": "Leaving doors open 🚪",
      "C": "Sharing passwords with everyone 👥",
      "D": "Never changing passwords 🔄"
    },
    "answer": "A"
  },
  {
    "question": "Which is a common IoT device in many homes? 🏠",
    "options": {
      "A": "Wooden chair 🪑",
      "B": "Paper calendar 📅",
      "C": "Smart speaker 🔊",
      "D": "Regular pencil ✏️"
    },
    "answer": "C"
  },
  {
    "question": "How do people usually control their IoT devices? 🎮",
    "options": {
      "A": "By writing letters ✉️",
      "B": "Using smoke signals 💨",
      "C": "By yelling loudly 📢",
      "D": "Using smartphones or tablets 📱"
    },
    "answer": "D"
  },
  {
    "question": "What does M2M stand for in technology? 🔤",
    "options": {
      "A": "Machine-to-Mouse 🖱️",
      "B": "Machine-to-Machine 💻",
      "C": "Mouse-to-Machine 🖱️",
      "D": "Message-to-Message 💬"
    },
    "answer": "B"
  },
  {
    "question": "Which of these is an example of M2M communication? 🤖",
    "options": {
      "A": "A person sending a text message to another person 👨",
      "B": "A smart thermostat automatically adjusting the temperature 🌡️",
      "C": "Writing a letter to a friend ✉️",
      "D": "Talking on the phone 📞"
    },
    "answer": "B"
  },
  {
    "question": "Why is M2M communication important in our daily lives? 🌟",
    "options": {
      "A": "It helps machines work together without human help 🤖",
      "B": "It makes video games more fun 🎮",
      "C": "It helps people write faster ✍️",
      "D": "It makes computers bigger 📦"
    },
    "answer": "A"
  },
  {
    "question": "Which device below uses M2M communication? 📱",
    "options": {
      "A": "A regular pencil ✏️",
      "B": "A paper notebook 📓",
      "C": "A smart watch tracking your steps ⌚",
      "D": "A regular wristwatch ⌚"
    },
    "answer": "C"
  },
  {
    "question": "In a smart home, what might M2M communication control? 🏠",
    "options": {
      "A": "Paper books 📖",
      "B": "Wooden furniture 🪑",
      "C": "Smart lights 💡",
      "D": "Regular windows 🪟"
    },
    "answer": "C"
  },
  {
    "question": "How does M2M communication help in weather stations? 🌤️",
    "options": {
      "A": "It makes rain fall faster ☔",
      "B": "It helps collect and send weather data automatically 📊",
      "C": "It makes clouds move ☁️",
      "D": "It changes the temperature outside 🌡️"
    },
    "answer": "B"
  },
  {
    "question": "What is one benefit of M2M communication? 🌟",
    "options": {
      "A": "It makes computers heavier ⚖️",
      "B": "It uses more electricity ⚡",
      "C": "It needs more human workers 👨",
      "D": "It saves time and reduces errors ✅"
    },
    "answer": "D"
  },
  {
    "question": "Which of these is NOT an example of M2M communication? ❌",
    "options": {
      "A": "A vending machine reporting its inventory 🥤",
      "B": "A person writing with a pencil ✏️",
      "C": "A security camera sending alerts 📹",
      "D": "A smart meter reading electricity usage ⚡"
    },
    "answer": "B"
  },
  {
    "question": "What do machines need to communicate with each other? 🤖",
    "options": {
      "A": "Special sensors and internet connection 📡🌐",
      "B": "Paint and brushes 🎨",
      "C": "Paper and pencils 📄✏️",
      "D": "Books and magazines 📚"
    },
    "answer": "A"
  },
  {
    "question": "How does M2M communication help in schools? 🏫",
    "options": {
      "A": "It makes textbooks heavier 📚",
      "B": "It helps attendance systems work automatically ✅",
      "C": "It makes chairs more comfortable 🪑",
      "D": "It makes walls stronger 🧱"
    },
    "answer": "B"
  },
  {
    "question": "What helps devices talk to each other? 💬",
    "options": {
      "A": "Magic spells ✨",
      "B": "The internet 🌐",
      "C": "Paper airplanes ✈️",
      "D": "Loud noises 🔊"
    },
    "answer": "B"
  },
  {
    "question": "Which of these is a smart device? 🧠",
    "options": {
      "A": "A regular light bulb 💡",
      "B": "A wooden chair 🪑",
      "C": "A smart speaker 🔊",
      "D": "A regular pencil ✏️"
    },
    "answer": "C"
  },
  {
    "question": "What do we call it when two devices share information? 🔄",
    "options": {
      "A": "Connection 🔗",
      "B": "Dancing 💃",
      "C": "Walking 🚶",
      "D": "Jumping 🤸"
    },
    "answer": "A"
  },
  {
    "question": "Which device helps us connect to the internet at home? 🏠",
    "options": {
      "A": "Toaster 🍞",
      "B": "Router 📡",
      "C": "Lamp 💡",
      "D": "Clock ⏰"
    },
    "answer": "B"
  },
  {
    "question": "What do smart devices need to work? ⚡",
    "options": {
      "A": "Sunshine ☀️",
      "B": "Water 💧",
      "C": "Electricity ⚡",
      "D": "Paint 🎨"
    },
    "answer": "C"
  },
  {
    "question": "Which is an example of devices working together? 🤝",
    "options": {
      "A": "A book on a shelf 📖",
      "B": "A smart light turning on when you get home 💡",
      "C": "A pencil in a drawer ✏️",
      "D": "A plant in the garden 🌱"
    },
    "answer": "B"
  },
  {
    "question": "What helps keep our smart devices safe? 🛡️",
    "options": {
      "A": "A blanket 🛌",
      "B": "A password 🔐",
      "C": "A hat 🧢",
      "D": "A door 🚪"
    },
    "answer": "B"
  },
  {
    "question": "What do we call a group of connected devices? 🔗",
    "options": {
      "A": "A network 🌐",
      "B": "A family 👨‍👩‍👧",
      "C": "A team ⚽",
      "D": "A crowd 🧑‍🤝‍🧑"
    },
    "answer": "A"
  },
  {
    "question": "Which device can control other smart devices? 🎮",
    "options": {
      "A": "Regular watch ⌚",
      "B": "Paper notebook 📓",
      "C": "Smartphone 📱",
      "D": "Regular doorbell 🔔"
    },
    "answer": "C"
  },
  {
    "question": "What do smart devices use to understand our commands? 🗣️",
    "options": {
      "A": "Mind reading 🧠",
      "B": "Special software 💻",
      "C": "Guessing 🤔",
      "D": "Drawing pictures 🎨"
    },
    "answer": "B"
  },
  {
    "question": "What is a digital sensor used for? 📡",
    "options": {
      "A": "To play video games 🎮",
      "B": "To detect and measure changes in the environment 🌍",
      "C": "To make phone calls 📞",
      "D": "To watch movies 🎬"
    },
    "answer": "B"
  },
  {
    "question": "Which of these is an example of an actuator? ⚙️",
    "options": {
      "A": "A thermometer 🌡️",
      "B": "A camera 📷",
      "C": "An electric motor ⚡",
      "D": "A microphone 🎤"
    },
    "answer": "C"
  },
  {
    "question": "What does RFID stand for? 🔤",
    "options": {
      "A": "Really Fast Internet Device 🚀",
      "B": "Radio Frequency Information Display 📡",
      "C": "Radio Frequency Identification 🏷️",
      "D": "Really Fun Interactive Device 🎮"
    },
    "answer": "C"
  },
  {
    "question": "Where might you find RFID tags being used? 🏷️",
    "options": {
      "A": "In library books to track them 📚",
      "B": "In video games consoles 🎮",
      "C": "In pencil cases 📦",
      "D": "In paper notebooks 📓"
    },
    "answer": "A"
  },
  {
    "question": "Which statement about sensors is TRUE? ✅",
    "options": {
      "A": "Sensors only work during daytime ☀️",
      "B": "Sensors can only measure temperature 🌡️",
      "C": "Sensors can detect different types of changes 🔄",
      "D": "Sensors are only used in smartphones 📱"
    },
    "answer": "C"
  },
  {
    "question": "What is the main purpose of a wireless sensor network? 📡",
    "options": {
      "A": "To play video games 🎮",
      "B": "To collect and share information about the environment 🌍",
      "C": "To make phone calls 📞",
      "D": "To watch television shows 📺"
    },
    "answer": "B"
  },
  {
    "question": "Which of these could a wireless sensor help monitor in your school? 🏫",
    "options": {
      "A": "The temperature in different classrooms 🌡️",
      "B": "What students had for lunch 🍔",
      "C": "The color of students' shoes 👟",
      "D": "What games students play at recess 🎮"
    },
    "answer": "A"
  },
  {
    "question": "What is one thing that makes wireless sensors special? 🌟",
    "options": {
      "A": "They need lots of wires to work 🔌",
      "B": "They only work indoors 🏠",
      "C": "They can work without being plugged in 🔋",
      "D": "They must be used underwater 💧"
    },
    "answer": "C"
  },
  {
    "question": "In a wireless sensor network, how do the sensors share information? 📡",
    "options": {
      "A": "Through paper messages ✉️",
      "B": "By making loud noises 🔊",
      "C": "Through radio waves 📻",
      "D": "By flashing lights 💡"
    },
    "answer": "C"
  },
  {
    "question": "Which of these is an example of where wireless sensors might be used? 📡",
    "options": {
      "A": "In a toy store to count toys 🧸",
      "B": "In a forest to detect fires 🔥",
      "C": "In a library to read books 📚",
      "D": "In a kitchen to cook food 🍳"
    },
    "answer": "B"
  }
]
  },
  {
    subject: "E-Commerce",
    emoji: "🌐",
    color: "#0ea5e9",
    questions: [
  {
    "question": "Which form of c-commerce currently accounts for about 97% of all e-Commerce revenues? 💰🌐",
    "options": {
      "A": "B2B 🏢➡️🏢",
      "B": "B2C 🏢➡️👤",
      "C": "C2B 👤➡️🏢",
      "D": "C2C 👤➡️👤"
    },
    "answer": "A"
  },
  {
    "question": "Which of the following are advantages normally associated with B2B e-Commerce? 📈🤝",
    "options": {
      "A": "Shorter cycle times ⏱️",
      "B": "Reduction in costs 💵",
      "C": "Reaches wider audiences 🌍",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "If the threat of substitute products or services is low it is an: 🔄📉",
    "options": {
      "A": "Disadvantage to the supplier ⚠️",
      "B": "Advantage to the buyer 🛒",
      "C": "Advantage to the supplier 👍",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "The threat of new entrants is high when it is: 🚪📈",
    "options": {
      "A": "Hard for customers to enter the market 🚫",
      "B": "Hard for competitors to enter the market 🚫",
      "C": "Easy for competitors to enter the market 🟢",
      "D": "Easy for customers to enter the market 🛍️"
    },
    "answer": "C"
  },
  {
    "question": "If it is easy for competitors to enter the market, the threat of new entrants is considered: 🚪⬆️",
    "options": {
      "A": "High 🔴",
      "B": "Low 🟢",
      "C": "More 📈",
      "D": "Less 📉"
    },
    "answer": "A"
  },
  {
    "question": "An industry is less attractive for suppliers when the rivalry among existing competitors is: ⚔️🏭",
    "options": {
      "A": "High 🔴",
      "B": "Low 🟢",
      "C": "More 📈",
      "D": "Less 📉"
    },
    "answer": "A"
  },
  {
    "question": "Unique value auction is mainly applies to: 🔨💰",
    "options": {
      "A": "New products 🆕",
      "B": "Second hand products ♻️",
      "C": "Engineering products ⚙️",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "Paisapay is facilitated in: 💸🇮🇳",
    "options": {
      "A": "eBay.co.in 🛒",
      "B": "amazon.com 📦",
      "C": "flipkart.com 🛍️",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "Which of the following is a useful security mechanism when considering business strategy and IT? 🔐💼",
    "options": {
      "A": "encryption 🔑",
      "B": "decryption 🔓",
      "C": "firewall 🛡️",
      "D": "All the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "Which of the following is not related to security mechanism? 🚫🔐",
    "options": {
      "A": "encryption 🔑",
      "B": "decryption 🔓",
      "C": "e-cash 💵",
      "D": "All the above 🌟"
    },
    "answer": "C"
  },
  {
    "question": "The best products to sell in B2C e-commerce are: 🛍️🏢👤",
    "options": {
      "A": "small products 📦",
      "B": "digital products 💾",
      "C": "speciality products ✨",
      "D": "fresh product 🥬"
    },
    "answer": "B"
  },
  {
    "question": "Which of the following statements accurately reflect the impact of technology? 📡⚡",
    "options": {
      "A": "Technology has caused buyer power to increase 📈",
      "B": "Technology has lessened the entry barriers for many industries 🚪",
      "C": "Technology has increased the threat of substitute products and services 🔄",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "A business cannot be all things to all people. Instead, a business must: 🎯🏢",
    "options": {
      "A": "Identify target customers 👥",
      "B": "Identify the value of products/services as perceived by customers 💎",
      "C": "All of the above 🌟",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "How do the transactions occur in e-Commerce? 💻🔄",
    "options": {
      "A": "Using e-medias 📱💻",
      "B": "Using computers only 🖥️",
      "C": "Using mobile phones only 📱",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "Which type of products is lesser purchased using e-Commerce? 🛒❌",
    "options": {
      "A": "Automobiles 🚗",
      "B": "Books 📚",
      "C": "Softwares 💾",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "A business competing in a commodity like environment must focus on which of the following? 📦⚡",
    "options": {
      "A": "Price 💵",
      "B": "Ease / speed of delivery 🚚",
      "C": "Ease of ordering 🖱️",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "Which of the following refers to creating products tailored to individual customers? ✂️👤",
    "options": {
      "A": "Customization 🎨",
      "B": "Aggregation 📊",
      "C": "Direct materials 🧱",
      "D": "Reverse auction 🔻"
    },
    "answer": "A"
  },
  {
    "question": "Materials used in the normal operation of a business but not related to primary business operations are called what? 🏢📦",
    "options": {
      "A": "Supplies 📎",
      "B": "Direct materials 🧱",
      "C": "Indirect materials 🔧",
      "D": "Daily stuff 🗂️"
    },
    "answer": "C"
  },
  {
    "question": "Amazon.com is well-known for which e-commerce marketing technique? 📦📢",
    "options": {
      "A": "Banner ads 🖼️",
      "B": "Pop-up ads 🪟",
      "C": "Affiliate programs 🤝",
      "D": "Viral marketing 🦠"
    },
    "answer": "C"
  },
  {
    "question": "What is the name given to an interactive business providing a centralized market where many buyers and suppliers can come together for e-commerce or commerce-related activities? 🏪🌐",
    "options": {
      "A": "Direct marketplace 🛒",
      "B": "B2B 🏢➡️🏢",
      "C": "B2C 🏢➡️👤",
      "D": "Electronic marketplace 💻🏪"
    },
    "answer": "D"
  },
  {
    "question": "Which form of e-marketplace brings together buyers and sellers from multiple industries, often for MRO materials? 🔧🏭",
    "options": {
      "A": "Horizontal ↔️",
      "B": "Vertical ↕️",
      "C": "Integrated 🔗",
      "D": "Inclined 📐"
    },
    "answer": "A"
  },
  {
    "question": "Which form of e-marketplace brings together buyers and sellers from the same industry? 🏭↕️",
    "options": {
      "A": "Horizontal ↔️",
      "B": "Vertical ↕️",
      "C": "Integrated 🔗",
      "D": "Inclined 📐"
    },
    "answer": "B"
  },
  {
    "question": "Which type of ad appears on a web page? 🖥️📢",
    "options": {
      "A": "pop-under ad ⬇️",
      "B": "Pop-up ad ⬆️",
      "C": "Banner ad 📏",
      "D": "Discount ad 💸"
    },
    "answer": "C"
  },
  {
    "question": "What type of ad appears on top of a web page? ⬆️🖥️",
    "options": {
      "A": "Pop-under ad ⬇️",
      "B": "pop-up ad 🪟",
      "C": "banner ad 📏",
      "D": "discount ad 💸"
    },
    "answer": "B"
  },
  {
    "question": "What type of ad appears under a web page? ⬇️🖥️",
    "options": {
      "A": "pop-under ad 📉",
      "B": "pop-up ad 📈",
      "C": "banner ad 📏",
      "D": "discount ad 💸"
    },
    "answer": "A"
  },
  {
    "question": "Which, if any, of the following types of ads are people most willing to tolerate? 😊📢",
    "options": {
      "A": "pop-under ad ⬇️",
      "B": "pop-up ad ⬆️",
      "C": "banner ad 📏",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "Which of the following is an Internet-based company that makes it easy for one person to pay another over the Internet? 🌐💸",
    "options": {
      "A": "electronic check 💳",
      "B": "electronic bill presentment and payment 📄",
      "C": "conversion rates 💱",
      "D": "financial cyber mediary 🏦"
    },
    "answer": "D"
  },
  {
    "question": "Which of the following is a method of transferring money from one person's account to another? 💸🔄",
    "options": {
      "A": "electronic check 💳",
      "B": "credit card 💳",
      "C": "e-transfer ⚡",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "An electronic check is one form of what? 💳📄",
    "options": {
      "A": "e-commerce 🛒",
      "B": "online banking 🏦",
      "C": "e-cash 💵",
      "D": "check 💬"
    },
    "answer": "C"
  },
  {
    "question": "If you need to transfer money to another person via the internet, which of the following methods could you use? 🌐💸",
    "options": {
      "A": "Financial cyber mediary 🏦",
      "B": "Electronic check 💳",
      "C": "Electronic bill presentment and payment 📄",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "Which of the following permits the transmission of a bill, along with payment of that bill, to be conducted over the Internet? 📄💻",
    "options": {
      "A": "Financial cyber mediary 🏦",
      "B": "Electronic check 💳",
      "C": "Electronic bill presentment and payment 📑",
      "D": "All of the above 🌟"
    },
    "answer": "C"
  },
  {
    "question": "A combination of software and information designed to provide security and information for payment is called a what? 💳🔐",
    "options": {
      "A": "digital wallet 👛",
      "B": "pop up ad 🪟",
      "C": "shopping cart 🛒",
      "D": "encryption 🔑"
    },
    "answer": "A"
  },
  {
    "question": "What is the name for direct computer-to-computer transfer of transaction information contained in standard business documents? 💻📄",
    "options": {
      "A": "internet commerce 🌐",
      "B": "e-commerce 🛒",
      "C": "transaction information transfer 🔄",
      "D": "electronic data interchange 📡"
    },
    "answer": "D"
  },
  {
    "question": "Which of the following is used in B2B to pay for purchases? 🏢➡️🏢💸",
    "options": {
      "A": "e-commerce 🛒",
      "B": "financial electronic data interchange 💰📡",
      "C": "electronic data exchange 🔄",
      "D": "electronic checks 💳"
    },
    "answer": "B"
  },
  {
    "question": "Public key encryption uses multiple keys. One key is used to encrypt data, while another is used to decrypt data. The key used to encrypt data is called the ___ key, while the key used to decrypt data is called the ___ key. 🔑🔐",
    "options": {
      "A": "encryption, decryption 🔒🔓",
      "B": "private, public 🙈🙉",
      "C": "encryption, public 🔒🙉",
      "D": "public, private 🙉🙈"
    },
    "answer": "D"
  },
  {
    "question": "Secure Sockets Layers does which of the following? 🔒🌐",
    "options": {
      "A": "creates a secure, private connection to a web server 🔐",
      "B": "encrypts information 🔑",
      "C": "sends information over the internet 📡",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "When a transaction is processed online, how can the merchant verify the customer's identity? 🛒🆔",
    "options": {
      "A": "Use secure sockets layers 🔒",
      "B": "Use secure electronic transactions 💳🔐",
      "C": "Use electronic data interchange 📡",
      "D": "Use financial electronic data interchange 💰📡"
    },
    "answer": "B"
  },
  {
    "question": "The practice of forging a return address on an e-mail so that the recipient is fooled into revealing private information is termed as: ✉️🎭",
    "options": {
      "A": "hacking 👨‍💻",
      "B": "cracking 💥",
      "C": "dumpster diving 🗑️",
      "D": "spoofing 🎣"
    },
    "answer": "D"
  },
  {
    "question": "What is a model of a proposed product, service, or system? 🧩🆕",
    "options": {
      "A": "Prototyping 🔨",
      "B": "Prototype 🧪",
      "C": "Proof-of-concept prototype 🧪",
      "D": "Selling prototype 💰"
    },
    "answer": "B"
  },
  {
    "question": "What is an internal organizational Internet that is guarded against outside access by a special security feature called a firewall? 🏢🔒",
    "options": {
      "A": "Client/server network 🖥️",
      "B": "Intranet 🌐🔒",
      "C": "Extranet 🌐🤝",
      "D": "Thin client 💻"
    },
    "answer": "B"
  },
  {
    "question": "What is an intranet that is restricted to an organization and certain outsiders, such as customers and suppliers? 🌐🤝",
    "options": {
      "A": "Client/server network 🖥️",
      "B": "Intranet 🔒",
      "C": "Extranet 🔓🤝",
      "D": "Thin client 💻"
    },
    "answer": "C"
  },
  {
    "question": "What is a detailed process for recovering information or an IT system in the event of a catastrophic disaster such as a fire or flood? 🔥🌊💻",
    "options": {
      "A": "Disaster recovery plan 📋",
      "B": "Hot site 🔥🏢",
      "C": "Cold site ❄️🏢",
      "D": "Disaster recovery cost curve 📈"
    },
    "answer": "A"
  },
  {
    "question": "What is a separate facility that does not have any computer equipment but is a place where the knowledge workers can move after the disaster? 🏢❄️",
    "options": {
      "A": "Disaster recovery plan 📋",
      "B": "Hot site 🔥",
      "C": "Cold site ❄️",
      "D": "Disaster recovery cost curve 📈"
    },
    "answer": "C"
  },
  {
    "question": "What is a separate and fully equipped facility where the company can move immediately after the disaster and resume business? 🏢🔥",
    "options": {
      "A": "Disaster recovery plan 📋",
      "B": "Hot site 🔥",
      "C": "Cold site ❄️",
      "D": "Disaster recovery cost curve 📈"
    },
    "answer": "B"
  },
  {
    "question": "What charts (1) the cost to your organization of the unavailability of information and technology and (2) the cost to your organization of recovering from a disaster over time? 📉📊",
    "options": {
      "A": "Disaster recovery plan 📋",
      "B": "Hot site 🔥",
      "C": "Cold site ❄️",
      "D": "Disaster recovery cost curve 📈"
    },
    "answer": "D"
  },
  {
    "question": "Which factor determines when your IT system will be available for knowledge workers to access? ⏰💻",
    "options": {
      "A": "Availability 🛡️",
      "B": "Accessibility 🚪",
      "C": "Reliability 🔒",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "Which factor determines who has the right to access different types of IT systems and information? 🚪🔑",
    "options": {
      "A": "Availability ⏰",
      "B": "Accessibility 🚪",
      "C": "Reliability 🔒",
      "D": "Scalability 📈"
    },
    "answer": "B"
  },
  {
    "question": "Which factor ensures your IT systems are functioning correctly and providing accurate information? ✅💻",
    "options": {
      "A": "Availability ⏰",
      "B": "Accessibility 🚪",
      "C": "Reliability 🔒",
      "D": "Scalability 📈"
    },
    "answer": "C"
  },
  {
    "question": "Which factor represents how well your system can adapt to increased demands? 📈⚙️",
    "options": {
      "A": "Availability ⏰",
      "B": "Accessibility 🚪",
      "C": "Reliability 🔒",
      "D": "Scalability 📏"
    },
    "answer": "D"
  },
  {
    "question": "Which factor represents a system's ability to change quickly? ⚡🔄",
    "options": {
      "A": "Flexibility 🤸",
      "B": "Performance 🏎️",
      "C": "Capacity planning 📊",
      "D": "Benchmark 🎯"
    },
    "answer": "A"
  },
  {
    "question": "What is a set of conditions used to measure how well a product or system functions? 📏⚙️",
    "options": {
      "A": "Flexibility 🤸",
      "B": "Performance 🏎️",
      "C": "Capacity planning 📊",
      "D": "Benchmark 🎯"
    },
    "answer": "D"
  },
  {
    "question": "What determines the future IT infrastructure requirements for new equipment and additional network capacity? 🖥️📈",
    "options": {
      "A": "Flexibility 🤸",
      "B": "Performance 🏎️",
      "C": "Capacity planning 📊",
      "D": "Benchmark 🎯"
    },
    "answer": "C"
  },
  {
    "question": "What automates business processes? 🤖📋",
    "options": {
      "A": "Workflow 🔄",
      "B": "ASP 🌐",
      "C": "Workflow system ⚙️",
      "D": "EIP 🚪"
    },
    "answer": "C"
  },
  {
    "question": "What defines all of the steps or business rules, from beginning to end, required for a process to run correctly? 📜🔄",
    "options": {
      "A": "Workflow 📋",
      "B": "EIP 🚪",
      "C": "Workflow system ⚙️",
      "D": "SLA 📝"
    },
    "answer": "A"
  },
  {
    "question": "What sends work assignments through an e-mail system? ✉️📋",
    "options": {
      "A": "Database-based enterprise information portal 🗄️",
      "B": "Messaging-based enterprise information portal 💬",
      "C": "Database based work flow system 🗄️",
      "D": "Messaging-based workflow system 💬"
    },
    "answer": "D"
  },
  {
    "question": "Which will not harm computer resources? 🛡️💻",
    "options": {
      "A": "Firewall 🔥",
      "B": "Virus 🦠",
      "C": "Trojan horse 🐴",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "EDI is the electronic interchange of business information using 📡💼",
    "options": {
      "A": "Internet 🌐",
      "B": "Middleman 🧑‍💼",
      "C": "Standardized Format 📏",
      "D": "Secured Server 🔒"
    },
    "answer": "C"
  },
  {
    "question": "Which is a function of ERP? 🏢⚙️",
    "options": {
      "A": "Warehousing 📦",
      "B": "Sales 💰",
      "C": "Scheduling 📅",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "Which of the following is the primary characteristic of an intranet? 🌐🔒",
    "options": {
      "A": "People outside the organization can access it 🚪",
      "B": "People inside the organization can't access it 🚫",
      "C": "People outside the organization can't access it 🔒",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "Which concept suggests that different applications and computer systems should be able to communicate with one another? 💻🔄💻",
    "options": {
      "A": "Integration 🔗",
      "B": "Web services 🌐",
      "C": "Scalability 📏",
      "D": "Interoperability 🤝"
    },
    "answer": "D"
  },
  {
    "question": "Business entities conducting business electronically are called: 💼💻",
    "options": {
      "A": "trading partners 🤝",
      "B": "electronic partners ⚡",
      "C": "business partners 🏢",
      "D": "customers 👤"
    },
    "answer": "A"
  },
  {
    "question": "Which process can prevent data from loss due to computer problems or human errors? 💾🛡️",
    "options": {
      "A": "backup 💿",
      "B": "recovery 🔄",
      "C": "benchmarking 📊",
      "D": "data cleansing 🧹"
    },
    "answer": "A"
  },
  {
    "question": "Which process is used to reinstall data from a copy when the original data has been lost? 🔄💾",
    "options": {
      "A": "backup 💿",
      "B": "recovery 🔧",
      "C": "benchmarking 📊",
      "D": "data cleansing 🧹"
    },
    "answer": "B"
  },
  {
    "question": "What describes a process of continuously measuring results and comparing those results to optimal performance so that actual performance may be improved? 📈📊",
    "options": {
      "A": "Performance 🏎️",
      "B": "Capacity planning 📊",
      "C": "Benchmarking 🎯",
      "D": "Data cleansing 🧹"
    },
    "answer": "C"
  },
  {
    "question": "Who protects system from external threats? 🛡️🌍",
    "options": {
      "A": "Firewall 🔥",
      "B": "EDI 📡",
      "C": "ERP 🏢",
      "D": "Script kiddies 👨‍💻"
    },
    "answer": "A"
  },
  {
    "question": "Who breaks into other people's computer systems and steals and destroys information? 👨‍💻💀",
    "options": {
      "A": "Hackers 🖥️",
      "B": "Softwares 💾",
      "C": "Hacktivists ✊",
      "D": "Script kiddies 🧒"
    },
    "answer": "A"
  },
  {
    "question": "What is software that comes hidden in free downloadable software and tracks your online movements, mines the information stored on your computer, or uses your computer's CPU and storage for some task you know nothing about? 🕵️‍♂️💻",
    "options": {
      "A": "Web log 📝",
      "B": "Click stream 🖱️",
      "C": "Anonymous Web browsing service 🙈",
      "D": "None of the above ❌"
    },
    "answer": "D"
  },
  {
    "question": "ERP stands for: 🏢⚙️",
    "options": {
      "A": "Enterprise resolution planning 📋",
      "B": "Enterprise reverse planning 🔄",
      "C": "Enterprise resource planning 📊",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "The term FTP stands for? 📁🌐",
    "options": {
      "A": "File transfer program 💾",
      "B": "File transmission protocol 📡",
      "C": "File transfer protocol 📁",
      "D": "File transfer protection 🛡️"
    },
    "answer": "C"
  },
  {
    "question": "Which is not a function of ERP? 🏢❌",
    "options": {
      "A": "Human resource management 👥",
      "B": "Financial 💰",
      "C": "Warehousing 📦",
      "D": "None of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "What is a type of virus that spreads itself, not just from file to file, but from computer to computer via e-mail and other Internet traffic? 🦠📧",
    "options": {
      "A": "Computer virus 🖥️",
      "B": "Worm 🐛",
      "C": "Denial-of-service attack 🚫",
      "D": "None of the above ❌"
    },
    "answer": "B"
  },
  {
    "question": "Which one of the following is the most common internet protocol? 🌐📡",
    "options": {
      "A": "HTML 📄",
      "B": "NetBEUI 🔌",
      "C": "TCP/IP 🔗",
      "D": "IPX/SPX 🔄"
    },
    "answer": "C"
  },
  {
    "question": "Collection of hyperlinked documents on the internet forms the? 🔗📄",
    "options": {
      "A": "World Wide Web (WWW) 🌐",
      "B": "E-mail system 📧",
      "C": "Mailing list 📋",
      "D": "Hypertext markup language 📝"
    },
    "answer": "A"
  },
  {
    "question": "What consists of the identification of risks or threats, the implementation of security measures, and the monitoring of those measures for effectiveness? ⚠️🔐",
    "options": {
      "A": "Risk management 📊",
      "B": "Risk assessment 🔍",
      "C": "Security 🛡️",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "Factor that affects ethical and unethical behaviour: ⚖️😇😈",
    "options": {
      "A": "Ethical dilemma 🤔",
      "B": "Diversity 🌍",
      "C": "Teamwork 🤝",
      "D": "Open communication 🗣️"
    },
    "answer": "A"
  },
  {
    "question": "What is the process of making a copy of the information stored on a computer? 💾📋",
    "options": {
      "A": "Backup 💿",
      "B": "Anti-virus 🦠",
      "C": "Firewall 🔥",
      "D": "Biometrics 🖐️"
    },
    "answer": "A"
  },
  {
    "question": "What is e-Commerce? 🛒💻",
    "options": {
      "A": "Doing business electronically 💼",
      "B": "Doing business 🏢",
      "C": "Sale of goods 📦",
      "D": "All of the above 🌟"
    },
    "answer": "A"
  },
  {
    "question": "Who is part of the four main types for e-Commerce? 🛒📊",
    "options": {
      "A": "B2B 🏢➡️🏢",
      "B": "B2C 🏢➡️👤",
      "C": "C2B 👤➡️🏢",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "Which of the following is not type of patent? 📜❌",
    "options": {
      "A": "Utility patents 🔧",
      "B": "Copyright ©️",
      "C": "Design patents 🎨",
      "D": "Plant patents 🌱"
    },
    "answer": "B"
  },
  {
    "question": "Which type of e-commerce focuses on consumers dealing with each other? 👤➡️👤",
    "options": {
      "A": "B2B 🏢➡️🏢",
      "B": "B2C 🏢➡️👤",
      "C": "C2B 👤➡️🏢",
      "D": "C2C 👤➡️👤"
    },
    "answer": "D"
  },
  {
    "question": "Which of the following is rights of a copyright owner? ©️📜",
    "options": {
      "A": "Publish their work and perform their work in public 📢",
      "B": "Translate and broadcast their work 🌍",
      "C": "Prevent others from making unauthorized use of copyrighted work 🚫",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "Which type deals with auction? 🔨💰",
    "options": {
      "A": "B2B 🏢➡️🏢",
      "B": "B2C 🏢➡️👤",
      "C": "C2B 👤➡️🏢",
      "D": "C2C 👤➡️👤"
    },
    "answer": "D"
  },
  {
    "question": "Organizations suppliers value chain are known as: 🔗🏭",
    "options": {
      "A": "upstream value chain ⬆️",
      "B": "downstream value chain ⬇️",
      "C": "value chain 🔗",
      "D": "None of these ❌"
    },
    "answer": "A"
  },
  {
    "question": "The best products to sell in B2C e-Commerce are: 🛍️🏢👤",
    "options": {
      "A": "Small products 📦",
      "B": "Digital products 💾",
      "C": "Speciality products ✨",
      "D": "Fresh products 🥬"
    },
    "answer": "B"
  },
  {
    "question": "Which products are people most likely to be more uncomfortable buying on the Internet? 😟🛒",
    "options": {
      "A": "Books 📚",
      "B": "Furniture 🛋️",
      "C": "Movies 🎬",
      "D": "All of the above 🌟"
    },
    "answer": "B"
  },
  {
    "question": "Which products are people most likely to be comfortable buying on the Internet? 😊🛒",
    "options": {
      "A": "Books 📚",
      "B": "PCs 💻",
      "C": "CDs 💿",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "Digital products are best suited for B2C e-Commerce because they: 💾🏢👤",
    "options": {
      "A": "Are commodity like products 📦",
      "B": "Can be mass-customized and personalized 🎨",
      "C": "Can be delivered at the time of purchase ⏱️",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "The solution for all business needs is: 🏢✅",
    "options": {
      "A": "EDI 📡",
      "B": "ERP 📊",
      "C": "SCM 🔗",
      "D": "None of the above ❌"
    },
    "answer": "B"
  },
  {
    "question": "All of the following are techniques B2C e-commerce companies use to attract customers, except: 📢❌",
    "options": {
      "A": "Registering with search engines 🔍",
      "B": "Viral marketing 🦠",
      "C": "Online ads 🖥️",
      "D": "Virtual marketing 🌐"
    },
    "answer": "D"
  },
  {
    "question": "Which is a function of E-commerce? 🛒⚙️",
    "options": {
      "A": "Marketing 📢",
      "B": "Advertising 📺",
      "C": "Warehousing 📦",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "Which is not a function of E-commerce? 🛒❌",
    "options": {
      "A": "Marketing 📢",
      "B": "Advertising 📺",
      "C": "Warehousing 📦",
      "D": "None of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "Which term represents account of the number of people who visit one site, click on an ad, and are taken to the site of the advertiser? 🖱️📊",
    "options": {
      "A": "Affiliate programs 🤝",
      "B": "Click-through 🔗",
      "C": "Spam 📧",
      "D": "All of the above 🌟"
    },
    "answer": "B"
  },
  {
    "question": "What is the percentage of customers who visit a Website and actually buy something called? 🛒📊",
    "options": {
      "A": "Affiliate programs 🤝",
      "B": "Click-through 🔗",
      "C": "Spam 📧",
      "D": "Conversion rate 📈"
    },
    "answer": "D"
  },
  {
    "question": "What are materials used in production in a manufacturing company or replaced on the shelf for sale in a retail environment? 🏭📦",
    "options": {
      "A": "Direct materials 🧱",
      "B": "Indirect materials 🔧",
      "C": "EDI 📡",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "What are materials that are necessary for running a modern corporation, but do not relate to the company's primary business activities? 🏢🔧",
    "options": {
      "A": "Direct materials 🧱",
      "B": "Indirect materials 🔧",
      "C": "EDI 📡",
      "D": "None of the above ❌"
    },
    "answer": "B"
  },
  {
    "question": "Which of the following is an example of e-commerce? 🛒💻",
    "options": {
      "A": "Buying groceries at a supermarket 🛒",
      "B": "Ordering food at a restaurant 🍽️",
      "C": "Booking a hotel room online 🏨💻",
      "D": "Visiting a physical store to buy clothes 👕"
    },
    "answer": "C"
  },
  {
    "question": "What is EDI name? 📡",
    "options": {
      "A": "Electronic Direct Interchange 🔄",
      "B": "Indirect materials 🔧",
      "C": "Electronic Data Interchange 📡",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "What is the process in which a buyer posts its interest in buying a certain quantity of items, and sellers compete for the business by submitting successively lower bids until there is only one seller left? 🔻💰",
    "options": {
      "A": "B2B marketplace 🏢➡️🏢",
      "B": "Intranet 🌐🔒",
      "C": "Reverse auction 🔻",
      "D": "Internet 🌐"
    },
    "answer": "C"
  },
  {
    "question": "What is B2B e-Commerce? 🏢➡️🏢",
    "options": {
      "A": "Business-to-business e-commerce 🏢➡️🏢",
      "B": "Business-to-consumer e-commerce 🏢➡️👤",
      "C": "Consumer-to-consumer e-commerce 👤➡️👤",
      "D": "Government-to-consumer e-commerce 🏛️➡️👤"
    },
    "answer": "A"
  },
  {
    "question": "Most individuals are familiar with which form of e-Commerce? 👤🛒",
    "options": {
      "A": "B2B 🏢➡️🏢",
      "B": "B2C 🏢➡️👤",
      "C": "C2B 👤➡️🏢",
      "D": "C2C 👤➡️👤"
    },
    "answer": "B"
  },
  {
    "question": "ERP stands for: 🏢⚙️",
    "options": {
      "A": "Enterprise resolution planning 📋",
      "B": "Enterprise reverse planning 🔄",
      "C": "Enterprise resource planning 📊",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "The term FTP stands for: 📁🌐",
    "options": {
      "A": "File transfer program 💾",
      "B": "File transmission protocol 📡",
      "C": "File transfer protocol 📁",
      "D": "File transfer protection 🛡️"
    },
    "answer": "C"
  },
  {
    "question": "Which is not a function of ERP? 🏢❌",
    "options": {
      "A": "Human resource management 👥",
      "B": "Financial 💰",
      "C": "Warehousing 📦",
      "D": "None of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "What is a type of virus that spreads itself, not just from file to file, but from computer to computer via e-mail and other internet traffic? 🦠📧",
    "options": {
      "A": "Computer virus 🖥️",
      "B": "Worm 🐛",
      "C": "Denial-of-service attack 🚫",
      "D": "None of the above ❌"
    },
    "answer": "B"
  },
  {
    "question": "Which one of the following is the most common internet protocol? 🌐📡",
    "options": {
      "A": "HTML 📄",
      "B": "NetBEUI 🔌",
      "C": "TCP/IP 🔗",
      "D": "IPX/SPX 🔄"
    },
    "answer": "C"
  },
  {
    "question": "Collection of hyperlinked documents on the internet forms the: 🔗📄",
    "options": {
      "A": "World Wide Web (WWW) 🌐",
      "B": "E-mail system 📧",
      "C": "Mailing list 📋",
      "D": "Hypertext markup language 📝"
    },
    "answer": "A"
  },
  {
    "question": "What consists of the identification of risks or threats, the implementation of security measures and the monitoring of those measures for effectiveness? ⚠️🔐",
    "options": {
      "A": "Risk management 📊",
      "B": "Risk assessment 🔍",
      "C": "Security 🛡️",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "Factor that affects ethical and unethical behaviour is: ⚖️😇😈",
    "options": {
      "A": "Ethical dilemma 🤔",
      "B": "Diversity 🌍",
      "C": "Teamwork 🤝",
      "D": "Open communication 🗣️"
    },
    "answer": "A"
  },
  {
    "question": "What is the process of making a copy of the information stored on a computer? 💾📋",
    "options": {
      "A": "Backup 💿",
      "B": "Antivirus 🦠",
      "C": "Firewall 🔥",
      "D": "Biometrics 🖐️"
    },
    "answer": "A"
  },
  {
    "question": "A business cannot be all things to all people. Instead, a business must: 🎯🏢",
    "options": {
      "A": "Identify target customers 👥",
      "B": "Identify the value of products/services as perceived by customers 💎",
      "C": "All of the above 🌟",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "How the transactions occur in e-commerce? 💻🔄",
    "options": {
      "A": "Using e-medias 📱💻",
      "B": "Using computers only 🖥️",
      "C": "Using mobile phones only 📱",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "Which type of products is lesser purchased using e-commerce? 🛒❌",
    "options": {
      "A": "Automobiles 🚗",
      "B": "Books 📚",
      "C": "Softwares 💾",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "A business competing in a commodity like environment must focus on which of the following? 📦⚡",
    "options": {
      "A": "Price 💵",
      "B": "Ease / speed of delivery 🚚",
      "C": "Ease of ordering 🖱️",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "Which of the following refers to creating products tailored to individual customers? ✂️👤",
    "options": {
      "A": "Customization 🎨",
      "B": "Aggregation 📊",
      "C": "Direct materials 🧱",
      "D": "Reverse auction 🔻"
    },
    "answer": "A"
  },
  {
    "question": "Materials used in the normal operation of a business but not related to primary business operations are called what? 🏢📦",
    "options": {
      "A": "Supplies 📎",
      "B": "Direct materials 🧱",
      "C": "Indirect materials 🔧",
      "D": "Daily stuff 🗂️"
    },
    "answer": "C"
  },
  {
    "question": "Amazon.com is well-known for which e-commerce marketing technique? 📦📢",
    "options": {
      "A": "Banner ads 🖼️",
      "B": "Pop-up ads 🪟",
      "C": "Affiliate programs 🤝",
      "D": "Viral marketing 🦠"
    },
    "answer": "C"
  },
  {
    "question": "What is the name given to an interactive business providing a centralized market where many buyers and suppliers can come together for e-commerce or commerce-related activities? 🏪🌐",
    "options": {
      "A": "Direct marketplace 🛒",
      "B": "B2B 🏢➡️🏢",
      "C": "B2C 🏢➡️👤",
      "D": "Electronic marketplace 💻🏪"
    },
    "answer": "D"
  },
  {
    "question": "An electronic check is one form of what? 💳📄",
    "options": {
      "A": "E-commerce 🛒",
      "B": "Online banking 🏦",
      "C": "E-cash 💵",
      "D": "Check 💬"
    },
    "answer": "C"
  },
  {
    "question": "If you need to transfer money to another person via the internet, which of the following methods could you use? 🌐💸",
    "options": {
      "A": "Financial cybermediary 🏦",
      "B": "Electronic check 💳",
      "C": "Electronic bill presentment and payment 📄",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "Which of the following permits the transmission of a bill, along with payment of that bill, to be conducted over the Internet? 📄💻",
    "options": {
      "A": "Financial cybermediary 🏦",
      "B": "Electronic check 💳",
      "C": "Electronic bill presentment and payment 📑",
      "D": "All of the above 🌟"
    },
    "answer": "C"
  },
  {
    "question": "A combination of software and information designed to provide security and information for payment is called a what? 💳🔐",
    "options": {
      "A": "Digital wallet 👛",
      "B": "Pop-up ad 🪟",
      "C": "Shopping cart 🛒",
      "D": "Encryption 🔑"
    },
    "answer": "A"
  },
  {
    "question": "What is the name for direct computer-to-computer transfer of transaction information contained in standard business documents? 💻📄",
    "options": {
      "A": "Internet commerce 🌐",
      "B": "E-commerce 🛒",
      "C": "Transaction information transfer 🔄",
      "D": "Electronic data interchange 📡"
    },
    "answer": "D"
  },
  {
    "question": "Which of the following is used in B2B to pay for purchases? 🏢➡️🏢💸",
    "options": {
      "A": "E-commerce 🛒",
      "B": "Financial electronic data interchange 💰📡",
      "C": "Electronic data exchange 🔄",
      "D": "Electronic checks 💳"
    },
    "answer": "B"
  },
  {
    "question": "Public key encryption uses multiple keys. One key is used to encrypt data, while another is used to decrypt data. The key used to encrypt data is called the ________ key, while the key used to decrypt data is called the ________ key. 🔑🔐",
    "options": {
      "A": "encryption, decryption 🔒🔓",
      "B": "private, public 🙈🙉",
      "C": "encryption, public 🔒🙉",
      "D": "public, private 🙉🙈"
    },
    "answer": "D"
  },
  {
    "question": "Which of the following is an example of e-commerce? 🛒💻",
    "options": {
      "A": "Buying groceries at a supermarket 🛒",
      "B": "Ordering food at a restaurant 🍽️",
      "C": "Booking a hotel room online 🏨💻",
      "D": "Visiting a physical store to buy clothes 👕"
    },
    "answer": "C"
  },
  {
    "question": "What is EDI name? 📡",
    "options": {
      "A": "Electronic Direct Interchange 🔄",
      "B": "Indirect materials 🔧",
      "C": "Electronic Data Interchange 📡",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "What is the process in which a buyer posts its interest in buying a certain quantity of items, and sellers compete for the business by submitting successively lower bids until there is only one seller left? 🔻💰",
    "options": {
      "A": "B2B marketplace 🏢➡️🏢",
      "B": "Intranet 🌐🔒",
      "C": "Reverse auction 🔻",
      "D": "Internet 🌐"
    },
    "answer": "C"
  },
  {
    "question": "What is B2B e-commerce? 🏢➡️🏢",
    "options": {
      "A": "Business-to-business e-commerce 🏢➡️🏢",
      "B": "Business-to-consumer e-commerce 🏢➡️👤",
      "C": "Consumer-to-consumer e-commerce 👤➡️👤",
      "D": "Government-to-consumer e-commerce 🏛️➡️👤"
    },
    "answer": "A"
  },
  {
    "question": "Most individuals are familiar with which form of e-commerce? 👤🛒",
    "options": {
      "A": "B2B 🏢➡️🏢",
      "B": "B2C 🏢➡️👤",
      "C": "C2B 👤➡️🏢",
      "D": "C2C 👤➡️👤"
    },
    "answer": "B"
  },
  {
    "question": "Which form of e-commerce currently accounts for about 97% of all e-commerce revenues? 💰🌐",
    "options": {
      "A": "B2B 🏢➡️🏢",
      "B": "B2C 🏢➡️👤",
      "C": "C2B 👤➡️🏢",
      "D": "C2C 👤➡️👤"
    },
    "answer": "A"
  },
  {
    "question": "Which of the following are advantages normally associated with B2B e-commerce? 📈🤝",
    "options": {
      "A": "Shorter cycle times ⏱️",
      "B": "Reduction in costs 💵",
      "C": "Reaches wider audiences 🌍",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "If the threat of substitute products or services is low it is a(n): 🔄📉",
    "options": {
      "A": "Disadvantage to the supplier ⚠️",
      "B": "Advantage to the buyer 🛒",
      "C": "Advantage to the supplier 👍",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "Which concept suggests that different applications and computer systems should be able to communicate with one another? 💻🔄💻",
    "options": {
      "A": "Integration 🔗",
      "B": "Web services 🌐",
      "C": "Scalability 📏",
      "D": "Interoperability 🤝"
    },
    "answer": "D"
  },
  {
    "question": "Business entities conducting business electronically are called: 💼💻",
    "options": {
      "A": "trading partners 🤝",
      "B": "electronic partners ⚡",
      "C": "business partners 🏢",
      "D": "customers 👤"
    },
    "answer": "A"
  },
  {
    "question": "Which process can prevent data from loss due to computer problems or human errors? 💾🛡️",
    "options": {
      "A": "Backup 💿",
      "B": "Recovery 🔄",
      "C": "Benchmarking 📊",
      "D": "Data cleansing 🧹"
    },
    "answer": "A"
  },
  {
    "question": "Which process is used to reinstall data from a copy when the original data has been lost? 🔄💾",
    "options": {
      "A": "Backup 💿",
      "B": "Recovery 🔧",
      "C": "Benchmarking 📊",
      "D": "Data cleansing 🧹"
    },
    "answer": "B"
  },
  {
    "question": "What describes a process of continuously measuring results and comparing those results to optimal performance so that actual performance may be improved? 📈📊",
    "options": {
      "A": "Performance 🏎️",
      "B": "Capacity planning 📊",
      "C": "Benchmarking 🎯",
      "D": "Data cleansing 🧹"
    },
    "answer": "C"
  },
  {
    "question": "Who protects system from external threats? 🛡️🌍",
    "options": {
      "A": "Firewall 🔥",
      "B": "EDI 📡",
      "C": "ERP 🏢",
      "D": "Script kiddies 👨‍💻"
    },
    "answer": "A"
  },
  {
    "question": "Who breaks into other people's computer systems and steals and destroys information? 👨‍💻💀",
    "options": {
      "A": "Hackers 🖥️",
      "B": "Softwares 💾",
      "C": "Hacktivists ✊",
      "D": "Script kiddies 🧒"
    },
    "answer": "A"
  },
  {
    "question": "What is software that comes hidden in free downloadable software and tracks your online movements, mines the information stored on your computer, or uses your computer's CPU and storage for some task you know nothing about? 🕵️‍♂️💻",
    "options": {
      "A": "Web log 📝",
      "B": "Clickstream 🖱️",
      "C": "Anonymous web browsing service 🙈",
      "D": "None of the above ❌"
    },
    "answer": "D"
  },
  {
    "question": "Secure Sockets Layers does which of the following? 🔒🌐",
    "options": {
      "A": "Creates a secure, private connection to a webserver 🔐",
      "B": "Encrypts information 🔑",
      "C": "Sends information over the internet 📡",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "When a transaction is processed online, how can the merchant verify the customer's identity? 🛒🆔",
    "options": {
      "A": "use secure sockets layers 🔒",
      "B": "use secure electronic transactions 💳🔐",
      "C": "use electronic data interchange 📡",
      "D": "use financial electronic data interchange 💰📡"
    },
    "answer": "B"
  },
  {
    "question": "The practice of forging a return address on an e-mail so that the recipient is fooled into revealing private information is termed? ✉️🎭",
    "options": {
      "A": "Hacking 👨‍💻",
      "B": "Cracking 💥",
      "C": "Dumpster diving 🗑️",
      "D": "Spoofing 🎣"
    },
    "answer": "D"
  },
  {
    "question": "What is a model of a proposed product, service, or system? 🧩🆕",
    "options": {
      "A": "Prototyping 🔨",
      "B": "Prototype 🧪",
      "C": "Proof-of-concept prototype 🧪",
      "D": "Selling prototype 💰"
    },
    "answer": "B"
  },
  {
    "question": "What is an internal organizational Internet that is guarded against outside access by a special security feature called a firewall (which can be software, hardware, or a combination of the two)? 🏢🔒",
    "options": {
      "A": "Client/server network 🖥️",
      "B": "Intranet 🌐🔒",
      "C": "Extranet 🌐🤝",
      "D": "Thin client 💻"
    },
    "answer": "B"
  },
  {
    "question": "What is an intranet that is restricted to an organization and certain outsiders, such as customers and suppliers? 🌐🤝",
    "options": {
      "A": "Client/server network 🖥️",
      "B": "Intranet 🔒",
      "C": "Extranet 🔓🤝",
      "D": "Thin client 💻"
    },
    "answer": "C"
  },
  {
    "question": "What is a detailed process for recovering information or an IT system in the event of a catastrophic disaster such as a fire or flood? 🔥🌊💻",
    "options": {
      "A": "Disaster recovery plan 📋",
      "B": "Hot site 🔥🏢",
      "C": "Cold site ❄️🏢",
      "D": "Disaster recovery cost curve 📈"
    },
    "answer": "A"
  },
  {
    "question": "What is a separate facility that does not have any computer equipment but is a place where the knowledge workers can move after the disaster? 🏢❄️",
    "options": {
      "A": "Disaster recovery plan 📋",
      "B": "Hot site 🔥",
      "C": "Cold site ❄️",
      "D": "Disaster recovery cost curve 📈"
    },
    "answer": "C"
  },
  {
    "question": "What determines the future IT infrastructure requirements for new equipment and additional network capacity? 🖥️📈",
    "options": {
      "A": "Flexibility 🤸",
      "B": "Performance 🏎️",
      "C": "Capacity planning 📊",
      "D": "Benchmark 🎯"
    },
    "answer": "C"
  },
  {
    "question": "What automates business processes? 🤖📋",
    "options": {
      "A": "Workflow 🔄",
      "B": "ASP 🌐",
      "C": "Workflow system ⚙️",
      "D": "EIP 🚪"
    },
    "answer": "C"
  },
  {
    "question": "What defines all of the steps or business rules, from beginning to end, required for a process to run correctly? 📜🔄",
    "options": {
      "A": "Workflow 📋",
      "B": "EIP 🚪",
      "C": "Workflow system ⚙️",
      "D": "SLA 📝"
    },
    "answer": "A"
  },
  {
    "question": "What sends work assignments through an e-mail system? ✉️📋",
    "options": {
      "A": "Database-based enterprise information portal 🗄️",
      "B": "Messaging-based enterprise information portal 💬",
      "C": "Database-based workflow system 🗄️",
      "D": "Messaging-based workflow system 💬"
    },
    "answer": "D"
  },
  {
    "question": "Which will not harm computer resources? 🛡️💻",
    "options": {
      "A": "Firewall 🔥",
      "B": "Virus 🦠",
      "C": "Trojan horse 🐴",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "EDI is the electronic interchange of business information using: 📡💼",
    "options": {
      "A": "Internet 🌐",
      "B": "Middle man 🧑‍💼",
      "C": "Standardized Format 📏",
      "D": "Secured Server 🔒"
    },
    "answer": "C"
  },
  {
    "question": "Which is a function of ERP? 🏢⚙️",
    "options": {
      "A": "Warehousing 📦",
      "B": "Sales 💰",
      "C": "Scheduling 📅",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "Which of the following is the primary characteristic of an intranet? 🌐🔒",
    "options": {
      "A": "People outside the organization can access it 🚪",
      "B": "People inside the organization can't access it 🚫",
      "C": "People outside the organization can't access it 🔒",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "What is E-commerce? 🛒💻",
    "options": {
      "A": "Doing business electronically 💼",
      "B": "Doing business 🏢",
      "C": "Sale of goods 📦",
      "D": "All of the above 🌟"
    },
    "answer": "A"
  },
  {
    "question": "Who is part of the four main types for e-commerce? 🛒📊",
    "options": {
      "A": "B2B 🏢➡️🏢",
      "B": "B2C 🏢➡️👤",
      "C": "C2B 👤➡️🏢",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "Which of the following is not type of patent? 📜❌",
    "options": {
      "A": "Utility patents 🔧",
      "B": "Copyright ©️",
      "C": "Design patents 🎨",
      "D": "Plant patents 🌱"
    },
    "answer": "B"
  },
  {
    "question": "Which type of e-commerce focuses on consumers dealing with each other? 👤➡️👤",
    "options": {
      "A": "B2B 🏢➡️🏢",
      "B": "B2C 🏢➡️👤",
      "C": "C2B 👤➡️🏢",
      "D": "C2C 👤➡️👤"
    },
    "answer": "D"
  },
  {
    "question": "Which of the following is Rights of a Copyright Owner? ©️📜",
    "options": {
      "A": "Publish their work and Perform their work in public 📢",
      "B": "Translate and Broadcast their work 🌍",
      "C": "Prevent others from making unauthorized use of copyrighted work 🚫",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "Which type deals with auction? 🔨💰",
    "options": {
      "A": "B2B 🏢➡️🏢",
      "B": "B2C 🏢➡️👤",
      "C": "C2B 👤➡️🏢",
      "D": "C2C 👤➡️👤"
    },
    "answer": "D"
  },
  {
    "question": "Organizations suppliers value chain are known as: 🔗🏭",
    "options": {
      "A": "Upstream value chain ⬆️",
      "B": "Downstream value chain ⬇️",
      "C": "Value chain 🔗",
      "D": "None of these ❌"
    },
    "answer": "A"
  },
  {
    "question": "The best products to sell in B2C e-commerce are: 🛍️🏢👤",
    "options": {
      "A": "Small products 📦",
      "B": "Digital products 💾",
      "C": "Specialty products ✨",
      "D": "Fresh products 🥬"
    },
    "answer": "B"
  },
  {
    "question": "Which products are people most likely to be more uncomfortable buying on the Internet? 😟🛒",
    "options": {
      "A": "Books 📚",
      "B": "Furniture 🛋️",
      "C": "Movies 🎬",
      "D": "All of the above 🌟"
    },
    "answer": "B"
  },
  {
    "question": "Which products are people most likely to be more uncomfortable buying on the Internet? 😟🛒",
    "options": {
      "A": "Books 📚",
      "B": "PCs 💻",
      "C": "CDs 💿",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "The threat of new entrants is high when it is: 🚪📈",
    "options": {
      "A": "Hard for customers to enter the market 🚫",
      "B": "Hard for competitors to enter the market 🚫",
      "C": "Easy for competitors to enter the market 🟢",
      "D": "Easy for customers to enter the market 🛍️"
    },
    "answer": "C"
  },
  {
    "question": "If it is easy for competitors to enter the market, the threat of new entrants is considered: 🚪⬆️",
    "options": {
      "A": "High 🔴",
      "B": "Low 🟢",
      "C": "More 📈",
      "D": "Less 📉"
    },
    "answer": "A"
  },
  {
    "question": "An industry is less attractive for suppliers when the rivalry among existing competitors is: ⚔️🏭",
    "options": {
      "A": "High 🔴",
      "B": "Low 🟢",
      "C": "More 📈",
      "D": "Less 📉"
    },
    "answer": "A"
  },
  {
    "question": "Unique value auction is mainly applies to: 🔨💰",
    "options": {
      "A": "New products 🆕",
      "B": "Second hand products ♻️",
      "C": "Engineering products ⚙️",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "PaisaPay is facilitated in: 💸🇮🇳",
    "options": {
      "A": "eBay.co.in 🛒",
      "B": "amazon.com 📦",
      "C": "flipkart.com 🛍️",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "Which of the following is a useful security mechanism when considering business strategy and IT? 🔐💼",
    "options": {
      "A": "Encryption 🔑",
      "B": "Decryption 🔓",
      "C": "Firewall 🛡️",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "Which of the following is not related to security mechanism? 🚫🔐",
    "options": {
      "A": "Encryption 🔑",
      "B": "Decryption 🔓",
      "C": "E-cash 💵",
      "D": "All of the above 🌟"
    },
    "answer": "C"
  },
  {
    "question": "The best products to sell in B2C e-commerce are: 🛍️🏢👤",
    "options": {
      "A": "Small products 📦",
      "B": "Digital products 💾",
      "C": "Specialty products ✨",
      "D": "Fresh product 🥬"
    },
    "answer": "B"
  },
  {
    "question": "Which of the following statements accurately reflect the impact of technology? 📡⚡",
    "options": {
      "A": "Technology has caused buyer power to increase 📈",
      "B": "Technology has lessened the entry barriers for many industries 🚪",
      "C": "Technology has increased the threat of substitute products and services 🔄",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "Which form of e-marketplace brings together buyers and sellers from multiple industries, often for MRO materials? 🔧🏭",
    "options": {
      "A": "Horizontal ↔️",
      "B": "Vertical ↕️",
      "C": "Integrated 🔗",
      "D": "Inclined 📐"
    },
    "answer": "A"
  },
  {
    "question": "Which form of e-marketplace brings together buyers and sellers from the same industry? 🏭↕️",
    "options": {
      "A": "Horizontal ↔️",
      "B": "Vertical ↕️",
      "C": "Integrated 🔗",
      "D": "Inclined 📐"
    },
    "answer": "B"
  },
  {
    "question": "Which type of ad appears on a web page? 🖥️📢",
    "options": {
      "A": "Pop-under ad ⬇️",
      "B": "Pop-up ad ⬆️",
      "C": "Banner ad 📏",
      "D": "Discount ad 💸"
    },
    "answer": "C"
  },
  {
    "question": "What type of ad appears on top of a web page? ⬆️🖥️",
    "options": {
      "A": "Pop-under ad ⬇️",
      "B": "Pop-up ad 🪟",
      "C": "Banner ad 📏",
      "D": "Discount ad 💸"
    },
    "answer": "B"
  },
  {
    "question": "What type of ad appears under a web page? ⬇️🖥️",
    "options": {
      "A": "Pop-under ad 📉",
      "B": "Pop-up ad 📈",
      "C": "Banner ad 📏",
      "D": "Discount ad 💸"
    },
    "answer": "A"
  },
  {
    "question": "Which, if any, of the following types of ads are people most willing to tolerate? 😊📢",
    "options": {
      "A": "Pop-under ad ⬇️",
      "B": "Pop-up ad ⬆️",
      "C": "Banner ad 📏",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "Which of the following is an Internet-based company that makes it easy for one person to pay another over the Internet? 🌐💸",
    "options": {
      "A": "Electronic check 💳",
      "B": "Electronic bill presentment and payment 📄",
      "C": "Conversion rates 💱",
      "D": "Financial cybermediary 🏦"
    },
    "answer": "D"
  },
  {
    "question": "Which of the following is a method of transferring money from one person's account to another? 💸🔄",
    "options": {
      "A": "Electronic check 💳",
      "B": "Credit card 💳",
      "C": "E-transfer ⚡",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "Digital products are best suited for B2C e-commerce because they: 💾🏢👤",
    "options": {
      "A": "are commodity like products 📦",
      "B": "can be mass-customized and personalized 🎨",
      "C": "can be delivered at the time of purchase ⏱️",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "The solution for all business needs is: 🏢✅",
    "options": {
      "A": "EDI 📡",
      "B": "ERP 📊",
      "C": "SCM 🔗",
      "D": "None of the above ❌"
    },
    "answer": "B"
  },
  {
    "question": "All of the following are techniques B2C e-commerce companies use to attract customers, except: 📢❌",
    "options": {
      "A": "Registering with search engines 🔍",
      "B": "Viral marketing 🦠",
      "C": "Online ads 🖥️",
      "D": "Virtual marketing 🌐"
    },
    "answer": "D"
  },
  {
    "question": "Which is a function of E-commerce? 🛒⚙️",
    "options": {
      "A": "Marketing 📢",
      "B": "Advertising 📺",
      "C": "Warehousing 📦",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "Which is not a function of E-commerce? 🛒❌",
    "options": {
      "A": "Marketing 📢",
      "B": "Advertising 📺",
      "C": "Warehousing 📦",
      "D": "None of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "Which term represents account of the number of people who visit one site, click on an ad, and are taken to the site of the advertiser? 🖱️📊",
    "options": {
      "A": "Affiliate programs 🤝",
      "B": "Click-through 🔗",
      "C": "Spam 📧",
      "D": "All of the above 🌟"
    },
    "answer": "B"
  },
  {
    "question": "What is the percentage of customers who visit a website and actually buy something called? 🛒📊",
    "options": {
      "A": "Affiliate programs 🤝",
      "B": "Click-through 🔗",
      "C": "Spam 📧",
      "D": "Conversion rate 📈"
    },
    "answer": "D"
  },
  {
    "question": "What are materials used in production in a manufacturing company or replaced on the shelf for sale in a retail environment? 🏭📦",
    "options": {
      "A": "Direct materials 🧱",
      "B": "Indirect materials 🔧",
      "C": "EDI 📡",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "What are materials that are necessary for running a modern corporation, but do not relate to the company's primary business activities? 🏢🔧",
    "options": {
      "A": "Direct materials 🧱",
      "B": "Indirect materials 🔧",
      "C": "EDI 📡",
      "D": "None of the above ❌"
    },
    "answer": "B"
  },
  {
    "question": "What is a separate and fully equipped facility where the company can move immediately after the disaster and resume business? 🏢🔥",
    "options": {
      "A": "Disaster recovery plan 📋",
      "B": "Hot site 🔥",
      "C": "Cold site ❄️",
      "D": "Disaster recovery cost curve 📈"
    },
    "answer": "B"
  },
  {
    "question": "What charts (1) the cost to your organization of the unavailability of information and technology and (2) the cost to your organization of recovering from a disaster over time? 📉📊",
    "options": {
      "A": "Disaster recovery plan 📋",
      "B": "Hot site 🔥",
      "C": "Cold site ❄️",
      "D": "Disaster recovery cost curve 📈"
    },
    "answer": "D"
  },
  {
    "question": "Which factor determines when your IT system will be available for knowledge workers to access? ⏰💻",
    "options": {
      "A": "Availability 🛡️",
      "B": "Accessibility 🚪",
      "C": "Reliability 🔒",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "Which factor determines who has the right to access different types of IT systems and information? 🚪🔑",
    "options": {
      "A": "Availability ⏰",
      "B": "Accessibility 🚪",
      "C": "Reliability 🔒",
      "D": "Scalability 📈"
    },
    "answer": "B"
  },
  {
    "question": "Which factor ensures your IT systems are functioning correctly and providing accurate information? ✅💻",
    "options": {
      "A": "Availability ⏰",
      "B": "Accessibility 🚪",
      "C": "Reliability 🔒",
      "D": "Scalability 📈"
    },
    "answer": "C"
  },
  {
    "question": "Which factor represents how well your system can adapt to increased demands? 📈⚙️",
    "options": {
      "A": "Availability ⏰",
      "B": "Accessibility 🚪",
      "C": "Reliability 🔒",
      "D": "Scalability 📏"
    },
    "answer": "D"
  },
  {
    "question": "Which factor represents a system's ability to change quickly? ⚡🔄",
    "options": {
      "A": "Flexibility 🤸",
      "B": "Performance 🏎️",
      "C": "Capacity planning 📊",
      "D": "Benchmark 🎯"
    },
    "answer": "A"
  },
  {
    "question": "What is a set of conditions used to measure how well a product or system functions? 📏⚙️",
    "options": {
      "A": "Flexibility 🤸",
      "B": "Performance 🏎️",
      "C": "Capacity planning 📊",
      "D": "Benchmark 🎯"
    },
    "answer": "D"
  },
  {
    "question": "Industry structure is defined as 🏭📊",
    "options": {
      "A": "The nature of the players in an industry and their relative bargaining power ⚖️",
      "B": "A set of plans for achieving long term returns on the capital invested in a business firm 💰",
      "C": "Set of planned activities designed to result in a profit in a marketplace 📈",
      "D": "How a company's product or service fulfills the needs of customers 🎯"
    },
    "answer": "A"
  },
  {
    "question": "The dimension of e-commerce that enables commerce across national boundaries is called 🌐🛒",
    "options": {
      "A": "Interactivity 🔄",
      "B": "Global reach 🌍",
      "C": "Richness 💎",
      "D": "Ubiquity 📱"
    },
    "answer": "B"
  },
  {
    "question": "\"Google\" is one of the most popular 🔍",
    "options": {
      "A": "Portal 🚪",
      "B": "Browser 🌐",
      "C": "Search engine 🔎",
      "D": "None of these ❌"
    },
    "answer": "C"
  },
  {
    "question": "________ is a form of supply chain where a series of assembly operations are carried out to obtain final product 🔗🏭",
    "options": {
      "A": "Converging supply chain 📥",
      "B": "Diverging supply chain 📤",
      "C": "Any of these 🔄",
      "D": "None ❌"
    },
    "answer": "A"
  },
  {
    "question": "________ is automated methods of recognizing a person based on a physiological or behavioral characteristic 🖐️👁️",
    "options": {
      "A": "Biometrics 🔬",
      "B": "Pin 🔢",
      "C": "Both of these 🔀",
      "D": "None of these ❌"
    },
    "answer": "A"
  },
  {
    "question": "Trade mark, copyright, patent law etc comes under the purview of 📜⚖️",
    "options": {
      "A": "Data protection laws 🔒",
      "B": "Telecommunication laws 📡",
      "C": "Intellectual property laws 🧠",
      "D": "None ❌"
    },
    "answer": "C"
  },
  {
    "question": "E-mail which contains useless material is termed as 📧🗑️",
    "options": {
      "A": "Spam 🥫",
      "B": "Useless mail ❌",
      "C": "Trunk mail 📬",
      "D": "Junk mail 🗑️"
    },
    "answer": "A"
  },
  {
    "question": "________ is a kind of payment card that transfers fund directly from the consumer's bank account to the merchants account 💳🏦",
    "options": {
      "A": "Debit card 💳",
      "B": "Electronic purse 👛",
      "C": "Credit card 💳",
      "D": "Any of these 🔄"
    },
    "answer": "A"
  },
  {
    "question": "To accept a credit card for payment, we have to open a ________ account with our bank 💳🏦",
    "options": {
      "A": "Savings bank 💰",
      "B": "Current account 📊",
      "C": "Merchant account 🛒",
      "D": "Any of these 🔄"
    },
    "answer": "C"
  },
  {
    "question": "SET means 🔐💳",
    "options": {
      "A": "Standard Electronic Technology ⚙️",
      "B": "Standard Electronic Transfer 📡",
      "C": "Secure Electronic Transaction 🔒",
      "D": "None of these ❌"
    },
    "answer": "C"
  },
  {
    "question": "________ is a card with a microchip that can be used instead of cash and coins for everything from vending machines to public transportation 💳🔌",
    "options": {
      "A": "Debit card 💳",
      "B": "Credit card 💳",
      "C": "Electronic purse 👛",
      "D": "Any of these 🔄"
    },
    "answer": "C"
  },
  {
    "question": "This is a protocol which allows files to be transferred from one computer to another computer 📁💻",
    "options": {
      "A": "tcp/ip 🔗",
      "B": "ftp 📂",
      "C": "http 🌐",
      "D": "None of these ❌"
    },
    "answer": "B"
  },
  {
    "question": "________ is a global web in which millions of users are communicating with each other with the help of computers 🌐💬",
    "options": {
      "A": "Internet 🌍",
      "B": "www 🌐",
      "C": "Both of these 🔀",
      "D": "None of these ❌"
    },
    "answer": "C"
  },
  {
    "question": "The user reaches this page when they specify the address of a website 🏠🌐",
    "options": {
      "A": "Home page 🏠",
      "B": "Web page 📄",
      "C": "Summary page 📋",
      "D": "None of these ❌"
    },
    "answer": "A"
  },
  {
    "question": "Which among the following is not an example for Search engine? 🔍❌",
    "options": {
      "A": "google 🔎",
      "B": "msn 💬",
      "C": "alta vista 🌐",
      "D": "none of these 🚫"
    },
    "answer": "D"
  },
  {
    "question": "________ is an application layer protocol for distributed, collaborative, hypermedia information systems 🌐📄",
    "options": {
      "A": "html 📝",
      "B": "http 🔗",
      "C": "Both of these 🔀",
      "D": "None of these ❌"
    },
    "answer": "B"
  },
  {
    "question": "Among the alternate models of B2B e-commerce, ________ is the best means to obtain a competitive advantage in the Market place 🏢➡️🏢⚡",
    "options": {
      "A": "Process based ⚙️",
      "B": "Strategic relationship based 🤝",
      "C": "Transaction based 💰",
      "D": "Any of these 🔄"
    },
    "answer": "B"
  },
  {
    "question": "________ is a commercial process that includes production, distribution, sales or delivery of goods and services through electronic means 🛒💻",
    "options": {
      "A": "e-commerce 🌐",
      "B": "scm 🔗",
      "C": "edi 📡",
      "D": "None of these ❌"
    },
    "answer": "A"
  },
  {
    "question": "Which of the following is not a party of SCM? 🔗❌",
    "options": {
      "A": "suppliers 🏭",
      "B": "manufacturers 🏭",
      "C": "distributors 🚚",
      "D": "customers 👤"
    },
    "answer": "D"
  },
  {
    "question": "Electronic Exchange of business documents in a standard format is known as 📄🔄",
    "options": {
      "A": "e-commerce 🛒",
      "B": "e-business 💼",
      "C": "edi 📡",
      "D": "None of these ❌"
    },
    "answer": "C"
  },
  {
    "question": "Who developed concept of value chain? 🔗👨‍🎓",
    "options": {
      "A": "Kaysha Michal Porter ❌",
      "B": "Michael Porter 🌐",
      "C": "Nicoala Porter ❌",
      "D": "None of these ❌"
    },
    "answer": "B"
  },
  {
    "question": "What is the process of making a copy of the information stored on a computer? 💾📋",
    "options": {
      "A": "Backup 💿",
      "B": "Anti-virus 🦠",
      "C": "Firewall 🔥",
      "D": "Biometrics 🖐️"
    },
    "answer": "A"
  },
  {
    "question": "ERP stands for 🏢⚙️",
    "options": {
      "A": "Enterprise resolution planning 📋",
      "B": "Enterprise reverse planning 🔄",
      "C": "Enterprise resource planning 📊",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "Who breaks into other people's computer systems and steals and destroys information? 👨‍💻💀",
    "options": {
      "A": "Hackers 🖥️",
      "B": "Softwares 💾",
      "C": "Hacktivists ✊",
      "D": "Script kiddies 🧒"
    },
    "answer": "A"
  },
  {
    "question": "Which of the following is the primary characteristic of an intranet? 🌐🔒",
    "options": {
      "A": "People outside the organization can access it 🚪",
      "B": "People inside the organization can't access it 🚫",
      "C": "People outside the organization can't access it 🔒",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "Which will not harm computer resources: 🛡️💻",
    "options": {
      "A": "Firewall 🔥",
      "B": "Virus 🦠",
      "C": "Trojan horse 🐴",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "What automates business processes? 🤖📋",
    "options": {
      "A": "Workflow 🔄",
      "B": "asp 🌐",
      "C": "Workflow system ⚙️",
      "D": "eip 🚪"
    },
    "answer": "C"
  },
  {
    "question": "Which factor represents a systems ability to change quickly? ⚡🔄",
    "options": {
      "A": "Flexibility 🤸",
      "B": "Performance 🏎️",
      "C": "Capacity planning 📊",
      "D": "Benchmark 🎯"
    },
    "answer": "A"
  },
  {
    "question": "Which factor represents how well your system can adapt to increased demands? 📈⚙️",
    "options": {
      "A": "Availability ⏰",
      "B": "Accessibility 🚪",
      "C": "Reliability 🔒",
      "D": "Scalability 📏"
    },
    "answer": "D"
  },
  {
    "question": "What is an intranet that is restricted to an organization and certain outsiders, such as customers and suppliers? 🌐🤝",
    "options": {
      "A": "Client/server network 🖥️",
      "B": "Intranet 🔒",
      "C": "Extranet 🔓🤝",
      "D": "Thin client 💻"
    },
    "answer": "C"
  },
  {
    "question": "What is an internal organizational Internet that is guarded against outside access by a special security feature called a firewall? 🏢🔒",
    "options": {
      "A": "Client/server network 🖥️",
      "B": "Intranet 🌐🔒",
      "C": "Extranet 🌐🤝",
      "D": "Thin client 💻"
    },
    "answer": "B"
  },
  {
    "question": "When a transaction is processed online, how can the merchant verify the customer's identity? 🛒🆔",
    "options": {
      "A": "Use secure sockets layers 🔒",
      "B": "Use secure electronic transactions 💳🔐",
      "C": "Use electronic data interchange 📡",
      "D": "Use financial electronic data interchange 💰📡"
    },
    "answer": "B"
  },
  {
    "question": "Secure Sockets Layers does which of the following? 🔒🌐",
    "options": {
      "A": "Creates a secure, private connection to a web server 🔐",
      "B": "Encrypts information 🔑",
      "C": "Sends information over the Internet 📡",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "Public key encryption uses multiple keys. One key is used to encrypt data, while another is used to decrypt data. The key used to encrypt data is called the ________ key, while the key used to decrypt data is called the ________ key. 🔑🔐",
    "options": {
      "A": "encryption, decryption 🔒🔓",
      "B": "private, public 🙈🙉",
      "C": "encryption, public 🔒🙉",
      "D": "public, private 🙉🙈"
    },
    "answer": "D"
  },
  {
    "question": "What is the name for direct computer-to-computer transfer of transaction information contained in standard business documents? 💻📄",
    "options": {
      "A": "Internet commerce 🌐",
      "B": "E-commerce 🛒",
      "C": "Transaction information transfer 🔄",
      "D": "Electronic data interchange 📡"
    },
    "answer": "D"
  },
  {
    "question": "Which form of e-marketplace brings together buyers and sellers from the same industry? 🏭↕️",
    "options": {
      "A": "Horizontal ↔️",
      "B": "Vertical ↕️",
      "C": "Integrated 🔗",
      "D": "Inclined 📐"
    },
    "answer": "B"
  },
  {
    "question": "Which type of products is lesser purchased using ecommerce? 🛒❌",
    "options": {
      "A": "Automobiles 🚗",
      "B": "Books 📚",
      "C": "Softwares 💾",
      "D": "None ❌"
    },
    "answer": "A"
  },
  {
    "question": "How the transactions occur in e-commerce? 💻🔄",
    "options": {
      "A": "Using e-medias 📱💻",
      "B": "Using computers only 🖥️",
      "C": "Using mobile phones only 📱",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "A product or service that customers have come to expect from an industry, which must be offered by new entrants if they wish to compete and survive, is known as a(n)? 🚪🛡️",
    "options": {
      "A": "Switching costs 🔄💰",
      "B": "Loyalty programs 🎁",
      "C": "Entry barriers 🚧",
      "D": "Affiliate programs 🤝"
    },
    "answer": "C"
  },
  {
    "question": "Which of the following is a useful security mechanism when considering business strategy and IT? 🔐💼",
    "options": {
      "A": "Encryption 🔑",
      "B": "Decryption 🔓",
      "C": "Firewall 🛡️",
      "D": "All the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "Unique value auction is mainly applies to? 🔨💰",
    "options": {
      "A": "New products 🆕",
      "B": "Second hand products ♻️",
      "C": "Engineering products ⚙️",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "If it is easy for competitors to enter the market, the threat of new entrants is considered: 🚪⬆️",
    "options": {
      "A": "High 🔴",
      "B": "Low 🟢",
      "C": "More 📈",
      "D": "Less 📉"
    },
    "answer": "A"
  },
  {
    "question": "If the threat of substitute products or services is low it is a(n): 🔄📉",
    "options": {
      "A": "Disadvantage to the supplier ⚠️",
      "B": "Advantage to the buyer 🛒",
      "C": "Advantage to the supplier 👍",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "What are plastic cards the size of a credit card that contains an embedded chip on which digital information can be stored? 💳🔌",
    "options": {
      "A": "Customer relationship management systems cards 📊",
      "B": "E-government identity cards 🆔",
      "C": "Fedi cards ❌",
      "D": "Smart cards 🧠"
    },
    "answer": "D"
  },
  {
    "question": "What is the percentage of customers who visit a Web site and actually buy something called? 🛒📊",
    "options": {
      "A": "Affiliate programs 🤝",
      "B": "Click-through 🔗",
      "C": "Spam 📧",
      "D": "Conversion rate 📈"
    },
    "answer": "D"
  },
  {
    "question": "Which is a function of E-commerce? 🛒⚙️",
    "options": {
      "A": "Marketing 📢",
      "B": "Advertising 📺",
      "C": "Warehousing 📦",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "The solution for all business needs is 🏢✅",
    "options": {
      "A": "edi 📡",
      "B": "erp 📊",
      "C": "scm 🔗",
      "D": "None of the above ❌"
    },
    "answer": "B"
  },
  {
    "question": "Which type deals with auction? 🔨💰",
    "options": {
      "A": "b2b 🏢➡️🏢",
      "B": "b2c 🏢➡️👤",
      "C": "c2b 👤➡️🏢",
      "D": "c2c 👤➡️👤"
    },
    "answer": "D"
  },
  {
    "question": "________ is an early form of E-commerce: 📡🕰️",
    "options": {
      "A": "scm 🔗",
      "B": "edi 📄",
      "C": "Both of these 🔀",
      "D": "None of these ❌"
    },
    "answer": "B"
  },
  {
    "question": "________ is concerned with the buying and selling information, products and services over computer communication networks 🛒💻",
    "options": {
      "A": "Commerce 💰",
      "B": "E-commerce 🌐",
      "C": "E-business 💼",
      "D": "None of these ❌"
    },
    "answer": "B"
  },
  {
    "question": "ACH is 🏦💸",
    "options": {
      "A": "Acid Consistency House ❌",
      "B": "Automated Clearing House 💬",
      "C": "Automated Consistency House ❌",
      "D": "None of the above ❌"
    },
    "answer": "B"
  },
  {
    "question": "EFT is 💸⚡",
    "options": {
      "A": "Electronic Fund Transfer 💬",
      "B": "Electrical Fund Transfer ❌",
      "C": "Electronic Fast Transfer ❌",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "________ is an application of smart card 🧠💳",
    "options": {
      "A": "ATM 🏧",
      "B": "Telecommunication 📡",
      "C": "Transportation 🚇",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "Electronic payment is a financial transaction made ________ the use of paper documents 💸📄",
    "options": {
      "A": "With 💬",
      "B": "Without ❌",
      "C": "Both (A) and (B) 🔄",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "E-money is a medium for making payments 💵💻",
    "options": {
      "A": "Digital 💾",
      "B": "Electronic ⚡",
      "C": "Both (A) and (B) 🔀",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "Moving from one Web site to another is called 🌐🖱️",
    "options": {
      "A": "Jumping 🦘",
      "B": "Moving 🚚",
      "C": "Surfing 🏄",
      "D": "Applying 📝"
    },
    "answer": "C"
  },
  {
    "question": "Advantages of B2C commerce are: 🏢👤✅ (i) Business gets a wide reach to customers 🌍 (ii) Payment for services easy 💳 (iii) Shop can be open 24 hours a day seven days a week 🕒 (iv) Privacy of transaction always maintained 🔒",
    "options": {
      "A": "(i) and (ii) 💬",
      "B": "(ii) and (iii) 💬",
      "C": "(i) and (iii) 💬",
      "D": "(iii) and (iv) 💬"
    },
    "answer": "C"
  },
  {
    "question": "A summary of how a company will generate a profit identifying its core product, target customers, position in the online marketplace, and projections for revenue and costs is known as: 📊💰",
    "options": {
      "A": "Value chain and marketplace positioning 🔗",
      "B": "Value proposition 💎",
      "C": "Online business model 🖥️🏢",
      "D": "Revenue model and cost base 💵📉"
    },
    "answer": "C"
  },
  {
    "question": "Social network sites such as Facebook and Twitter have become increasingly popular for sell-side e-commerce and would normally be considered to be in which category? 📱💬",
    "options": {
      "A": "Portal, publisher or media sites 🚪📰",
      "B": "Brand-building sites 🏷️",
      "C": "Transactional e-commerce sites 🛒",
      "D": "Services-orientated relationship-building websites 🤝"
    },
    "answer": "D"
  },
  {
    "question": "Which driver promote E-commerce? 🚀🛒",
    "options": {
      "A": "Digital Convergence 📱💻",
      "B": "24/7 availability 🕒",
      "C": "Profit margins 💰",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "By electronic commerce we mean: 🛒💻",
    "options": {
      "A": "Commerce of electronic goods 💾",
      "B": "Commerce which depends on electronics ⚡",
      "C": "Commerce which is based on the use of internet 🌐",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "The E-commerce domain that involves business activity initiated by the consumer and targeted to businesses is known as: 👤➡️🏢",
    "options": {
      "A": "Business to Business (B2B) 🏢➡️🏢",
      "B": "Consumer to Business (C2B) 👤➡️🏢",
      "C": "Business to Consumer (B2C) 🏢➡️👤",
      "D": "Consumer to Consumer (C2C) 👤➡️👤"
    },
    "answer": "B"
  },
  {
    "question": "What floods a Web site with so many requests for service that it slows down or crashes? 🌐💥",
    "options": {
      "A": "Computer virus 🦠",
      "B": "Worm 🐛",
      "C": "Denial-of-service attack 🚫",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "Which factor represents a systems ability to change quickly? ⚡🔄",
    "options": {
      "A": "Flexibility 🤸",
      "B": "Performance 🏎️",
      "C": "Capacity planning 📊",
      "D": "Benchmark 🎯"
    },
    "answer": "A"
  },
  {
    "question": "An electronic check is one form of what? 💳📄",
    "options": {
      "A": "e-commerce 🛒",
      "B": "online banking 🏦",
      "C": "e-cash 💵",
      "D": "check 💬"
    },
    "answer": "C"
  },
  {
    "question": "Which, if any, of the following types of ads are people most willing to tolerate? 😊📢",
    "options": {
      "A": "Pop-under ad ⬇️",
      "B": "Pop-up ad ⬆️",
      "C": "Banner ad 📏",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "Which of the following are advantages normally associated with B2B e-commerce? 📈🤝",
    "options": {
      "A": "Shorter cycle times ⏱️",
      "B": "Reduction in costs 💵",
      "C": "Reaches wider audiences 🌍",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "What is another name for materials which cannot be linked to a specific product or process? 🔧📦",
    "options": {
      "A": "Direct materials 🧱",
      "B": "Indirect materials 🔧",
      "C": "EDI 📡",
      "D": "None of the above ❌"
    },
    "answer": "B"
  },
  {
    "question": "The purpose of supply chain management is 🔗🎯",
    "options": {
      "A": "Provide customer 👤",
      "B": "Improve quality of a product ⭐",
      "C": "Integrating supply and demand 🔄",
      "D": "Increase production 🏭"
    },
    "answer": "C"
  },
  {
    "question": "Digital Products are best suited for B2C e-commerce because they: 💾🏢👤",
    "options": {
      "A": "Are commodity like products 📦",
      "B": "Can be mass-customized and personalized 🎨",
      "C": "Can be delivered at the time of purchase ⏱️",
      "D": "All of the mentioned 🌟"
    },
    "answer": "D"
  },
  {
    "question": "________ credit card gives all the advantages of a normal credit card without worrying about the interest charges 💳✅",
    "options": {
      "A": "Prepaid 💳",
      "B": "Post paid 💳",
      "C": "Both of these 🔄",
      "D": "None of these ❌"
    },
    "answer": "A"
  },
  {
    "question": "________ in the e-commerce may be a holder of a payment card such as credit card or debit card from an issuer 🛒💳",
    "options": {
      "A": "Customer 👤",
      "B": "Issuer 🏦",
      "C": "Merchant 🛍️",
      "D": "Acquirer 🏦"
    },
    "answer": "A"
  },
  {
    "question": "________ website is one that changes or customizes itself frequently and automatically based on certain criteria 🌐🔄",
    "options": {
      "A": "Dynamic website ⚡",
      "B": "Static Website 🪨",
      "C": "Phish site 🎣",
      "D": "None of these ❌"
    },
    "answer": "A"
  },
  {
    "question": "________ is any transaction, involving the transfer or rights to use goods and services, which is initiated and or completed by using mobile access to computer mediated networks with the help of an electronic device 📱🛒",
    "options": {
      "A": "Mobile Commerce 📱",
      "B": "E-commerce 💻",
      "C": "Both of these 🔀",
      "D": "None of these ❌"
    },
    "answer": "A"
  },
  {
    "question": "________ focus on producing a highly integrated value proposition through a managed process 🔗⚙️",
    "options": {
      "A": "Hubs 🕸️",
      "B": "Community 👥",
      "C": "Contents 📄",
      "D": "None of these ❌"
    },
    "answer": "A"
  },
  {
    "question": "The document standards for EDI were first developed by large business houses during the 1970s and are now under the control of the following standard organization 📡📏",
    "options": {
      "A": "ANSI 💬",
      "B": "ISO 💬",
      "C": "Both of these 🔄",
      "D": "None of these ❌"
    },
    "answer": "C"
  },
  {
    "question": "________ is a systems approach to Managing the entire flow of information, materials, and services from raw material suppliers through factories and warehouses to the end customer 🔗🏭",
    "options": {
      "A": "CRM 👤",
      "B": "SRM 🏢",
      "C": "EDI 📡",
      "D": "SCM 🔗"
    },
    "answer": "D"
  },
  {
    "question": "E-Commerce lacks ________ touch 🛒❌",
    "options": {
      "A": "Social 👥",
      "B": "Smooth ⚡",
      "C": "Personal 🤝",
      "D": "Communication 💬"
    },
    "answer": "C"
  },
  {
    "question": "Scope of E-Commerce is 🌐🛒",
    "options": {
      "A": "Local 🏘️",
      "B": "Global 🌍",
      "C": "Within Own country 🇮🇳",
      "D": "Within own state 🗺️"
    },
    "answer": "B"
  },
  {
    "question": "________ can read the cipher text 🔐📖",
    "options": {
      "A": "Sender ✉️",
      "B": "Receiver 📬",
      "C": "Any one 👤",
      "D": "No one 🚫"
    },
    "answer": "B"
  },
  {
    "question": "In Public Key Encryption, ________ key is used for Encryption 🔑🔐",
    "options": {
      "A": "Receiver's public 📬🙉",
      "B": "Receiver's private 📬🙈",
      "C": "Sender's public ✉️🙉",
      "D": "Sender's private ✉️🙈"
    },
    "answer": "A"
  },
  {
    "question": "olx.com is an example of 🛒🌐",
    "options": {
      "A": "b2b 🏢➡️🏢",
      "B": "b2c 🏢➡️👤",
      "C": "c2c 👤➡️👤",
      "D": "p2p 👤➡️👤"
    },
    "answer": "C"
  },
  {
    "question": "________ allows you paperless transaction 📄❌💻",
    "options": {
      "A": "edi 📡",
      "B": "electronic market 🛒",
      "C": "e-commerce 🌐",
      "D": "Internet commerce 💻"
    },
    "answer": "A"
  },
  {
    "question": "________ is virtual representation of physical market 🏪💻",
    "options": {
      "A": "edi 📡",
      "B": "electronic market 🛒",
      "C": "e-commerce 🌐",
      "D": "internet commerce 💻"
    },
    "answer": "B"
  },
  {
    "question": "Identify the identity of a person or entity with whom you are dealing on Internet is known as 🆔🌐",
    "options": {
      "A": "Integrity 🛡️",
      "B": "Authenticity 🔐",
      "C": "Authorization 🔑",
      "D": "None of these ❌"
    },
    "answer": "B"
  },
  {
    "question": "In SSL encryption is done using ________ key 🔒🔑",
    "options": {
      "A": "Public 🙉",
      "B": "Private 🙈",
      "C": "Session 🔄",
      "D": "Symmetric 🔄"
    },
    "answer": "C"
  },
  {
    "question": "An online retail store is called as 🛍️💻",
    "options": {
      "A": "Trader 💼",
      "B": "Retailer 🏬",
      "C": "E-tailer 🖥️🛍️",
      "D": "Amazon 📦"
    },
    "answer": "C"
  },
  {
    "question": "________ changes URL from http to https 🔒🌐",
    "options": {
      "A": "ssl 🔐",
      "B": "set 💳",
      "C": "e-commerce 🛒",
      "D": "m-commerce 📱"
    },
    "answer": "A"
  },
  {
    "question": "________ means converting readable text to unreadable text 🔑🔒",
    "options": {
      "A": "Conversion 🔄",
      "B": "Decryption 🔓",
      "C": "Encryption 🔐",
      "D": "Decoding 📖"
    },
    "answer": "C"
  },
  {
    "question": "A ________ is the set of planned activities designed to result in a profit in a marketplace 📊💰",
    "options": {
      "A": "Business model 🏢",
      "B": "Profit model 💵",
      "C": "Business plan 📋",
      "D": "Revenue model 📈"
    },
    "answer": "A"
  },
  {
    "question": "A Materials Requirements Planning (MRP) system is an example of 📦📊",
    "options": {
      "A": "Spot purchasing 🎯",
      "B": "A multi-tier supply chain 🔗",
      "C": "A legacy computer system 💾",
      "D": "Electronic data interchange 📡"
    },
    "answer": "B"
  },
  {
    "question": "The most prevalent online payment method is 💳🌐",
    "options": {
      "A": "Paypal 💸",
      "B": "Checks 📄",
      "C": "Credit cards 💳",
      "D": "Debit 💳"
    },
    "answer": "C"
  },
  {
    "question": "The ability to change the product to better fit the needs of the customer is called 🎨👤",
    "options": {
      "A": "Customization ✂️",
      "B": "Personalization 🧑",
      "C": "Privacy 🔒",
      "D": "Accessibility 🚪"
    },
    "answer": "A"
  },
  {
    "question": "Which of the following is a new and disruptive Web feature or service? 🌐💥",
    "options": {
      "A": "xml 📝",
      "B": "diffserv ⚙️",
      "C": "blogs 📝",
      "D": "cdma 📡"
    },
    "answer": "C"
  },
  {
    "question": "All of the following are technologies used to gather information about you online except 🕵️‍♂️❌",
    "options": {
      "A": "spyware 👁️",
      "B": "cookies 🍪",
      "C": "gmail 📧",
      "D": "anonymizers 🙈"
    },
    "answer": "C"
  }
]
  },


  {
    subject: "Data Science and ML",
    emoji: "🤖",
    color: "#8b5cf6",
    questions: [
  {
    "question": "A collection of information about a related topic is referred to as: 📚",
    "options": {
      "A": "Visualization 📊",
      "B": "Conclusion ❌",
      "C": "Analysis 🔍",
      "D": "Data 💾"
    },
    "answer": "D"
  },
  {
    "question": "Machine learning is a subset of: 🤖",
    "options": {
      "A": "Analytics 📈",
      "B": "Deep learning 🧠",
      "C": "Artificial intelligence 🌐",
      "D": "None of the above 🚫"
    },
    "answer": "C"
  },
  {
    "question": "Identify the key data science skills among the following: 🛠️",
    "options": {
      "A": "Data visualization 📊",
      "B": "Machine learning 🤖",
      "C": "Statistics 📉",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "Which is not a tool for Statistical Data Analysis? 🧮",
    "options": {
      "A": "Logistic Regression 📈",
      "B": "Histogram 📊",
      "C": "Linear and Non-linear regression 📉",
      "D": "ANOVA 🔬"
    },
    "answer": "B"
  },
  {
    "question": "What is the mean of test scores? {70, 70, 80, 85, 85, 90, 95, 95, 100, 100} ➗",
    "options": {
      "A": "87 🎯",
      "B": "90 📊",
      "C": "85 📉",
      "D": "70, 85, 95 and 100 🔢"
    },
    "answer": "A"
  },
  {
    "question": "Which of the following steps are performed by data scientists after acquiring the data? 🔄",
    "options": {
      "A": "Data integration 🔗",
      "B": "Data cleansing 🧹",
      "C": "Data mining ⛏️",
      "D": "None of these ❌"
    },
    "answer": "B"
  },
  {
    "question": "Data that lies near/outside the boundary of the cluster is called as: 🎯",
    "options": {
      "A": "Outliers 🚫",
      "B": "Key Points 🔑",
      "C": "Spike 📈",
      "D": "Cluster Head 👑"
    },
    "answer": "A"
  },
  {
    "question": "Which of the following is characteristic of Processed Data? ⚙️",
    "options": {
      "A": "Hard to be used for data analysis ❌",
      "B": "Data is not yet ready for analysis ⏳",
      "C": "Data has been replicated 🔄",
      "D": "None of these 🎯"
    },
    "answer": "D"
  },
  {
    "question": "Audio data is: 🎵",
    "options": {
      "A": "Structured 📊",
      "B": "Semi-structured 🔀",
      "C": "Unstructured 🗃️",
      "D": "Cannot be determined ❓"
    },
    "answer": "C"
  },
  {
    "question": "What does K stand for in K-means algorithm? 🔢",
    "options": {
      "A": "Number of data points 📊",
      "B": "Number of clusters 🎯",
      "C": "Number of attributes 🏷️",
      "D": "Number of iterations 🔄"
    },
    "answer": "B"
  },
  {
    "question": "The shape of the Normal Curve is: 📈",
    "options": {
      "A": "Bell Shaped 🔔",
      "B": "Flat 📏",
      "C": "Circular ⚪",
      "D": "Spiked 📌"
    },
    "answer": "A"
  },
  {
    "question": "In Standard normal distribution, the value of mode is: 📊",
    "options": {
      "A": "2 🔢",
      "B": "1 🔢",
      "C": "0 🎯",
      "D": "Not fixed ❓"
    },
    "answer": "C"
  },
  {
    "question": "What is the mean and variance for standard normal distribution? 🔢",
    "options": {
      "A": "Mean is 0 and variance is 1 🎯",
      "B": "Mean is 1 and variance is 0 📊",
      "C": "Mean is 0 and variance is ∞ ♾️",
      "D": "Mean is ∞ and variance is 0 ❌"
    },
    "answer": "A"
  },
  {
    "question": "__________ is the simplest possible measure of dispersion and equal to the difference of extreme values of the series. 📏",
    "options": {
      "A": "Range 📏",
      "B": "Standard deviation 📊",
      "C": "Mean deviation 🎯",
      "D": "Skewness 📉"
    },
    "answer": "A"
  },
  {
    "question": "Two unbiased coins are tossed. What's the probability of getting at most one head? 🪙",
    "options": {
      "A": "1/5 🔢",
      "B": "3/4 🎯",
      "C": "1/2 🪙",
      "D": "1/3 📊"
    },
    "answer": "B"
  },
  {
    "question": "The trade off between overfitting and underfitting training data is called: ⚖️",
    "options": {
      "A": "The bias-variance tradeoff 🎯",
      "B": "The tradeoff curve 📈",
      "C": "The residual sum of squares 📐",
      "D": "The null deviance 🔢"
    },
    "answer": "A"
  },
  {
    "question": "For the Karl Pearson's skewness coefficient the value of skewness must be in limits: 📊",
    "options": {
      "A": "+/-3 📏",
      "B": "+/-1 🎯",
      "C": "+/-2 🔢",
      "D": "+/-5 📈"
    },
    "answer": "A"
  },
  {
    "question": "The distribution is considered leptokurtic if: 📈",
    "options": {
      "A": "If β3 <3 🔢",
      "B": "If β3 >3 📊",
      "C": "If β2 >3 🎯",
      "D": "If β2 <2 📉"
    },
    "answer": "C"
  },
  {
    "question": "A dataset has missing values for important features. What is the best approach? 🔧",
    "options": {
      "A": "Remove the rows 🗑️",
      "B": "Impute values ✏️",
      "C": "Drop the feature ❌",
      "D": "Ignore the missing data 🙈"
    },
    "answer": "B"
  },
  {
    "question": "Which method in scikit-learn is used for dimensionality reduction? 📉",
    "options": {
      "A": "PCA() 🎯",
      "B": "StandardScaler() ⚖️",
      "C": "KMeans() 🔢",
      "D": "OneHotEncoder() 🏷️"
    },
    "answer": "A"
  },
  {
    "question": "What is the primary goal of feature engineering? 🛠️",
    "options": {
      "A": "Improve model interpretability 👁️",
      "B": "Reduce dataset size 📏",
      "C": "Enhance model performance 🚀",
      "D": "Avoid overfitting 🛡️"
    },
    "answer": "C"
  },
  {
    "question": "After training a regression model, the residuals show a clear pattern. What does this imply? 📈",
    "options": {
      "A": "Model is accurate 🎯",
      "B": "Model assumptions are violated ⚠️",
      "C": "Feature scaling is wrong 📏",
      "D": "Data is balanced ⚖️"
    },
    "answer": "B"
  },
  {
    "question": "Which Python library is used for creating basic visualizations such as line and bar charts? 📊",
    "options": {
      "A": "NumPy 🔢",
      "B": "Pandas 🐼",
      "C": "Matplotlib 📈",
      "D": "Seaborn 🎨"
    },
    "answer": "C"
  },
  {
    "question": "What does the standard deviation indicate in a dataset? 📏",
    "options": {
      "A": "The central tendency 🎯",
      "B": "The variability 📊",
      "C": "The skewness 📉",
      "D": "The correlation 🔗"
    },
    "answer": "B"
  },
  {
    "question": "In Python, which Pandas method removes rows with missing values? 🗑️",
    "options": {
      "A": "drop_duplicates() 🔄",
      "B": "dropna() 🎯",
      "C": "fillna() ✏️",
      "D": "replace() 🔁"
    },
    "answer": "B"
  },
  {
    "question": "Which preprocessing step ensures categorical variables are suitable for numerical models? 🔢",
    "options": {
      "A": "Scaling ⚖️",
      "B": "One-hot encoding 🏷️",
      "C": "Outlier detection 🚫",
      "D": "Normalization 📏"
    },
    "answer": "B"
  },
  {
    "question": "What is the primary goal of data cleaning? 🧹",
    "options": {
      "A": "To remove duplicates 🗑️",
      "B": "To visualize data 📊",
      "C": "To identify and fix data quality issues 🔧",
      "D": "To split data 🔄"
    },
    "answer": "C"
  },
  {
    "question": "Which step in the Data Science Life Cycle involves feature engineering and transformation? 🔄",
    "options": {
      "A": "Problem Definition 📋",
      "B": "Data Cleaning 🧹",
      "C": "Data Preparation 🛠️",
      "D": "Evaluation 📊"
    },
    "answer": "C"
  },
  {
    "question": "Which of the following statements is not true about neural networks? 🧠",
    "options": {
      "A": "They are class of very powerful machine learning classifiers 💪",
      "B": "Neural networks are a class of computationally inexpensive algorithms 💰",
      "C": "These are capable of fitting almost any hypotheses 📈",
      "D": "NN has lots of interconnected nodes which are organized in layers 🔗"
    },
    "answer": "B"
  },
  {
    "question": "Which of the following statements is not true about the structure of a neural network? 🔗",
    "options": {
      "A": "It consists of a set of nodes connected by links 🔗",
      "B": "Not every link in a neural network is associated with a weight ❌",
      "C": "The processing elements in the neural network are known as neurons 🧠",
      "D": "A set of thresholds or activation is used ⚡"
    },
    "answer": "B"
  },
  {
    "question": "Which of the following is false? ❌",
    "options": {
      "A": "Neural networks are artificial copy of the human brain 🧠",
      "B": "Neural networks have high computational rates than conventional computers 💻",
      "C": "Neural networks learn by examples 📚",
      "D": "None of these 🎯"
    },
    "answer": "D"
  },
  {
    "question": "Which algorithm is best suited for a binary classification problem? 🎯",
    "options": {
      "A": "K-nearest Neighbors 👥",
      "B": "Random Forest 🌳",
      "C": "Decision Trees 🌲",
      "D": "Linear Regression 📈"
    },
    "answer": "A"
  },
  {
    "question": "To which input does the learner has access to? 📚",
    "options": {
      "A": "Testing Data 🧪",
      "B": "Label Data 🏷️",
      "C": "Training Data 🎯",
      "D": "Cross-Validation Data 🔄"
    },
    "answer": "C"
  },
  {
    "question": "What is the learner's output also called? 📤",
    "options": {
      "A": "Predictor, or Hypothesis, or Classifier 🎯",
      "B": "Predictor, or Hypothesis, or Trainer 📚",
      "C": "Predictor, or Trainer, or Classifier 🤖",
      "D": "Trainer, or Hypothesis, or Classifier 🔄"
    },
    "answer": "A"
  },
  {
    "question": "What is not accessible to the learner? 🚫",
    "options": {
      "A": "Training Set 📚",
      "B": "Label Set 🏷️",
      "C": "Labeling Function 🎯",
      "D": "Domain Set 🌐"
    },
    "answer": "C"
  },
  {
    "question": "What are the possible values of A, B, and C in the following diagram? (Assuming standard ML pipeline diagram: Data → [A] → Model → [B] → Evaluation → [C])",
    "options": {
      "A": "A - Training Set, B - Domain Set, C - Cross-Validation Set 🔄",
      "B": "A - Training Set, B - Test Set, C - Cross-Validation Set 🎯",
      "C": "A - Training Set, B - Test Set, C - Domain Set 🌐",
      "D": "A - Test Set, B - Domain Set, C - Training Set 📚"
    },
    "answer": "B"
  },
  {
    "question": "The shape of the Normal Curve is: 📈",
    "options": {
      "A": "Bell Shaped 🔔",
      "B": "Flat 📏",
      "C": "Circular ⚪",
      "D": "Spiked 📌"
    },
    "answer": "A"
  },
  {
    "question": "Normal Distribution is applied for: 📊",
    "options": {
      "A": "Continuous Random Distribution 📈",
      "B": "Discrete Random Variable 🔢",
      "C": "Irregular Random Variable 🎲",
      "D": "All of these 🌟"
    },
    "answer": "A"
  },
  {
    "question": "Normal Distribution is symmetric about: 🎯",
    "options": {
      "A": "Variance 📊",
      "B": "Mean 🎯",
      "C": "Standard deviation 📏",
      "D": "Covariance 🔗"
    },
    "answer": "B"
  },
  {
    "question": "The area under a standard normal curve is: 📐",
    "options": {
      "A": "0 0️⃣",
      "B": "1 🎯",
      "C": "∞ ♾️",
      "D": "not defined ❓"
    },
    "answer": "B"
  },
  {
    "question": "Normal Distribution is also known as: 📊",
    "options": {
      "A": "Cauchy's Distribution 📈",
      "B": "Laplacian Distribution 📉",
      "C": "Gaussian Distribution 🎯",
      "D": "Lagrangian Distribution 🔢"
    },
    "answer": "C"
  },
  {
    "question": "Skewness of Normal distribution is: 📉",
    "options": {
      "A": "Negative 📉",
      "B": "Positive 📈",
      "C": "Undefined ❓",
      "D": "0 🎯"
    },
    "answer": "D"
  },
  {
    "question": "For a normal distribution its mean, median, mode are equal: 🔢",
    "options": {
      "A": "True 💡",
      "B": "False ❌",
      "C": "Sometimes True sometimes False ⚖️",
      "D": "Depending upon the data 📊"
    },
    "answer": "A"
  },
  {
    "question": "In Normal distribution, the highest value of ordinate occurs at: 📈",
    "options": {
      "A": "Mean 🎯",
      "B": "Variance 📊",
      "C": "Extremes 🏔️",
      "D": "Same value occurs at all points 🔄"
    },
    "answer": "A"
  },
  {
    "question": "The shape of the normal curve depends on its: 📊",
    "options": {
      "A": "Mean deviation 📏",
      "B": "Standard deviation 🎯",
      "C": "Quartile deviation 🔢",
      "D": "Correlation 🔗"
    },
    "answer": "B"
  },
  {
    "question": "In Standard normal distribution, the value of mode is: 📊",
    "options": {
      "A": "2 🔢",
      "B": "1 🔢",
      "C": "0 🎯",
      "D": "Not fixed ❓"
    },
    "answer": "C"
  },
  {
    "question": "What is the mean and variance for standard normal distribution? 🔢",
    "options": {
      "A": "Mean is 0 and variance is 1 🎯",
      "B": "Mean is 1 and variance is 0 📊",
      "C": "Mean is 0 and variance is ∞ ♾️",
      "D": "Mean is ∞ and variance is 0 ❌"
    },
    "answer": "A"
  },
  {
    "question": "Standard deviation is the square root of variance: 📐",
    "options": {
      "A": "True 💡",
      "B": "False ❌",
      "C": "Depending upon the standard deviation 📏",
      "D": "Depending upon the data 📊"
    },
    "answer": "A"
  },
  {
    "question": "Find the mean and variance of X: X: 0 1 2 3 4, f(x): 1/9 2/9 3/9 2/9 1/9 🧮",
    "options": {
      "A": "2, 4/3 🎯",
      "B": "3, 4/3 📊",
      "C": "2, 2/3 📉",
      "D": "3, 2/3 🔢"
    },
    "answer": "A"
  },
  {
    "question": "__________ is the simplest possible measure of dispersion and equal to the difference of extreme values of the series. 📏",
    "options": {
      "A": "Range 📏",
      "B": "Standard deviation 📊",
      "C": "Mean deviation 🎯",
      "D": "Skewness 📉"
    },
    "answer": "A"
  },
  {
    "question": "Quartile deviation is the _______ of/between the third and first quartile values. 📊",
    "options": {
      "A": "Average 🎯",
      "B": "maximum 📈",
      "C": "difference 📏",
      "D": "minimum 📉"
    },
    "answer": "A"
  },
  {
    "question": "When the values in the series do not have equal importance, we calculate: ⚖️",
    "options": {
      "A": "Mode 🔢",
      "B": "Arithmetic mean ➗",
      "C": "Weighted mean 🎯",
      "D": "None of these ❌"
    },
    "answer": "C"
  },
  {
    "question": "Which of the following is not a disadvantage of using mean? ❌",
    "options": {
      "A": "It is affected by the extreme values 📈",
      "B": "It doesn't possess the desired algebraic property 🎯",
      "C": "It cannot be computed in grouped data with open ended class intervals 📊",
      "D": "None of these ❌"
    },
    "answer": "B"
  },
  {
    "question": "For calculating the median, all the items of the series must be arranged in a/an: 📊",
    "options": {
      "A": "Descending order 📉",
      "B": "Ascending order 📈",
      "C": "Both (A) and (B) 🎯",
      "D": "None of these ❌"
    },
    "answer": "C"
  },
  {
    "question": "Mode refers to the value in the series, that occurs _______ number of times. 🔢",
    "options": {
      "A": "Minimum 📉",
      "B": "n-1, where n is the items in the list 🔢",
      "C": "at least 3 🎲",
      "D": "maximum 🎯"
    },
    "answer": "D"
  },
  {
    "question": "The value of extreme items don't influence the average for: 📊",
    "options": {
      "A": "mean ➗",
      "B": "median 🎯",
      "C": "mode 🔢",
      "D": "none of these ❌"
    },
    "answer": "B"
  },
  {
    "question": "__________ is not a measure of central tendency. 📏",
    "options": {
      "A": "mean ➗",
      "B": "mode 🔢",
      "C": "median 🎯",
      "D": "range 📐"
    },
    "answer": "D"
  },
  {
    "question": "__________ divides the data into 100 equal parts. 📊",
    "options": {
      "A": "Quartile 🔢",
      "B": "Percentile 💯",
      "C": "Decile 📏",
      "D": "None of these ❌"
    },
    "answer": "B"
  },
  {
    "question": "The sum of deviation from _________ is always 0. 🔢",
    "options": {
      "A": "mean ➗",
      "B": "mode 🔢",
      "C": "median 🎯",
      "D": "None of these ❌"
    },
    "answer": "A"
  },
  {
    "question": "Two unbiased coins are tossed. What's the probability of getting at most one head? 🪙",
    "options": {
      "A": "1/5 🎲",
      "B": "3/4 🎯",
      "C": "1/2 🪙",
      "D": "1/3 🔢"
    },
    "answer": "B"
  },
  {
    "question": "K-fold cross-validation is: 🔄",
    "options": {
      "A": "Linear in K 📈",
      "B": "Quadratic in K 📉",
      "C": "Cubic in K 🔢",
      "D": "Exponential in K ⚡"
    },
    "answer": "A"
  },
  {
    "question": "The following is a weakness of the tree based classifiers: 🌳",
    "options": {
      "A": "They are liable to over-fit or under fit models ⚖️",
      "B": "They always under-fit models 📉",
      "C": "They always overfit models 📈",
      "D": "They take a lot of time to fit models ⏰"
    },
    "answer": "A"
  },
  {
    "question": "The trade off between over fitting and under fitting training data is called: ⚖️",
    "options": {
      "A": "The bias-variance tradeoff 🎯",
      "B": "The tradeoff curve 📈",
      "C": "The residual sum of squares 📐",
      "D": "The null deviance 🔢"
    },
    "answer": "A"
  },
  {
    "question": "If the first quartile and third quartile are as 32 and 35 respectively with the median of 20, then distribution is skewed to: 📊",
    "options": {
      "A": "Lower tail ⬇️",
      "B": "Open end tail 🚫",
      "C": "Upper tail ⬆️",
      "D": "Closed end tail 🔒"
    },
    "answer": "C"
  },
  {
    "question": "If for a distribution the difference of first quartile and median is greater than difference of median and third quartile, then the distribution is classified as: 📊",
    "options": {
      "A": "Positively skewed 📈",
      "B": "Negatively skewed 📉",
      "C": "Not skewed at all ⚖️",
      "D": "Absolute open ended 🚫"
    },
    "answer": "B"
  },
  {
    "question": "If the β1 = 9, β2 = 11, then coefficient of skewness is: 📊",
    "options": {
      "A": "+/-11 ➕➖",
      "B": "+/- 1 🎯",
      "C": "+/-8 🔢",
      "D": "+/-9 📈"
    },
    "answer": "B"
  },
  {
    "question": "The measurement techniques used to measure the extent of skewness in data set values are called: 📏",
    "options": {
      "A": "Measure of tail distribution 🦚",
      "B": "Measure of median tail 🎯",
      "C": "Measure of distribution width 📐",
      "D": "Measure of skewness 📊"
    },
    "answer": "D"
  },
  {
    "question": "The statistical measures such as average deviation, standard deviation and mean are classified as part of: 📊",
    "options": {
      "A": "Moment system 🔢",
      "B": "Decile system 📏",
      "C": "Quartile system 🔢",
      "D": "Percentile system 💯"
    },
    "answer": "A"
  },
  {
    "question": "The method of calculating skewness which is based on the positions of quartiles and median in a distribution is called: 📊",
    "options": {
      "A": "Gary's coefficient of skewness 👨",
      "B": "Bowley's coefficient of skewness 🏹",
      "C": "Sharma's coefficient of skewness 🧘",
      "D": "Jack Karl's coefficient of skewness 🃏"
    },
    "answer": "B"
  },
  {
    "question": "The median of a skewed distribution is 8, third quartile is 12, first quartile is 8 and interquartile range is 4, then relative coefficient of skewness is: 📊",
    "options": {
      "A": "0.589 🎯",
      "B": "0.789 📈",
      "C": "0.689 📉",
      "D": "0.489 🔢"
    },
    "answer": "A"
  },
  {
    "question": "The moment about mean which is indication whether distribution is symmetrical or asymmetrical is considered as: 📊",
    "options": {
      "A": "Third moment 🥉",
      "B": "Second moment 🥈",
      "C": "First moment 🥇",
      "D": "Fourth moment 🏅"
    },
    "answer": "A"
  },
  {
    "question": "The frequency distribution is considered as negatively skewed if all the values of distribution moves to: 📉",
    "options": {
      "A": "Variance tail 📏",
      "B": "Upper tail ⬆️",
      "C": "Median tail 🎯",
      "D": "Lower tail ⬇️"
    },
    "answer": "D"
  },
  {
    "question": "In measures of skewness, the absolute skewness is equal to: 📊",
    "options": {
      "A": "mean - mode ➗➖🔢",
      "B": "mean - median ➗➖🎯",
      "C": "mean + mode ➗➕🔢",
      "D": "mean + median ➗➕🎯"
    },
    "answer": "A"
  },
  {
    "question": "How many dependent variables does a two-way ANOVA have? 📊",
    "options": {
      "A": "3 🔢",
      "B": "1 🎯",
      "C": "2 🔢",
      "D": "0 ❌"
    },
    "answer": "B"
  },
  {
    "question": "What type of data are best analyzed in ANOVA? 📊",
    "options": {
      "A": "Co-relational 🔗",
      "B": "Random 🎲",
      "C": "Experimental 🧪",
      "D": "Simple 🔢"
    },
    "answer": "C"
  },
  {
    "question": "Which of the following are data security considerations? 🔒",
    "options": {
      "A": "Backups 💾",
      "B": "Disposal of Data 🗑️",
      "C": "Archival Storage 📦",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "What is data privacy? 🔏",
    "options": {
      "A": "Data privacy is the protection of personal data 🛡️",
      "B": "Users who should not have access to it 🚫",
      "C": "The ability of individuals to determine who can access their personal information 👤",
      "D": "All of the above mentioned 🌟"
    },
    "answer": "D"
  },
  {
    "question": "What do you mean by data science? 🧬",
    "options": {
      "A": "Dealing with huge amounts of data to find marketing patterns is known as data science 📈",
      "B": "Extracting a meaningful insight from the data is what data science is 💡",
      "C": "It is a study that deals with a huge amount of all types of data structured, unstructured, or semi-structured 🗃️",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "For the Karl Pearson's skewness coefficient the value of skewness must be in limits: 📏",
    "options": {
      "A": "+/-3 🎯",
      "B": "+/-1 🔢",
      "C": "+/-2 📊",
      "D": "+/-5 📈"
    },
    "answer": "A"
  },
  {
    "question": "ANOVAs cannot be used when testing data collected in educational research as it cannot be applied to social science: 📚",
    "options": {
      "A": "True ❌",
      "B": "False 🚫",
      "C": "Sometimes True and sometimes False ⚖️",
      "D": "Cannot be sure ❓"
    },
    "answer": "B"
  },
  {
    "question": "What is structured data? 🗃️",
    "options": {
      "A": "Structured data is a type of data that is huge in number and has many inaccurate values 📊❌",
      "B": "Structured data is a type of data that is comparatively less in number and can be stored in proper rows and columns 📏",
      "C": "Structured data is a type of data that has inaccurate values but can be stored in rows and columns 🔄",
      "D": "None of these ❌"
    },
    "answer": "B"
  },
  {
    "question": "Data used to build a data mining model are: 🏗️",
    "options": {
      "A": "Training data 📚",
      "B": "Validation data 🔍",
      "C": "Test data 🧪",
      "D": "Hidden data 🙈"
    },
    "answer": "A"
  },
  {
    "question": "The distribution is considered leptokurtic if: 📈",
    "options": {
      "A": "If β3 <3 🔢",
      "B": "If β3 >3 📊",
      "C": "If β2 >3 🎯",
      "D": "If β2 <2 📉"
    },
    "answer": "C"
  },
  {
    "question": "Among the following examples, which would you address using a supervised learning Algorithm? 👨‍🏫",
    "options": {
      "A": "Given email labeled as spam or not spam, learn a spam filter 📧",
      "B": "Given a set of news articles found on the web, group them into set of articles about the same story 📰",
      "C": "Given a database of customer data, automatically discover market segments and group customers into different market segments 🛒",
      "D": "None of these ❌"
    },
    "answer": "A"
  },
  {
    "question": "In kurtosis, the beta is greater than three and quartile range is preferred for: 📊",
    "options": {
      "A": "Mesokurtic distribution ⚖️",
      "B": "Leptokurtic distribution 🏔️",
      "C": "Mega curve distribution 🌊",
      "D": "Platykurtic distribution 🏞️"
    },
    "answer": "B"
  },
  {
    "question": "Which of the following is a good test dataset characteristic? 🧪",
    "options": {
      "A": "Large enough to yield meaningful results 📏",
      "B": "Representative of the dataset as a whole 🎯",
      "C": "Both (A) and (B) 🔄",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "Following are the types of supervised learning: 👨‍🏫",
    "options": {
      "A": "Classification 🏷️",
      "B": "Regression 📈",
      "C": "Subgroup discovery 🔍",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "The distance metrics used in clustering: 📏",
    "options": {
      "A": "Euclidean distance ➗",
      "B": "Manhattan distance 🚕",
      "C": "Square distance 🔲",
      "D": "Both (A) and (B) 🎯"
    },
    "answer": "D"
  },
  {
    "question": "The output of training process in machine learning is: 🤖",
    "options": {
      "A": "Machine learning model 🧠",
      "B": "Machine learning algorithm ⚙️",
      "C": "Null ❌",
      "D": "Accuracy 📊"
    },
    "answer": "A"
  },
  {
    "question": "A feature F1 can take certain value: A, B, C, D, E, & F and represents grade of students from a college. Here feature type is: 🎓",
    "options": {
      "A": "Nominal 🏷️",
      "B": "Ordinal 📊",
      "C": "Categorical 🗃️",
      "D": "Boolean 🔘"
    },
    "answer": "B"
  },
  {
    "question": "Prediction is: 🔮",
    "options": {
      "A": "the result of application of specific theory or rule in a specific case 🎯",
      "B": "discipline in statistics used to find projections in multidimensional data 📐",
      "C": "value entered in database by expert 👨‍💻",
      "D": "independent of data 🚫"
    },
    "answer": "A"
  },
  {
    "question": "The kurtosis defines the peakness of the curve in the region which is: 📈",
    "options": {
      "A": "Around the variance 📏",
      "B": "Around the median 🎯",
      "C": "Around the mean ➗",
      "D": "Around the mode 🔢"
    },
    "answer": "C"
  },
  {
    "question": "Some companies want to segment their customers into distinct groups, this is an example of: 🛒",
    "options": {
      "A": "Supervised learning 👨‍🏫",
      "B": "Reinforcement learning 🎮",
      "C": "Unsupervised learning 🔓",
      "D": "Data extraction 📤"
    },
    "answer": "C"
  },
  {
    "question": "You are given seismic data and you want to predict next earthquake, this is an example of: 🌍",
    "options": {
      "A": "Supervised learning 👨‍🏫",
      "B": "Reinforcement learning 🎮",
      "C": "Unsupervised learning 🔓",
      "D": "Dimensionality reduction 📉"
    },
    "answer": "A"
  },
  {
    "question": "Imagine a Newly-Born starts to learn walking. It will try to find a suitable policy to learn walking after repeated falling and getting up. Specify what type of machine learning is suited? 👶",
    "options": {
      "A": "Classification 🏷️",
      "B": "Regression 📈",
      "C": "k-means algorithm 🔢",
      "D": "Reinforcement learning 🎮"
    },
    "answer": "D"
  },
  {
    "question": "In multiclass classification number of classes must be: 🏷️",
    "options": {
      "A": "less than two ❌",
      "B": "equals to two 🔢",
      "C": "greater than two 🎯",
      "D": "Both (A) and (B) 🔄"
    },
    "answer": "C"
  },
  {
    "question": "A perceptron adds up all the weighted inputs it receives, and if it exceeds a certain value, it outputs a 1, otherwise it just outputs a 0: 🧠",
    "options": {
      "A": "true 💡",
      "B": "false ❌",
      "C": "sometimes - it can also output intermediate values as well 🔄",
      "D": "can't say ❓"
    },
    "answer": "A"
  },
  {
    "question": "Analysis of variance performs which type of test? 📊",
    "options": {
      "A": "F-test 🎯",
      "B": "t-test 📏",
      "C": "z-test 📈",
      "D": "xy-test ❌"
    },
    "answer": "A"
  },
  {
    "question": "You trained a binary classifier model which gives very high accuracy on the training data, but much lower accuracy on validation data. Which is FALSE? ❌",
    "options": {
      "A": "This is an instance of over-fitting 📈",
      "B": "This is an instance of under-fitting 📉",
      "C": "The training was not well regularized ⚠️",
      "D": "The training and testing examples may be sampled from different distributions 🔄"
    },
    "answer": "B"
  },
  {
    "question": "Which statement about outliers is TRUE? 🚫",
    "options": {
      "A": "Outliers should be part of the training dataset but should not be present in the test data 🔄",
      "B": "Outliers should be identified and removed from a dataset 🗑️",
      "C": "The nature of the problem determines how outliers are used ⚖️",
      "D": "Outliers should be part of the test dataset but should not be present in the training data 🔄"
    },
    "answer": "C"
  },
  {
    "question": "Why is stationarity important in time series analysis? ⏰",
    "options": {
      "A": "It ensures data completeness 📋",
      "B": "It stabilizes variance ⚖️",
      "C": "It allows for accurate forecasting 🔮",
      "D": "It reduces data size 📏"
    },
    "answer": "C"
  },
  {
    "question": "Which of the following is commonly used to detect seasonality in time series data? 📅",
    "options": {
      "A": "Histogram 📊",
      "B": "Autocorrelation 🔗",
      "C": "Scatter plot 📍",
      "D": "PCA 📉"
    },
    "answer": "B"
  },
  {
    "question": "What is a key characteristic of time series data? ⏱️",
    "options": {
      "A": "Random observations 🎲",
      "B": "Data without timestamps 🚫",
      "C": "Sequential observations over time 📅",
      "D": "Categorical data 🏷️"
    },
    "answer": "C"
  },
  {
    "question": "A dataset has missing values for important features. What is the best approach to address this? 🔧",
    "options": {
      "A": "Remove the rows 🗑️",
      "B": "Impute values ✏️",
      "C": "Drop the feature ❌",
      "D": "Ignore the missing data 🙈"
    },
    "answer": "B"
  },
  {
    "question": "A numerical feature has a skewed distribution. What transformation can address this? 📊",
    "options": {
      "A": "Log transformation 📈",
      "B": "Drop the feature ❌",
      "C": "One-hot encoding 🔢",
      "D": "Normalize values ⚖️"
    },
    "answer": "A"
  },
  {
    "question": "A dataset has highly correlated features. How should you handle this issue? 🔗",
    "options": {
      "A": "Normalize features ⚖️",
      "B": "Drop one of the correlated features 🗑️",
      "C": "Encode features 🔢",
      "D": "Use PCA 📉"
    },
    "answer": "B"
  },
  {
    "question": "Which method in scikit-learn is used for dimensionality reduction? 📉",
    "options": {
      "A": "PCA() 🎯",
      "B": "StandardScaler() ⚖️",
      "C": "KMeans() 🔢",
      "D": "OneHotEncoder() 🏷️"
    },
    "answer": "A"
  },
  {
    "question": "What is the main purpose of sampling in data science? 🎲",
    "options": {
      "A": "To reduce data redundancy 🔄",
      "B": "To avoid collecting data 🙈",
      "C": "To make inferences about a population using a subset 📊",
      "D": "To create complex models 🏗️"
    },
    "answer": "C"
  },
  {
    "question": "Which scikit-learn function is used to normalize data? ⚖️",
    "options": {
      "A": "normalize() 🎯",
      "B": "standardize() 📏",
      "C": "scale() 🔢",
      "D": "transform() 🔄"
    },
    "answer": "A"
  },
  {
    "question": "When should feature extraction be used instead of feature selection? 🔧",
    "options": {
      "A": "When raw features are sufficient 🧮",
      "B": "When features need transformation 🔄",
      "C": "When data is balanced ⚖️",
      "D": "When model accuracy is high 📈"
    },
    "answer": "B"
  },
  {
    "question": "What is feature selection? 🎯",
    "options": {
      "A": "Adding new features ➕",
      "B": "Choosing the best features 🎯",
      "C": "Removing outliers 🗑️",
      "D": "Scaling data 📏"
    },
    "answer": "B"
  },
  {
    "question": "Why is feature scaling important in machine learning? ⚖️",
    "options": {
      "A": "Reduces model size 📏",
      "B": "Improves convergence during training 🏃",
      "C": "Handles missing values ❓",
      "D": "Reduces overfitting 🚫"
    },
    "answer": "B"
  },
  {
    "question": "Which technique is commonly used to handle categorical data in feature engineering? 🏷️",
    "options": {
      "A": "Normalization ⚖️",
      "B": "One-hot encoding 🔢",
      "C": "PCA 📉",
      "D": "Standardization 📏"
    },
    "answer": "B"
  },
  {
    "question": "What is the primary goal of feature engineering in machine learning? 🛠️",
    "options": {
      "A": "Improve model interpretability 👁️",
      "B": "Reduce dataset size 📏",
      "C": "Enhance model performance 🚀",
      "D": "Avoid overfitting 🛡️"
    },
    "answer": "C"
  },
  {
    "question": "After applying KMeans, one cluster has very few data points. What should you consider next? 🔢",
    "options": {
      "A": "Increase cluster count ➕",
      "B": "Decrease cluster count ➖",
      "C": "Visualize clusters 👁️",
      "D": "Change the algorithm 🔄"
    },
    "answer": "B"
  },
  {
    "question": "A clustering model produces inconsistent results. What could be the likely cause? 🔄",
    "options": {
      "A": "Wrong feature scaling ⚖️",
      "B": "Labeled data 🏷️",
      "C": "High accuracy 📈",
      "D": "Balanced dataset ⚖️"
    },
    "answer": "A"
  },
  {
    "question": "A supervised model performs poorly on unseen data. What is the likely issue? 🤔",
    "options": {
      "A": "Data leakage 🔓",
      "B": "Underfitting 📉",
      "C": "Incorrect loss function 📊",
      "D": "Missing labels 🏷️"
    },
    "answer": "B"
  },
  {
    "question": "How do you specify the number of clusters in the KMeans algorithm using scikit-learn? 🔢",
    "options": {
      "A": "KMeans(n_clusters=n) 🎯",
      "B": "KMeans(clusters=n) ❌",
      "C": "KMeans(n=n) ❌",
      "D": "KMeans(n_cluster=n) ❌"
    },
    "answer": "A"
  },
  {
    "question": "In systematic sampling, if the sampling interval is 10, what does it mean? 🔢",
    "options": {
      "A": "Every 10th element is included in the sample 🎯",
      "B": "Only 10 elements are sampled ❌",
      "C": "10 elements are skipped after each selection 🔄",
      "D": "The first 10 elements are taken 🥇"
    },
    "answer": "A"
  },
  {
    "question": "Which of the following techniques ensures each subgroup in the population is properly represented? 📊",
    "options": {
      "A": "Cluster Sampling 🗃️",
      "B": "Systematic Sampling 🔢",
      "C": "Stratified Sampling 🎯",
      "D": "Snowball Sampling ⛄"
    },
    "answer": "C"
  },
  {
    "question": "Which Python library provides the K-Means function for clustering? 🐍",
    "options": {
      "A": "NumPy 🔢",
      "B": "Pandas 🐼",
      "C": "scikit-learn 🤖",
      "D": "Matplotlib 📊"
    },
    "answer": "C"
  },
  {
    "question": "Why is clustering considered an unsupervised learning technique? 🔓",
    "options": {
      "A": "It requires labeled data 🏷️",
      "B": "It uses supervised models 👨‍🏫",
      "C": "It finds patterns in unlabeled data 🎯",
      "D": "It predicts outcomes 🔮"
    },
    "answer": "C"
  },
  {
    "question": "What metric is commonly used to evaluate a regression model in supervised learning? 📈",
    "options": {
      "A": "Accuracy 🎯",
      "B": "Mean Squared Error (MSE) 📈",
      "C": "Precision 📏",
      "D": "Silhouette score 🔢"
    },
    "answer": "B"
  },
  {
    "question": "Which task is best suited for unsupervised learning? 🔓",
    "options": {
      "A": "Predicting house prices 🏠",
      "B": "Identifying customer segments 🛒",
      "C": "Spam classification 📧",
      "D": "Stock price prediction 📈"
    },
    "answer": "B"
  },
  {
    "question": "Which of the following is an example of a supervised learning algorithm? 👨‍🏫",
    "options": {
      "A": "K-Means 🔢",
      "B": "Linear Regression 📈",
      "C": "Hierarchical Clustering 🌳",
      "D": "PCA 📉"
    },
    "answer": "B"
  },
  {
    "question": "What is the key difference between supervised and unsupervised learning? 🔑",
    "options": {
      "A": "Supervised uses labeled data, unsupervised does not 🎯",
      "B": "Both use labeled data ❌",
      "C": "Both use unlabeled data ❌",
      "D": "Unsupervised requires labels ❌"
    },
    "answer": "A"
  },
  {
    "question": "After training a regression model, the residuals show a clear pattern. What does this imply? 📈",
    "options": {
      "A": "Model is accurate 🤖",
      "B": "Model assumptions are violated ⚠️",
      "C": "Feature scaling is wrong ⚖️",
      "D": "Data is balanced ⚖️"
    },
    "answer": "B"
  },
  {
    "question": "A classification model achieves 99% accuracy on the training set but only 60% on the test set. What is the issue? 📊",
    "options": {
      "A": "Overfitting 🎯",
      "B": "Underfitting ❌",
      "C": "Data imbalance ⚖️",
      "D": "Feature scaling 📏"
    },
    "answer": "A"
  },
  {
    "question": "A model's predictions have high bias. What could be the likely issue? 🎯",
    "options": {
      "A": "Overfitting 📈",
      "B": "Underfitting 📉",
      "C": "Feature scaling ⚖️",
      "D": "Incorrect testing data 🧪"
    },
    "answer": "B"
  },
  {
    "question": "Which scikit-learn function is used to calculate the accuracy of a classification model? 📊",
    "options": {
      "A": "classification_report 📋",
      "B": "accuracy_score 🎯",
      "C": "score 🎲",
      "D": "confusion_matrix 🔢"
    },
    "answer": "B"
  },
  {
    "question": "Which of the following is a probability sampling method? 🎲",
    "options": {
      "A": "Convenience Sampling 🏪",
      "B": "Judgmental Sampling 👨‍⚖️",
      "C": "Simple Random Sampling 🎯",
      "D": "Quota Sampling 📊"
    },
    "answer": "C"
  },
  {
    "question": "Which Python library provides the train_test_split function? 🐍",
    "options": {
      "A": "NumPy 🔢",
      "B": "Pandas 🐼",
      "C": "Scikit-learn 🤖",
      "D": "Matplotlib 📊"
    },
    "answer": "C"
  },
  {
    "question": "Why is it important to split data into training and testing datasets? 🔄",
    "options": {
      "A": "To increase dataset size 📈",
      "B": "To evaluate model performance on unseen data 🔮",
      "C": "To clean data 🧹",
      "D": "To preprocess features 🛠️"
    },
    "answer": "B"
  },
  {
    "question": "What is the purpose of a loss function in machine learning? 📉",
    "options": {
      "A": "To evaluate model predictions 🎯",
      "B": "To split datasets 🔄",
      "C": "To improve visualization 📊",
      "D": "To standardize data ⚖️"
    },
    "answer": "A"
  },
  {
    "question": "What is overfitting in machine learning? 📈",
    "options": {
      "A": "Model performs poorly on training data ❌",
      "B": "Model performs well on training data but poorly on new data 🎯",
      "C": "Model is too simple 🔢",
      "D": "Model has no bias ⚖️"
    },
    "answer": "B"
  },
  {
    "question": "Which of the following is a supervised learning algorithm? 👨‍🏫",
    "options": {
      "A": "K-Means 🔢",
      "B": "Decision Trees 🌳",
      "C": "DBSCAN 🔍",
      "D": "Principal Component Analysis 📉"
    },
    "answer": "B"
  },
  {
    "question": "What is the primary objective of machine learning? 🎯",
    "options": {
      "A": "To clean data 🧹",
      "B": "To make predictions based on data 🔮",
      "C": "To create databases 🗃️",
      "D": "To improve hardware 💻"
    },
    "answer": "B"
  },
  {
    "question": "A line chart is difficult to interpret due to too many data points. What is the best approach to simplify it? 📈",
    "options": {
      "A": "Aggregate data 📊",
      "B": "Remove the chart ❌",
      "C": "Use larger axes 📏",
      "D": "Switch to bar chart 📊"
    },
    "answer": "A"
  },
  {
    "question": "A scatter plot shows overlapping points, making it hard to interpret. What can improve its readability? 📍",
    "options": {
      "A": "Increase marker size 🔘",
      "B": "Add jitter 🎲",
      "C": "Use smaller axes 📏",
      "D": "Change chart type 🔄"
    },
    "answer": "B"
  },
  {
    "question": "A pie chart in Matplotlib displays incorrect proportions. What could be the issue? 🥧",
    "options": {
      "A": "Wrong data labels 🏷️",
      "B": "Missing data ❓",
      "C": "Incorrect sum of values ➗",
      "D": "Invalid chart type ❌"
    },
    "answer": "C"
  },
  {
    "question": "Which Python library allows for creating highly interactive visualizations with minimal coding? 🐍",
    "options": {
      "A": "Seaborn 📊",
      "B": "Matplotlib 📈",
      "C": "Plotly 🎮",
      "D": "Pandas 🐼"
    },
    "answer": "C"
  },
  {
    "question": "How do you create a bar chart in Matplotlib? 📊",
    "options": {
      "A": "plt.bar(x, y) 🎯",
      "B": "plt.plot(x, y) 📈",
      "C": "plt.hist(x) 📊",
      "D": "plt.scatter(x, y) 📍"
    },
    "answer": "A"
  },
  {
    "question": "Which Matplotlib function is used to create a simple line chart? 📈",
    "options": {
      "A": "plt.scatter() 📍",
      "B": "plt.line() ❌",
      "C": "plt.plot() 🎯",
      "D": "plt.bar() 📊"
    },
    "answer": "C"
  },
  {
    "question": "Which of the following is a common mistake in data visualization? ❌",
    "options": {
      "A": "Using appropriate scales 📏",
      "B": "Choosing the right chart type 💡",
      "C": "Overloading charts with data 🗃️",
      "D": "Labeling axes 🏷️"
    },
    "answer": "C"
  },
  {
    "question": "What does a boxplot help identify in a dataset? 📦",
    "options": {
      "A": "Outliers 🚫",
      "B": "Correlations 🔗",
      "C": "Clusters 🔢",
      "D": "Trends 📈"
    },
    "answer": "A"
  },
  {
    "question": "Which chart is most effective for comparing parts of a whole? 🥧",
    "options": {
      "A": "Scatter plot 📍",
      "B": "Pie chart 🥧",
      "C": "Boxplot 📦",
      "D": "Line chart 📈"
    },
    "answer": "B"
  },
  {
    "question": "Which visualization is best suited for showing data distribution? 📊",
    "options": {
      "A": "Line chart 📈",
      "B": "Scatter plot 📍",
      "C": "Histogram 📊",
      "D": "Pie chart 🥧"
    },
    "answer": "C"
  },
  {
    "question": "What is the primary purpose of data visualization? 👁️",
    "options": {
      "A": "To analyze data 🔍",
      "B": "To predict outcomes 🔮",
      "C": "To represent data visually 📊",
      "D": "To encode data 🔢"
    },
    "answer": "C"
  },
  {
    "question": "Which of the following is NOT an advantage of sampling? ❌",
    "options": {
      "A": "Cost-effective 💰",
      "B": "Faster data collection ⏩",
      "C": "Full population coverage 🌍",
      "D": "Manageable data size 📏"
    },
    "answer": "C"
  },
  {
    "question": "A dataset's p-value is 0.01 after running a statistical test. What does this imply? 📊",
    "options": {
      "A": "Strong evidence against the null hypothesis 🔬",
      "B": "No evidence against the null hypothesis ❌",
      "C": "Data is normally distributed 🔔",
      "D": "Data has no variance ⚖️"
    },
    "answer": "A"
  },
  {
    "question": "A dataset has a column with skewed numerical data. What is the best approach to normalize it? 📊",
    "options": {
      "A": "Use log transformation 📈",
      "B": "Drop outliers 🗑️",
      "C": "Encode values 🔢",
      "D": "Use boxplot 📦"
    },
    "answer": "A"
  },
  {
    "question": "What is the main drawback of non-probability sampling methods? ❌",
    "options": {
      "A": "They are too expensive 💰",
      "B": "They require complex algorithms 🤖",
      "C": "They do not allow generalization to the population 🌍",
      "D": "They are always biased 🎯"
    },
    "answer": "C"
  },
  {
    "question": "In cluster sampling, the population is divided into: 🗃️",
    "options": {
      "A": "Equal-sized samples ⚖️",
      "B": "Strata based on characteristics 🎯",
      "C": "Clusters, then some clusters are randomly selected 🧮",
      "D": "Individual observations only 👤"
    },
    "answer": "C"
  },
  {
    "question": "What assumption is made about data in a parametric statistical test? 📊",
    "options": {
      "A": "Data is categorical 🏷️",
      "B": "Data follows a normal distribution 🔔",
      "C": "Data has no missing values ❓",
      "D": "Data is continuous 📏"
    },
    "answer": "B"
  },
  {
    "question": "What type of statistical analysis helps identify relationships between variables? 🔗",
    "options": {
      "A": "Correlation analysis 📈",
      "B": "Variance analysis 📊",
      "C": "Skewness analysis 📉",
      "D": "Descriptive statistic 📋"
    },
    "answer": "A"
  },
  {
    "question": "What does the standard deviation indicate in a dataset? 📏",
    "options": {
      "A": "The central tendency 🎯",
      "B": "The variability 📊",
      "C": "The skewness 📉",
      "D": "The correlation 🔗"
    },
    "answer": "B"
  },
  {
    "question": "When is the p-value considered statistically significant in hypothesis testing? 📊",
    "options": {
      "A": "When p > 0.05 ❌",
      "B": "When p < 0.05 🎯",
      "C": "When p = 0.1 🔢",
      "D": "When p > 1 ❌"
    },
    "answer": "B"
  },
  {
    "question": "Which statistical measure represents the spread of data values around the mean? 📏",
    "options": {
      "A": "Variance 📊",
      "B": "Mean ➗",
      "C": "Median 🎯",
      "D": "Skewness 📉"
    },
    "answer": "A"
  },
  {
    "question": "What is the primary purpose of hypothesis testing in statistics? 🔬",
    "options": {
      "A": "To clean data 🧹",
      "B": "To test assumptions 🎯",
      "C": "To visualize trends 📈",
      "D": "To encode features 🔢"
    },
    "answer": "B"
  },
  {
    "question": "During EDA, an outlier is identified in a boxplot. What is the best course of action? 🔍",
    "options": {
      "A": "Remove the outlier 🗑️",
      "B": "Keep the outlier 💾",
      "C": "Investigate the outlier 🔍",
      "D": "Ignore the outlier 🙈"
    },
    "answer": "C"
  },
  {
    "question": "A dataset shows a perfect correlation of +1 between two variables. What is the likely issue? 🔗",
    "options": {
      "A": "Multicollinearity 📊",
      "B": "Outliers 🚫",
      "C": "No issue 🚫",
      "D": "Wrong visualization 📉"
    },
    "answer": "A"
  },
  {
    "question": "If a dataset contains missing values in a column, what is the simplest way to visualize its impact? 📊",
    "options": {
      "A": "Use a scatter plot 📍",
      "B": "Use a heatmap 🔥",
      "C": "Drop the column 🗑️",
      "D": "Fill missing values ✏️"
    },
    "answer": "B"
  },
  {
    "question": "Which visualization technique is useful for identifying clusters in data during EDA? 🔍",
    "options": {
      "A": "Scatter plot 📍",
      "B": "Heatmap 🔥",
      "C": "Boxplot 📦",
      "D": "Pairplot 🔢"
    },
    "answer": "A"
  },
  {
    "question": "How do you compute the correlation matrix for a DataFrame in Python? 🐍",
    "options": {
      "A": "df.corr() 📊",
      "B": "df.describe() 📋",
      "C": "df.cov() 📏",
      "D": "df.plot() 📈"
    },
    "answer": "A"
  },
  {
    "question": "Which Python library is used for creating basic visualizations such as line and bar charts? 📊",
    "options": {
      "A": "NumPy 🔢",
      "B": "Pandas 🐼",
      "C": "Matplotlib 📈",
      "D": "Seaborn 🎨"
    },
    "answer": "C"
  },
  {
    "question": "Why is it critical to detect multicollinearity during EDA? 🔍",
    "options": {
      "A": "It improves model accuracy 📈",
      "B": "It ensures independence among predictors 🎯",
      "C": "It removes missing values ❓",
      "D": "It selects important features 🔢"
    },
    "answer": "B"
  },
  {
    "question": "Which visualization is best suited for analyzing the relationship between two numerical variables? 📊",
    "options": {
      "A": "Histogram 📊",
      "B": "Boxplot 📦",
      "C": "Scatter plot 📍",
      "D": "Bar chart 📊"
    },
    "answer": "C"
  },
  {
    "question": "What is the significance of identifying skewness in data during EDA? 📉",
    "options": {
      "A": "It helps in feature scaling ⚖️",
      "B": "It determines model type 🤖",
      "C": "It affects data distribution assumptions 🔔",
      "D": "It improves visualization 📊"
    },
    "answer": "C"
  },
  {
    "question": "Which of the following is a common technique used during EDA? 🔍",
    "options": {
      "A": "Clustering 🔢",
      "B": "PCA 📉",
      "C": "Descriptive statistics 📋",
      "D": "Feature selection 🎯"
    },
    "answer": "C"
  },
  {
    "question": "What is the primary goal of Exploratory Data Analysis? 🎯",
    "options": {
      "A": "Predict outcomes 🔮",
      "B": "Summarize data characteristics 📊",
      "C": "Visualize predictions 📈",
      "D": "Build models 🏗️"
    },
    "answer": "B"
  },
  {
    "question": "After standardizing a dataset, a model performs poorly. What could be a possible issue? ⚖️",
    "options": {
      "A": "Data leakage 🔓",
      "B": "Over fitting 📈",
      "C": "Outliers 🚫",
      "D": "Incorrect scaling 📏"
    },
    "answer": "A"
  },
  {
    "question": "A column contains both numerical and non-numerical values. How should you preprocess it for numerical analysis? 🔢",
    "options": {
      "A": "Drop the column 🗑️",
      "B": "Impute missing values ✏️",
      "C": "Use encoding techniques 🏷️",
      "D": "Normalize data ⚖️"
    },
    "answer": "C"
  },
  {
    "question": "A dataset has duplicate rows causing issues in analysis. Which Pandas method will you use to fix this? 🐼",
    "options": {
      "A": "drop_duplicates() 🗑️",
      "B": "dropna() ❓",
      "C": "fillna() ✏️",
      "D": "groupby() 📊"
    },
    "answer": "A"
  },
  {
    "question": "Which Python library is best suited for outlier detection using clustering techniques? 🐍",
    "options": {
      "A": "Scikit-learn 🤖",
      "B": "NumPy 🔢",
      "C": "Pandas 🐼",
      "D": "Matplotlib 📊"
    },
    "answer": "A"
  },
  {
    "question": "What is the first step in stratified sampling? 📊",
    "options": {
      "A": "Select clusters 🗃️",
      "B": "Define strata 🎯",
      "C": "Choose a sample size 🔢",
      "D": "Collect data 📥"
    },
    "answer": "B"
  },
  {
    "question": "In Python, which Pandas method removes rows with missing values? 🐼",
    "options": {
      "A": "drop_duplicates() 🗑️",
      "B": "dropna() ❓",
      "C": "fillna() ✏️",
      "D": "replace() 🔄"
    },
    "answer": "B"
  },
  {
    "question": "When dealing with a dataset containing multiple irrelevant features, which method is most effective? 🎯",
    "options": {
      "A": "Data cleaning 🧹",
      "B": "Feature selection 🔢",
      "C": "One-hot encoding 🏷️",
      "D": "Standardization ⚖️"
    },
    "answer": "B"
  },
  {
    "question": "Which preprocessing step ensures categorical variables are suitable for numerical models? 🔢",
    "options": {
      "A": "Scaling ⚖️",
      "B": "One-hot encoding 🏷️",
      "C": "Outlier detection 🚫",
      "D": "Normalization 📏"
    },
    "answer": "B"
  },
  {
    "question": "What is the effect of standardization in data preprocessing? ⚖️",
    "options": {
      "A": "It removes duplicates 🗑️",
      "B": "It ensures data values are centered around zero 0️⃣",
      "C": "It improves data cleaning 🧹",
      "D": "It removes missing values ❓"
    },
    "answer": "B"
  },
  {
    "question": "Which technique can be used to handle outliers in numerical data? 🚫",
    "options": {
      "A": "Removing them 🗑️",
      "B": "Normalizing data ⚖️",
      "C": "Imputation ✏️",
      "D": "All of the above 🌟"
    },
    "answer": "D"
  },
  {
    "question": "Why is handling missing values important during data preprocessing? ❓",
    "options": {
      "A": "It ensures model interpretability 👁️",
      "B": "It improves model accuracy 📈",
      "C": "It increases data storage 💾",
      "D": "It simplifies code 💻"
    },
    "answer": "B"
  },
  {
    "question": "What is the primary goal of data cleaning in Data Science? 🧹",
    "options": {
      "A": "To remove duplicates 🗑️",
      "B": "To visualize data 📊",
      "C": "To identify and fix data quality issues 🔧",
      "D": "To split data 🔄"
    },
    "answer": "C"
  },
  {
    "question": "A Data Scientist's model performs poorly in production compared to testing. What could be the most likely cause? 🔮",
    "options": {
      "A": "Over fitting 📈",
      "B": "Clean data 🧹",
      "C": "Balanced dataset ⚖️",
      "D": "Simple model 🔢"
    },
    "answer": "A"
  },
  {
    "question": "In Python, which library is commonly used for splitting datasets during the Data Preparation phase? 🐍",
    "options": {
      "A": "Scikit-learn 🤖",
      "B": "NumPy 🔢",
      "C": "Pandas 🐼",
      "D": "Matplotlib 📊"
    },
    "answer": "A"
  },
  {
    "question": "What is a major challenge during the evaluation phase of the Data Science Life Cycle? ⚠️",
    "options": {
      "A": "Selecting the right metric 🎯",
      "B": "Collecting data 📥",
      "C": "Training models 🤖",
      "D": "Understanding business goals 🏢"
    },
    "answer": "A"
  },
  {
    "question": "Why is the deployment phase critical in the Data Science Life Cycle? 🚀",
    "options": {
      "A": "It ensures the model is trained 🤖",
      "B": "It makes the model accessible for users 👥",
      "C": "It removes irrelevant data 🗑️",
      "D": "It generates reports 📄"
    },
    "answer": "B"
  },
  {
    "question": "Which step in the Data Science Life Cycle involves feature engineering and transformation? 🔄",
    "options": {
      "A": "Problem Definition 📋",
      "B": "Data Cleaning 🧹",
      "C": "Data Preparation 🛠️",
      "D": "Evaluation 📊"
    },
    "answer": "C"
  },
  {
    "question": "What happens during the Data Collection phase of the Data Science Life Cycle? 📥",
    "options": {
      "A": "Data is stored in a database 💾",
      "B": "Data is gathered from multiple sources 🌐",
      "C": "Data is split into training and test 🔄",
      "D": "Data is visualized 📊"
    },
    "answer": "B"
  }
]
  },
  {
    subject: "Information & Cyber Security",
    emoji: "🔐",
    color: "#ef4444",
    questions: [
  {
    "question": "Which of the following refers to exploring the appropriate, ethical behaviors related to the online environment and digital media platform? 🌐",
    "options": {
      "A": "Cyber low 📜",
      "B": "Cyberethics ⚖️",
      "C": "Cybersecurity 🔐",
      "D": "Cybersafety 🛡️"
    },
    "answer": "B"
  },
  {
    "question": "What is primary goal of ethical hacker? 👨‍💻",
    "options": {
      "A": "Avoiding detection 🕵️",
      "B": "Testing security vulnerability 🔍",
      "C": "Resolving security vulnerabilities 🛠️",
      "D": "Determining return on investment for security measures 📊"
    },
    "answer": "B"
  },
  {
    "question": "In the computer networks, the encryption techniques are primarily used for improving the 🔐",
    "options": {
      "A": "Security 🛡️",
      "B": "Performance ⚡",
      "C": "Reliability 🔄",
      "D": "Longevity ⏳"
    },
    "answer": "A"
  },
  {
    "question": "Under Information Technology Act the purpose of digital signature is to: 📜",
    "options": {
      "A": "Forge the document ✍️❌",
      "B": "Photocopy the document 📄",
      "C": "Digital Printing 🖨️",
      "D": "Ensure integrity 🛡️"
    },
    "answer": "D"
  },
  {
    "question": "Hash function are used for: 🔢",
    "options": {
      "A": "Encryption 🔐",
      "B": "Decryption 🔓",
      "C": "Digital signature ✍️",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "In Wi-Fi Security, which of the following protocol is more used? 📶",
    "options": {
      "A": "WPA 🔒",
      "B": "WPA2 🔒📶",
      "C": "WPS ⚠️",
      "D": "Both (A) and (C) 🔄"
    },
    "answer": "B"
  },
  {
    "question": "Which one of the following refers to the technique used for verifying the integrity of the message? ✅",
    "options": {
      "A": "Digital signature ✍️",
      "B": "Decryption algorithm 🔓",
      "C": "Protocol 📡",
      "D": "Message Digest 🔢"
    },
    "answer": "D"
  },
  {
    "question": "Hash functions guarantee message integrity and that the message has not been 🔢✅",
    "options": {
      "A": "Over view 👁️",
      "B": "Replaced 🔄",
      "C": "Violated ⚠️",
      "D": "Changed ✏️"
    },
    "answer": "D"
  },
  {
    "question": "What is the most important difference between ethical hacker and cracker? 👨‍💻 vs 👿",
    "options": {
      "A": "The ethical hacker has authorization from the owner of the target 💣📜",
      "B": "The ethical hacker is just a cracker who is getting paid 💰",
      "C": "The ethical hacker does not use the same techniques or skills as a cracker ❌",
      "D": "The ethical hacker does it strictly for financial motives unlike a cracker 💵"
    },
    "answer": "A"
  },
  {
    "question": "Which one of the following refers to the technique used for verifying the integrity of the message? ✅",
    "options": {
      "A": "Digital signature ✍️",
      "B": "Decryption algorithm 🔓",
      "C": "Protocol 📡",
      "D": "Message Digest 🔢"
    },
    "answer": "D"
  },
  {
    "question": "Which of the following refers to the violation of the principle if a computer is no more accessible? 🖥️❌",
    "options": {
      "A": "Access control 🔐",
      "B": "Confidentiality 🤐",
      "C": "Availability ⏳",
      "D": "All of the above 🔄"
    },
    "answer": "C"
  },
  {
    "question": "What is a firewall? 🔥🧱",
    "options": {
      "A": "Firewalls are network-based security measures that control the flow of incoming and outgoing traffic 🚦",
      "B": "A firewall is a program that encrypts all the programs that access the Internet 🔐",
      "C": "A firewall is a program that keeps other programs from using the network 🚫",
      "D": "Firewalls are interrupts that automatically disconnect from the internet when a threat appears ⚡"
    },
    "answer": "A"
  },
  {
    "question": "Which of the following involves submitting as many requests as possible to a single Internet computer or service, overloading it and preventing it from servicing legitimate requests? 💣",
    "options": {
      "A": "Distributed denial-of-service attacks 🌊",
      "B": "Backdoor 🚪",
      "C": "Masquerading 🎭",
      "D": "Phishing 🎣"
    },
    "answer": "A"
  },
  {
    "question": "Which of the following are possible security threats? ⚠️",
    "options": {
      "A": "Illegitimate use 👤❌",
      "B": "Backdoors 🚪",
      "C": "Masquerading 🎭",
      "D": "All of the given options are correct 💡"
    },
    "answer": "D"
  },
  {
    "question": "Digital signatures provide which of the following? ✍️",
    "options": {
      "A": "Authentication 🆔",
      "B": "Non-repudiation 🚫🙅",
      "C": "Integrity protection 🛡️",
      "D": "All of the given options are correct 💡"
    },
    "answer": "D"
  },
  {
    "question": "Which of the following is valid difference between a Virus and a Spyware? 🦠 vs 👁️",
    "options": {
      "A": "Spyware damages data and also steals sensitive private information 💔",
      "B": "Virus damages data, Spyware steals sensitive private information 💔👁️",
      "C": "Spyware damages data, Virus steals sensitive private information 🔄",
      "D": "Virus damages data and also steals sensitive private information 💔👁️"
    },
    "answer": "B"
  },
  {
    "question": "What is a computer virus? 🦠",
    "options": {
      "A": "A virus is the same as a cookie in that it is stored on your computer against your permission 🍪",
      "B": "A virus is friendly software that is simply mislabeled 😇",
      "C": "Malicious software that merely stays dormant on your computer 💤",
      "D": "Malicious software that inserts itself into other programs 🔌"
    },
    "answer": "D"
  },
  {
    "question": "Certification of Digital signature by an independent authority is needed because ✍️✅",
    "options": {
      "A": "It is safe 🛡️",
      "B": "It gives confidence to a business 💼",
      "C": "The authority checks and assures customers that the public key indeed belongs to the business which claims its ownership 🔑🗝️",
      "D": "Private key claimed by a sender may not be actually his ❌"
    },
    "answer": "C"
  },
  {
    "question": "The responsibility of a certification authority for digital signature is to authenticate the: 📜✅",
    "options": {
      "A": "Hash function used 🔢",
      "B": "Private keys of subscribers 🔑🤫",
      "C": "Public keys of subscribers 🔑🌍",
      "D": "Key used in DES 🔐"
    },
    "answer": "C"
  },
  {
    "question": "Hashed message is signed by a sender using 🔢✍️",
    "options": {
      "A": "His public key 🔑🌍",
      "B": "His private key 🔑🤫",
      "C": "Receiver's public key 📬🔑",
      "D": "Receiver's private key 📬🤫"
    },
    "answer": "B"
  },
  {
    "question": "A digital signature is ✍️",
    "options": {
      "A": "A bit string giving identity of a correspondent 🆔",
      "B": "A unique identification of a sender 🆔",
      "C": "An authentication of an electronic record by tying it uniquely to a key only a sender knows 🔑🚫",
      "D": "An encrypted signature of a sender 🔐✍️"
    },
    "answer": "C"
  },
  {
    "question": "All of the following are examples of real security and privacy threats except: ⚠️🚫",
    "options": {
      "A": "Hackers 👨‍💻",
      "B": "Virus 🦠",
      "C": "Spam 📧",
      "D": "Worm 🐛"
    },
    "answer": "C"
  },
  {
    "question": "What legal concept involves the unauthorized alteration or modification of data with the intent to deceive? 📜⚠️",
    "options": {
      "A": "Cyber terrorism 💣",
      "B": "Data breach 🔓",
      "C": "Data manipulation ✏️",
      "D": "Cyber extortion 💰"
    },
    "answer": "C"
  },
  {
    "question": "What legal concept involves the unauthorized use of someone else's identity for fraudulent purposes? 🎭",
    "options": {
      "A": "Cyber stalking 👣",
      "B": "Identity theft 🆔💰",
      "C": "Spoofing 📞🎭",
      "D": "Phishing 🎣"
    },
    "answer": "B"
  },
  {
    "question": "What legal concept involves using deception to trick individuals into revealing confidential information, such as passwords? 🎣",
    "options": {
      "A": "Phishing 🎣",
      "B": "Spoofing 🎭",
      "C": "Cyber stalking 👣",
      "D": "Identity theft 🆔"
    },
    "answer": "A"
  },
  {
    "question": "Which of the following process is used for verifying the identity of a user? 🆔✅",
    "options": {
      "A": "Authentication 🆔",
      "B": "Identification 🆔",
      "C": "Validation ✔️",
      "D": "Verification 🔍"
    },
    "answer": "A"
  },
  {
    "question": "In the context of data protection, what does the term \"data encryption\" involve? 🔐",
    "options": {
      "A": "Protecting personal data from unauthorized access by converting it into a non readable format 🔒",
      "B": "Allowing unrestricted access to personal data 🚪",
      "C": "Ignoring the security of personal data 🙈",
      "D": "Promoting data processing without encryption 📊"
    },
    "answer": "A"
  },
  {
    "question": "What legal principle allows individuals to control the collection and use of their personal information? 📜",
    "options": {
      "A": "Right to privacy 🤫",
      "B": "Right to access 🚪",
      "C": "Right to anonymity 🎭",
      "D": "Right to be forgotten 🗑️"
    },
    "answer": "A"
  },
  {
    "question": "What legal concept involves unauthorized access to computer systems with the intent to gather sensitive information? 🕵️",
    "options": {
      "A": "Cyber terrorism 💣",
      "B": "Cyber espionage 🕵️🔍",
      "C": "Hacking 👨‍💻",
      "D": "Cyber stalking 👣"
    },
    "answer": "B"
  },
  {
    "question": "What legal principle states that individuals have the right to know what information is collected about them and how it is used? 📜",
    "options": {
      "A": "Right to privacy 🤫",
      "B": "Right to information ℹ️",
      "C": "Right to access 🚪",
      "D": "Right to anonymity 🎭"
    },
    "answer": "C"
  },
  {
    "question": "What is the primary purpose of cyber laws and regulations? 📜",
    "options": {
      "A": "Restricting internet usage 🚫",
      "B": "Protecting computer hardware 💻",
      "C": "Preventing cyber threats and crimes 🛡️",
      "D": "Promoting software development 👨‍💻"
    },
    "answer": "C"
  },
  {
    "question": "Cyberspace has: 🌐",
    "options": {
      "A": "No national boundaries 🚫🗺️",
      "B": "International jurisdiction 🌍⚖️",
      "C": "Limited boundaries 📏",
      "D": "(A) and (B) 💬"
    },
    "answer": "D"
  },
  {
    "question": "Which of the following provides legal framework for e-governance in India? 🇮🇳📜",
    "options": {
      "A": "IT (Amendment) Act, 2008 📅",
      "B": "Indian Penal Code ⚖️",
      "C": "IT Act, 2000 ⚖️📜",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "Which of the following statements is true about the Trojans? 🐴",
    "options": {
      "A": "Trojans perform tasks for which they are designed or programmed 🎯",
      "B": "Trojans replicates themselves or clone themselves through an infections 🧬",
      "C": "Trojans do nothing harmful to the user's computer systems 😇",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "Which type of the following malware does not replicate or clone themselves through infection? 🦠🚫",
    "options": {
      "A": "Rootkits 🪚",
      "B": "Trojans 🐴",
      "C": "Worms 🐛",
      "D": "Viruses 🦠"
    },
    "answer": "B"
  },
  {
    "question": "Which of these systems use timestamps as an expiration date? ⏰",
    "options": {
      "A": "Public-Key Certificates 📜🔑",
      "B": "Public announcements 📢",
      "C": "Publicly available directories 📁",
      "D": "Public-Key authority 👤🔑"
    },
    "answer": "A"
  },
  {
    "question": "Which of the following public key distribution systems is most secure? 🔑🛡️",
    "options": {
      "A": "Public-Key Certificates 📜🔑",
      "B": "Public announcements 📢",
      "C": "Publicly available directories 📁",
      "D": "Public-Key authority 👤🔑"
    },
    "answer": "A"
  },
  {
    "question": "In the context of web security, what is an anomaly-based detection approach in IDS/IPS? 🌐🛡️",
    "options": {
      "A": "Improving website aesthetics 🎨",
      "B": "Blocking all incoming and outgoing traffic 🚫",
      "C": "Identifying deviations from normal behavior patterns 📊⚠️",
      "D": "Granting unrestricted access to all users 🚪"
    },
    "answer": "C"
  },
  {
    "question": "How does an Intrusion Prevention System (IPS) differ from an IDS? 🛡️",
    "options": {
      "A": "By focusing on server performance ⚡",
      "B": "By actively blocking malicious traffic in real-time 🚫⏱️",
      "C": "By improving website aesthetics 🎨",
      "D": "Granting unrestricted access to all users 🚪"
    },
    "answer": "B"
  },
  {
    "question": "What is the primary role of an Intrusion Detection System (IDS) in web security? 👀",
    "options": {
      "A": "Enhancing website aesthetics 🎨",
      "B": "Actively blocking malicious traffic 🚫",
      "C": "Monitoring and detecting potential security incidents 📡⚠️",
      "D": "Granting unrestricted access to all users 🚪"
    },
    "answer": "C"
  },
  {
    "question": "Cyber Security provide security against what? 🛡️",
    "options": {
      "A": "Against Malware 🦠",
      "B": "Against cyber-terrorists 💣",
      "C": "Defends a device from threat 🛡️",
      "D": "All mentioned options 🔀"
    },
    "answer": "D"
  },
  {
    "question": "In order to ensure the security of the data/information, we need to ________ the data: 🔐",
    "options": {
      "A": "Encrypt 🔒",
      "B": "Decrypt 🔓",
      "C": "Delete 🗑️",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "In the CIA Triad, which one of the following is not involved? 🔐",
    "options": {
      "A": "Availability ⏳",
      "B": "Confidentiality 🤐",
      "C": "Authenticity 💬",
      "D": "Integrity 📏"
    },
    "answer": "C"
  },
  {
    "question": "Which of the following is a type of independent malicious program that never required any host program? 🦠🚫🏠",
    "options": {
      "A": "Trojan Horse 🐴",
      "B": "Worm 🐛",
      "C": "Trap Door 🚪",
      "D": "Virus 🦠"
    },
    "answer": "B"
  },
  {
    "question": "Hackers usually used the computer virus for ________ purpose. 👨‍💻🦠",
    "options": {
      "A": "To log, monitor each and every user's stroke ⌨️👁️",
      "B": "To gain access the sensitive information like user's Id and Passwords 🔑",
      "C": "To corrupt the user's data stored in the computer system 💔",
      "D": "All of the above 🔀"
    },
    "answer": "D"
  },
  {
    "question": "Which of the following are famous and common cyber-attacks used by hackers to infiltrate the user's system? 👨‍💻⚠️",
    "options": {
      "A": "DDoS and Drive-by Downloads 🌊📥",
      "B": "Malware & Malvertising 🦠📢",
      "C": "Phishing and Password attacks 🎣🔑",
      "D": "All of the above 🔀"
    },
    "answer": "D"
  },
  {
    "question": "Which of the following can be considered as the elements of cyber security? 🛡️",
    "options": {
      "A": "Application Security 📱🔒",
      "B": "Operational Security ⚙️🔒",
      "C": "Network Security 🌐🔒",
      "D": "All of the above 🔀"
    },
    "answer": "D"
  },
  {
    "question": "________ is a type of software designed to help the user's computer detect viruses and avoid them. 🛡️🦠",
    "options": {
      "A": "Malware 🦠",
      "B": "Adware 📢",
      "C": "Antivirus 🛡️",
      "D": "Both (B) and (C) 🔄"
    },
    "answer": "C"
  },
  {
    "question": "Which of the below does not constitute a cybercrime? 🚫⚠️",
    "options": {
      "A": "Refusal of service 🚫",
      "B": "Man in the middle 👥",
      "C": "Phishing 🎣",
      "D": "MD5 🔢"
    },
    "answer": "D"
  },
  {
    "question": "Which of the below is a kind of cyber security? 🛡️",
    "options": {
      "A": "Cloud Security ☁️🔒",
      "B": "Application Security 📱🔒",
      "C": "Cloud Security ☁️🔒",
      "D": "All options mentioned 💬"
    },
    "answer": "D"
  },
  {
    "question": "How does a man-in-the-middle attack work? 👥",
    "options": {
      "A": "Overloading a server with traffic 🌊",
      "B": "Intercepting and altering communication between two parties 👂✏️",
      "C": "Spreading through infected email attachments 📧🦠",
      "D": "Disguising itself as a legitimate program 🎭"
    },
    "answer": "B"
  },
  {
    "question": "An asymmetric-key (or public-key) cipher uses 🔑🔐",
    "options": {
      "A": "1 key 1️⃣",
      "B": "2 key 2️⃣",
      "C": "3 key 3️⃣",
      "D": "4 key 4️⃣"
    },
    "answer": "B"
  },
  {
    "question": "Which of the following answers refers to a hierarchical system for the creation, management, storage, distribution, and revocation of digital certificates? 📜🔑",
    "options": {
      "A": "SAAS ☁️",
      "B": "DOS 💾",
      "C": "Digital signature ✍️",
      "D": "Public Key Infrastructure 🏗️🔑"
    },
    "answer": "D"
  },
  {
    "question": "The central node of 802.11 wireless operations is called. 📶",
    "options": {
      "A": "WPA 🔒",
      "B": "Access Point 📡",
      "C": "WAP 📱",
      "D": "Access Port 🚪"
    },
    "answer": "B"
  },
  {
    "question": "The process of analyzing wireless traffic that may be helpful for forensic investigations or during troubleshooting any wireless issue is called? 📶🔍",
    "options": {
      "A": "Wireless Traffic Sniffing 👃📡",
      "B": "Wireless Traffic Maltego 🛠️",
      "C": "Wireless Traffic BurpSuit 🛠️",
      "D": "Wireless Traffic Wireshark 🦈📡"
    },
    "answer": "D"
  },
  {
    "question": "Mobile security is also known as? 📱🔒",
    "options": {
      "A": "OS Security 💻🔒",
      "B": "APIs Security 🔌🔒",
      "C": "Wireless Security 📶🔒",
      "D": "Database security 🗄️🔒"
    },
    "answer": "C"
  },
  {
    "question": "Which malware is designed to capture and transmit sensitive data, such as login credentials? 🦠🔑",
    "options": {
      "A": "Spyware 👁️",
      "B": "Adware 📢",
      "C": "Keylogger ⌨️📝",
      "D": "Ransomware 💰🔒"
    },
    "answer": "C"
  },
  {
    "question": "What is true about data security? 🔐",
    "options": {
      "A": "Data security is the protection of programs and data in computers and communication systems against unauthorized access 🛡️",
      "B": "It refers to the right of individuals or organizations to deny or restrict the collection and use of information 🚫",
      "C": "Data security requires system managers to reduce unauthorized access to the systems by building physical arrangements and software checks 🔧",
      "D": "All of the above 🔀"
    },
    "answer": "D"
  },
  {
    "question": "Deleted files recovery is a common technique used in computer forensics. 🗑️🔍",
    "options": {
      "A": "TRUE 💡",
      "B": "FALSE ❌",
      "C": "Can be true or false 🔄",
      "D": "Can not say 🤔"
    },
    "answer": "A"
  },
  {
    "question": "Computer forensics can also be used in civil proceedings. ⚖️",
    "options": {
      "A": "Yes 💡",
      "B": "No ❌",
      "C": "Can be yes or no 🔄",
      "D": "Can not say 🤔"
    },
    "answer": "A"
  },
  {
    "question": "What is the purpose of a hash value in digital forensics? 🔢🔍",
    "options": {
      "A": "To encrypt sensitive data 🔐",
      "B": "To identify and verify the integrity of digital evidence 🆔🔍",
      "C": "To recover deleted files from storage media 🗑️",
      "D": "To analyze network traffic and detect malicious activities 🌐👁️"
    },
    "answer": "B"
  },
  {
    "question": "For ethical hacking, what process is followed? 👨‍💻⚖️",
    "options": {
      "A": "Cryptography 🔐",
      "B": "Encryption 🔒",
      "C": "Decryption 🔓",
      "D": "Penetration Testing 🛡️🔨"
    },
    "answer": "D"
  },
  {
    "question": "Digital signatures are created and verified using ✍️",
    "options": {
      "A": "Program 💻",
      "B": "graphical coding 🎨",
      "C": "HTML 🌐",
      "D": "cryptography 🔐"
    },
    "answer": "D"
  },
  {
    "question": "The authentication to be affected by use of asymmetric crypto system and hash function is known as 🔑🔢",
    "options": {
      "A": "Public key 🔑🌍",
      "B": "Private Key 🔑🤫",
      "C": "Digital Signature ✍️",
      "D": "e-governance 🏛️"
    },
    "answer": "C"
  },
  {
    "question": "What is the purpose of a disaster recovery plan (DRP) in cybersecurity? 🛡️📋",
    "options": {
      "A": "To eliminate all vulnerabilities ❌",
      "B": "To promote unrestricted data sharing 📢",
      "C": "To ensure the restoration of IT services after a disruptive event 🔄💻",
      "D": "To ignore potential risks 🙈"
    },
    "answer": "C"
  },
  {
    "question": "Which chapter of Cyber Law provides the legal Recognition to Digital Signature? 📜✍️",
    "options": {
      "A": "Chapter III 📖",
      "B": "Chapter IV 📖",
      "C": "Chapter IX 📖",
      "D": "Chapter IX and X 📖📖"
    },
    "answer": "A"
  },
  {
    "question": "Which type of malware is designed to observe and gather user information without their knowledge? 🦠👁️",
    "options": {
      "A": "Worm 🐛",
      "B": "Trojan 🐴",
      "C": "Spyware 👁️",
      "D": "Adware 📢"
    },
    "answer": "C"
  },
  {
    "question": "Password cracker tries 🔑",
    "options": {
      "A": "Man in the middle attack 👥",
      "B": "Brute force attack 💪🔑",
      "C": "Intrusion detection 👀",
      "D": "Intrusion prevention 🛡️"
    },
    "answer": "B"
  },
  {
    "question": "e-governance includes 🏛️💻",
    "options": {
      "A": "Filing of form online, paperless 📄🛒",
      "B": "Efficient, low cost, transparent governance 💰📊",
      "C": "Both above 🔀",
      "D": "Payment of bills 💵"
    },
    "answer": "C"
  },
  {
    "question": "Black box and white box pentest is done from ________ and ________ user perspective respectively 🖤📦🤍📦",
    "options": {
      "A": "Insider, outsider 👤🏢, 👤🌍",
      "B": "Outsider, insider 👤🌍, 👤🏢",
      "C": "Third party, insider 👤🤝, 👤🏢",
      "D": "Employee and user 👨‍💼, 👤"
    },
    "answer": "B"
  },
  {
    "question": "What is the difference between vulnerability scanning and penetration testing? 🔍 vs 🔨",
    "options": {
      "A": "Vulnerability scanning identifies vulnerabilities and penetration testing exploits them ⚠️🔍🔨",
      "B": "Vulnerability scanning is an active process while penetration testing is passive 🔄",
      "C": "Vulnerability scanning is less thorough than penetration testing 📉",
      "D": "Vulnerability scanning is conducted by internal security teams, while penetration testing is conducted by external security firms 🏢 vs 🏢🌍"
    },
    "answer": "A"
  },
  {
    "question": "PKI stands for? 🔑",
    "options": {
      "A": "Public key infrastructure 🏗️🔑",
      "B": "Private key infrastructure 🏗️🔑🤫",
      "C": "Public key instance 🔑📌",
      "D": "Private key instance 🔑🤫📌"
    },
    "answer": "A"
  },
  {
    "question": "Which of the following is a common type of vulnerability in web applications? 🌐⚠️",
    "options": {
      "A": "Denial of service (DoS) 🚫",
      "B": "SQL injection 🗄️💉",
      "C": "Man-in-the-middle (MitM) attack 👥",
      "D": "Buffer overflow 📦💥"
    },
    "answer": "B"
  },
  {
    "question": "What is social engineering? 🎭🧠",
    "options": {
      "A": "Using force to gain access to the information you need 💪",
      "B": "Hacking either telecommunication or wireless networks to gain access to the information you need 📡",
      "C": "Using manipulation to deceive people that you are someone you are not to gain access to the information you need 🎭",
      "D": "Using force to gain all the information available 💪"
    },
    "answer": "C"
  },
  {
    "question": "Which of the following is the best approach to conducting a penetration test? 🔨",
    "options": {
      "A": "Black box testing 🖤📦",
      "B": "White box testing 🤍📦",
      "C": "Grey box testing 🩶📦",
      "D": "Automated testing 🤖"
    },
    "answer": "C"
  },
  {
    "question": "Penetration testing should focus on what scenarios? 🔨",
    "options": {
      "A": "Most likely 📈",
      "B": "Most dangerous 💀",
      "C": "Both 🔀",
      "D": "None ❌"
    },
    "answer": "C"
  },
  {
    "question": "Which of the following are ways to conduct penetration testing? 🔨",
    "options": {
      "A": "Black Box Testing, White Box Testing, Grey Box Testing 🖤🤍🩶",
      "B": "Black Box Testing, Red Box Testing, Grey Box Testing 🖤🔴🩶",
      "C": "White Box Testing, Brown Box Testing, Red Box Testing 🤍🤎🔴",
      "D": "Black Box Testing, Green Box Testing, White Box Testing 🖤💚🤍"
    },
    "answer": "A"
  },
  {
    "question": "Is penetration testing used to help or for damaging a system? 🔨",
    "options": {
      "A": "Helping 🤝",
      "B": "Securing 🔒",
      "C": "Damaging 💔",
      "D": "Both (A) & (C) 🔄"
    },
    "answer": "B"
  },
  {
    "question": "In public key cryptosystem for message confidentiality, which is kept as public? 🔑",
    "options": {
      "A": "Decryption keys 🔓🔑",
      "B": "Encryption keys 🔒🔑",
      "C": "Encryption & Decryption keys 🔒🔓🔑",
      "D": "None of the above ❌"
    },
    "answer": "B"
  },
  {
    "question": "________ is a person in whose name the Digital Signature Certificate is issued 👤✍️",
    "options": {
      "A": "Certified authority 📝👤",
      "B": "Subscriber 📝👤",
      "C": "Holder 📋👤",
      "D": "Controller 🎮👤"
    },
    "answer": "B"
  },
  {
    "question": "Which of the following is a general term for malicious software that pretends to be harmless so that a user willingly allows it to be downloaded onto the computer? 🦠🎭",
    "options": {
      "A": "Spyware 👁️",
      "B": "Virus 🦠",
      "C": "Trojan Horse 🐴",
      "D": "Botnets 🤖🌐"
    },
    "answer": "C"
  },
  {
    "question": "Digital signature certificate is issued by (as in IT act 2000) ✍️📜",
    "options": {
      "A": "Appellate tribunal ⚖️",
      "B": "Controller of certificate authority 🎮📝",
      "C": "Certificate authority 📜📝",
      "D": "Cyber crime investigator 🕵️"
    },
    "answer": "C"
  },
  {
    "question": "Which of the following type of attack can actively modify communications or data? ✏️📡",
    "options": {
      "A": "Both Active and Passive attack 🔄",
      "B": "Neither Active nor Passive attack ❌",
      "C": "Active attack ⚡",
      "D": "Passive attack 👂"
    },
    "answer": "C"
  },
  {
    "question": "Trojan Horse programs operate with what intent? 🐴",
    "options": {
      "A": "To slowly but surely infect and become your operating system until the system crashes 🐢💥",
      "B": "To openly exploit a systems weaknesses until the user discovers it 📢",
      "C": "To masquerade as non-malicious software while exploiting a system's weaknesses 🎭🔨",
      "D": "To do a series of brute force attacks within the system itself and a series of external attacks from other servers 💪🌐"
    },
    "answer": "C"
  },
  {
    "question": "What is the purpose of a risk response strategy in the risk assessment process? 📊⚠️",
    "options": {
      "A": "To eliminate all vulnerabilities ❌",
      "B": "To promote unrestricted data sharing 📢",
      "C": "To outline the actions to be taken in response to identified risks 📝⚠️",
      "D": "To ignore potential risks 🙈"
    },
    "answer": "C"
  },
  {
    "question": "In the context of risk assessment, what does the term \"vulnerability\" refer to? ⚠️",
    "options": {
      "A": "A weakness that could be exploited by a threat 🔻",
      "B": "Promoting unrestricted data sharing 📢",
      "C": "Ignoring potential risks 🙈",
      "D": "Fostering a risk-aware culture 🌱"
    },
    "answer": "A"
  },
  {
    "question": "What is the purpose of a risk assessment report in cybersecurity risk management? 📊📄",
    "options": {
      "A": "To eliminate all vulnerabilities ❌",
      "B": "To promote unrestricted data sharing 📢",
      "C": "To communicate the results of the risk assessment 📢📊",
      "D": "To ignore potential risks 🙈"
    },
    "answer": "C"
  },
  {
    "question": "What is the purpose of a threat assessment in cybersecurity risk management? ⚠️",
    "options": {
      "A": "To eliminate all vulnerabilities ❌",
      "B": "To identify potential risks and threats 🔍⚠️",
      "C": "To promote unrestricted data sharing 📢",
      "D": "To ignore the impact of threats 🙈"
    },
    "answer": "B"
  },
  {
    "question": "Which of the following is a key component of the risk assessment process? 📊",
    "options": {
      "A": "Ignoring potential risks 🙈",
      "B": "Risk acceptance ⚠️🤝",
      "C": "Promoting unrestricted access to sensitive data 🚪",
      "D": "Fostering a risk-aware culture 🌱"
    },
    "answer": "B"
  },
  {
    "question": "What is the primary goal of a risk assessment in cybersecurity? 🎯📊",
    "options": {
      "A": "To eliminate all cyber threats ❌",
      "B": "To identify and manage potential risks 🔍📊",
      "C": "To promote unrestricted data sharing 📢",
      "D": "To ignore the impact of cyber threats 🙈"
    },
    "answer": "B"
  },
  {
    "question": "Which of the below is a popular victim of cyber attackers looking to gain the IP address of a target or victim user? 🎯🌐",
    "options": {
      "A": "emails 📧",
      "B": "websites 🌐",
      "C": "IP tracer 📍",
      "D": "web pages 📄"
    },
    "answer": "C"
  },
  {
    "question": "Which of the following is the collective name for Trojan horses, spyware, and worms? 🦠🐴👁️🐛",
    "options": {
      "A": "Spyware 👁️",
      "B": "Botnets 🤖🌐",
      "C": "Virus 🦠",
      "D": "Malware 🦠"
    },
    "answer": "D"
  },
  {
    "question": "Which of the following is collection of Internet-connected programs communicating with other similar programs in order to perform tasks? 🌐🤖",
    "options": {
      "A": "Botnet 🤖🌐",
      "B": "Spyware 👁️",
      "C": "Trojan horse 🐴",
      "D": "Malware 🦠"
    },
    "answer": "A"
  },
  {
    "question": "Which of the following is a means to access a computer program or entire computer system bypassing all security mechanisms? 🚪🔓",
    "options": {
      "A": "Backdoor 🚪",
      "B": "Masquerading 🎭",
      "C": "Phishing 🎣",
      "D": "Trojan Horse 🐴"
    },
    "answer": "A"
  },
  {
    "question": "There are two types of firewall. What are they? 🔥🧱",
    "options": {
      "A": "Internet-based and home-based 🌐🏠",
      "B": "Hardware and software 💻🖥️",
      "C": "Remote and local 📡🏠",
      "D": "Digital and electronic 🔢⚡"
    },
    "answer": "B"
  },
  {
    "question": "A digital signature scheme consists of which of the following typical algorithms? ✍️",
    "options": {
      "A": "Key generation, Signing and Signature verifying algorithm 🔑✍️🆔",
      "B": "Signature verifying algorithm 🆔",
      "C": "Key generation algorithm 🔑",
      "D": "Signing algorithm ✍️"
    },
    "answer": "A"
  },
  {
    "question": "What is another name for an insecure plugin? 🔌⚠️",
    "options": {
      "A": "Hardware 💻",
      "B": "Software 🖥️",
      "C": "Firmware 🔧",
      "D": "Malware 🦠"
    },
    "answer": "D"
  },
  {
    "question": "To protect the computer system against the hacker and different kind of viruses, one must always keep ________ on in the computer system. 🛡️",
    "options": {
      "A": "Antivirus 🦠🚫",
      "B": "Firewall 🔥🧱",
      "C": "Vlc player 🎬",
      "D": "Script 📜"
    },
    "answer": "B"
  },
  {
    "question": "Which of the following are the types of scanning? 🔍",
    "options": {
      "A": "Network, vulnerability, and port scanning 🌐⚠️🚪",
      "B": "Port, network, and services 🚪🌐⚙️",
      "C": "Client, Server, and network 💻🖥️🌐",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "In system hacking, which of the following is the most crucial activity? 👨‍💻",
    "options": {
      "A": "Information gathering 📡🔍",
      "B": "Covering tracks 🧹👣",
      "C": "Cracking passwords 🔑💪",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "What is Digital Forensics? 🔍💻",
    "options": {
      "A": "Process of using scientific knowledge in analysis and presentation of evidence in court ⚖️",
      "B": "The application of computer science and investigative procedures for a legal purpose involving the analysis of digital evidence after proper search authority, a chain of custody, validation with mathematics, use of validated tools, repeatability, reporting, and possible expert presentation 🌐🔬",
      "C": "A process where we develop and test hypotheses that answer questions about digital events ❓",
      "D": "Use of science or technology in the investigation and establishment of the facts or evidence in a court of law ⚖️"
    },
    "answer": "B"
  },
  {
    "question": "Which type of digital evidence can be extracted from volatile memory? 💾⚡",
    "options": {
      "A": "Deleted files 🗑️",
      "B": "Browser history 🌐📜",
      "C": "Running processes and network connections ⚙️🌐🌐",
      "D": "Encrypted data 🔐"
    },
    "answer": "C"
  },
  {
    "question": "Which of the following is a commonly used forensic tool in digital investigations? 🔧🔍",
    "options": {
      "A": "Photoshop 🎨",
      "B": "Wireshark 🦈",
      "C": "EnCase 📦💬",
      "D": "Microsoft Office 📊"
    },
    "answer": "C"
  },
  {
    "question": "What is the purpose of a hash value in digital forensics? 🔢🔍",
    "options": {
      "A": "To encrypt sensitive data 🔐",
      "B": "To identify and verify the integrity of digital evidence 🆔🔍",
      "C": "To recover deleted files from storage media 🗑️",
      "D": "To analyze network traffic and detect malicious activities 🌐👁️"
    },
    "answer": "B"
  },
  {
    "question": "What is the purpose of a write blocker in digital forensics? ✍️🚫",
    "options": {
      "A": "To prevent unauthorized access to digital devices 🚫🔌",
      "B": "To recover deleted data from storage media 🗑️",
      "C": "To ensure that evidence is not altered during the investigation 🔒🚫",
      "D": "To encrypt sensitive data for secure storage 🔐"
    },
    "answer": "C"
  },
  {
    "question": "What is the importance of chain of custody in digital forensics? ⛓️🔍",
    "options": {
      "A": "To ensure the admissibility of digital evidence in court ⚖️⚖️",
      "B": "To prevent unauthorized access to digital devices 🚫🔌",
      "C": "To track the physical movement and handling of digital evidence 📝👣",
      "D": "To encrypt sensitive data for secure storage 🔐"
    },
    "answer": "C"
  },
  {
    "question": "Which World organization accredited labs in the world of forensics? 🌍🔬",
    "options": {
      "A": "AKULD ❌",
      "B": "APIOS ❌",
      "C": "ACSLD 💬",
      "D": "None of these ❌"
    },
    "answer": "C"
  },
  {
    "question": "802.11i's final form is known as: 📶",
    "options": {
      "A": "Wi-Fi Protected Access 🔒",
      "B": "Wired Equivalency Privacy 🔐",
      "C": "Robust Security Network 🛡️🌐",
      "D": "Both (A) and (B) 🔄"
    },
    "answer": "C"
  },
  {
    "question": "Central node of 802.11 wireless operations is 📶",
    "options": {
      "A": "Access Point 📡📶",
      "B": "WPA 🔒",
      "C": "Access Port 🚪",
      "D": "WAP 📱"
    },
    "answer": "A"
  },
  {
    "question": "Penetration testing is used to: 🔨",
    "options": {
      "A": "identify vulnerabilities and weaknesses 🔍⚠️",
      "B": "address security flaws before malicious hackers exploit them 🛡️⚖️",
      "C": "Both (A) and (B) 🔀",
      "D": "crash the site/system 💥"
    },
    "answer": "C"
  },
  {
    "question": "Which of the following are ways to conduct penetration testing? 🔨",
    "options": {
      "A": "Black Box Testing, White Box Testing, Grey Box Testing 🖤🤍🩶💬",
      "B": "White Box Testing, Brown Box Testing, Red Box Testing 🤍🤎🔴",
      "C": "Black Box Testing, Red Box Testing, Grey Box Testing 🖤🔴🩶",
      "D": "Black Box Testing, Green Box Testing, White Box Testing 🖤💚🤍"
    },
    "answer": "A"
  },
  {
    "question": "Black box and white box pentest is done from ________ and ________ user perspective respectively 🖤📦🤍📦",
    "options": {
      "A": "Insider; outsider 👤🏢, 👤🌍",
      "B": "Outsider; insider 👤🌍, 👤🏢💬",
      "C": "Third party; insider 👤🤝, 👤🏢",
      "D": "Employee and user 👨‍💼, 👤"
    },
    "answer": "B"
  },
  {
    "question": "Which of the following groups must review a penetration testing result? 🔨📊",
    "options": {
      "A": "Documentation, Log, System Configuration, Ruleset, Network Sniffing, File Integrity 📄📝⚙️📏🌐🔐",
      "B": "Documentation, Log, System Configuration, Network Sniffing, File Integrity 📄📝⚙️🌐🔐",
      "C": "Documentation, Log, System Configuration, Network Sniffing, Ruleset, File Integrity, Personnel 📄📝⚙️🌐📏🔐👥🌐",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "What is the risk involved in doing penetration testing? ⚠️🔨",
    "options": {
      "A": "Some operations of the company might slow down 🐢🏢",
      "B": "Skynet takes over the world 🤖🌍",
      "C": "VPN not effective 🔒❌",
      "D": "Security is an issue 🔐⚠️"
    },
    "answer": "A"
  },
  {
    "question": "PKI stands for? 🔑",
    "options": {
      "A": "Public Key Infrastructure 🏗️🔑🗝️",
      "B": "Private Key Infrastructure 🏗️🔑🤫",
      "C": "Public Key Instance 🔑📌",
      "D": "Private Key Instance 🔑🤫📌"
    },
    "answer": "A"
  },
  {
    "question": "The digital signature can be suspended by the certifying authority in case of: ✍️🚫",
    "options": {
      "A": "public interest 🏛️",
      "B": "interest of user 👤",
      "C": "interest of any person 👥",
      "D": "Both (A) and (C) 🔀"
    },
    "answer": "D"
  },
  {
    "question": "Which among the following was established under IT Act, 2000 to resolve disputes arising from the law? 📜⚖️",
    "options": {
      "A": "Cyber Appellate Tribunal ⚖️⚖️",
      "B": "Technology Disputes Bureau 🔧",
      "C": "Cyber Administrative Tribunal 🏛️",
      "D": "IT Disputes Tribunal 💻⚖️"
    },
    "answer": "A"
  },
  {
    "question": "A major amendment to Information Technology Act, 2000 was made in which year? 📜📅",
    "options": {
      "A": "2001",
      "B": "2016",
      "C": "2012",
      "D": "2008 📋"
    },
    "answer": "D"
  },
  {
    "question": "Malware that Encrypts Files and Demands money, property or services from a person, entity or institution, through coercion is: 🦠💰🔒",
    "options": {
      "A": "Spyware 👁️",
      "B": "Ransomware 💰🔒🦠",
      "C": "Adware 📢",
      "D": "Rootkit 🪚"
    },
    "answer": "B"
  },
  {
    "question": "Which type of malware is designed to observe and gather user information without their knowledge? 🦠👁️",
    "options": {
      "A": "Worm 🐛",
      "B": "Trojan 🐴",
      "C": "Spyware 👁️🦠",
      "D": "Adware 📢"
    },
    "answer": "C"
  },
  {
    "question": "Harassing someone through electronic message is offence of: 📧👣",
    "options": {
      "A": "Hacking 👨‍💻",
      "B": "Squatting 🏠",
      "C": "Stalking 👣🎭",
      "D": "Phishing 🎣"
    },
    "answer": "C"
  },
  {
    "question": "In a phishing attack, what is the common method used to trick users into revealing sensitive information? 🎣",
    "options": {
      "A": "Distributing malware-infected files 🦠📁",
      "B": "Impersonating a trusted entity 🎭🎭",
      "C": "Launching DDoS attacks 🌊",
      "D": "Encrypting files for ransom 🔒💰"
    },
    "answer": "B"
  },
  {
    "question": "________ is a criminal offense of receiving payment through coercion. 💰⚠️",
    "options": {
      "A": "Phishing 🎣",
      "B": "Pornography 🔞",
      "C": "Net or Cyber Extortion 💰🔪🎭",
      "D": "Credit Card Fraud 💳"
    },
    "answer": "C"
  },
  {
    "question": "Smartphone penetration framework was devised by: 📱🔨",
    "options": {
      "A": "Georgia Weidman, Bulb Security LLC in 2014 💬",
      "B": "Georgia schoof by Dagah",
      "C": "Georgia Weidman, Bulb Security LLC in 2018",
      "D": "Sergia Drapa"
    },
    "answer": "A"
  },
  {
    "question": "Password cracker tries: 🔑",
    "options": {
      "A": "DOS attack 🚫",
      "B": "Brute force attack 💪🔑💣",
      "C": "Intrusion detection 👀",
      "D": "Intrusion prevention 🛡️"
    },
    "answer": "B"
  },
  {
    "question": "Script kiddies are: 👨‍💻🧒",
    "options": {
      "A": "Individuals who want to break into computers to create damage, yet lack the advanced knowledge of computers and networks needed to do so 🚫👿",
      "B": "Individuals doing Ethical hacking service of network security 👨‍💻⚖️",
      "C": "Penetration tester 🔨",
      "D": "Vulnerability assessor 🔍"
    },
    "answer": "A"
  },
  {
    "question": "First phase of hacking is: 👨‍💻",
    "options": {
      "A": "Maintaining access 🔒",
      "B": "Gaining access 🚪",
      "C": "Reconnaissance 🔍🔍",
      "D": "Scanning 📡"
    },
    "answer": "C"
  },
  {
    "question": "What is the most important difference between ethical hacker and cracker? 👨‍💻⚖️ vs 👿",
    "options": {
      "A": "The ethical hacker has authorization from the owner of the target 💣📜💣",
      "B": "The ethical hacker is just a cracker who is getting paid 💰",
      "C": "The ethical hacker does not use the same techniques or skills as a cracker ❌",
      "D": "The ethical hacker does it strictly for financial motives unlike a cracker 💵"
    },
    "answer": "A"
  },
  {
    "question": "What type of hacker impose maximum threat to an organization? 👨‍💻⚠️",
    "options": {
      "A": "Black-hat hackers 👿",
      "B": "Grey-hat hackers 🩶",
      "C": "Script kiddies 🧒",
      "D": "Disgruntled employees 😠👤💬"
    },
    "answer": "D"
  },
  {
    "question": "Examples of hash functions are: 🔢",
    "options": {
      "A": "MD5 🔢",
      "B": "SHA-1 🔢",
      "C": "Both (A) and (B) 🔀🔀",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "Hash function is used in implementing ________: 🔢",
    "options": {
      "A": "Availability ⏳",
      "B": "Integrity 🛡️📏",
      "C": "Confidentiality 🤐",
      "D": "All of the above 🔄"
    },
    "answer": "B"
  },
  {
    "question": "Wireless LAN security architecture is defined in: 📶🔒",
    "options": {
      "A": "IEEE 802.11",
      "B": "IEEE 800.1",
      "C": "IEEE 802.11i",
      "D": "Both (A) and (C) 🔀"
    },
    "answer": "D"
  },
  {
    "question": "Which of the following tool is used in Wi-Fi hacking? 📶👨‍💻",
    "options": {
      "A": "Air Crack-ng 💣",
      "B": "Wireshark 🦈",
      "C": "Norton 🛡️",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "The Information Technology Act, 2000 came into force on: 📜🇮🇳",
    "options": {
      "A": "9th June, 2000",
      "B": "17th October, 2000 📋",
      "C": "15th December, 2000",
      "D": "None of these ❌"
    },
    "answer": "B"
  },
  {
    "question": "The key of a pair used to create a digital signature is known as: 🔑✍️",
    "options": {
      "A": "public key receiver 📬🔑",
      "B": "private key of sender ✉️🔑🤫🗝️",
      "C": "creator key 👤🔑",
      "D": "secret key 🤫🔑"
    },
    "answer": "B"
  },
  {
    "question": "The key of a key pair used to verify a digital signature: 🔑✅✍️",
    "options": {
      "A": "public key of sender ✉️🔑🌍🗝️",
      "B": "private key sender ✉️🔑🤫",
      "C": "verifying key 🆔🔑",
      "D": "secret key 🤫🔑"
    },
    "answer": "A"
  },
  {
    "question": "An adjudicating officer, under the IT Act, 2000, for holding inquiry and imposing penalty is appointed by the: ⚖️📜",
    "options": {
      "A": "Controller 🎮",
      "B": "Central Government 🏛️⚖️",
      "C": "Cyber Appellate Tribunal ⚖️",
      "D": "High Court 🏛️"
    },
    "answer": "B"
  },
  {
    "question": "________ is the unique value for message or content by applying strong Hash function. 🔢✅",
    "options": {
      "A": "Decryption 🔓",
      "B": "Encryption 🔒",
      "C": "Message digest 📝🔢🔢",
      "D": "Private key 🔑🤫"
    },
    "answer": "C"
  },
  {
    "question": "For ethical hacking, what process is followed: 👨‍💻⚖️",
    "options": {
      "A": "Cryptography 🔐",
      "B": "Encryption 🔒",
      "C": "Decryption 🔓",
      "D": "Penetration Testing 🔨🔍"
    },
    "answer": "D"
  },
  {
    "question": "What are the difficulties in handling Digital Evidence? 💻🔍⚠️",
    "options": {
      "A": "Easy to destroy 💥🟢",
      "B": "Easy to sustain 💪",
      "C": "Hard to get 🚫🔴",
      "D": "Both (A) and (C) 🔀"
    },
    "answer": "D"
  },
  {
    "question": "What is the Primary Objective of Digital Forensic for Business and Industry? 🏢🔍",
    "options": {
      "A": "Availability of service ⏳",
      "B": "Continuity of operation 🔄🔄",
      "C": "Prosecution ⚖️",
      "D": "Security 🔒"
    },
    "answer": "B"
  },
  {
    "question": "How does ISO/IEC 27000 define an 'asset' in relation to ISO/IEC 27001? 📋✅",
    "options": {
      "A": "Anything that is of value to the organisation 💎🏢",
      "B": "A physical item within the organisation 📦",
      "C": "Digital and physical items owned by an organisation 💻📦",
      "D": "Tangible and non-tangible items owned or rented by an organisation 📦🤝"
    },
    "answer": "A"
  },
  {
    "question": "Annex A of ISO/IEC 27001 contains best practices for managing and securing information assets within an organisation. Which of the below are ISO 27001 control sets, as outlined in Annex A? 📋✅",
    "options": {
      "A": "Information security policies 📜",
      "B": "Asset management 📦",
      "C": "Access control 🔐",
      "D": "All of the above 🔀"
    },
    "answer": "D"
  },
  {
    "question": "Which of the below are current threats to many organisations? 🏢⚠️",
    "options": {
      "A": "Fraud 💰❌",
      "B": "Loss of information 📁❌",
      "C": "Unauthorised access 🚪❌",
      "D": "All of the above 🔀"
    },
    "answer": "D"
  },
  {
    "question": "When should organisations perform information security risk assessments? 📊📅",
    "options": {
      "A": "Monthly 📅",
      "B": "Every six months or when significant changes are proposed to occur 📅",
      "C": "Every 12 months, or when significant changes are proposed to occur 📅",
      "D": "At planned intervals or when significant changes are proposed to occur 📝📅"
    },
    "answer": "D"
  },
  {
    "question": "As per ISO27001, who shall review the organisation's information security management system at planned intervals to ensure its continuing suitability, adequacy and effectiveness? 📋✅",
    "options": {
      "A": "External Auditor 🧑‍💼🌍",
      "B": "Internal Auditor 🧑‍💼🏢",
      "C": "Quality Manager 📊👤",
      "D": "Top Management 👑👥💬"
    },
    "answer": "D"
  },
  {
    "question": "Within ISO standards, what does 'shall' indicate? 📋",
    "options": {
      "A": "A recommendation 💡",
      "B": "A permission 💬",
      "C": "A capability 💪",
      "D": "A requirement ⚠️💬"
    },
    "answer": "D"
  },
  {
    "question": "Within ISO/IEC 27001, which clause relates to leadership and the role of top management in the establishment, implementation, maintenance, and continual improvement of the ISMS? 📋",
    "options": {
      "A": "4",
      "B": "5 💬",
      "C": "6",
      "D": "7"
    },
    "answer": "B"
  },
  {
    "question": "What is the goal of a backup and recovery strategy in disaster recovery planning? 💾🔄",
    "options": {
      "A": "To eliminate all vulnerabilities ❌",
      "B": "To promote unrestricted data sharing 📢",
      "C": "To ensure the availability of data in case of a loss or compromise 🛡️📁",
      "D": "To ignore potential risks 🙈"
    },
    "answer": "C"
  },
  {
    "question": "What is the goal of a recovery strategy in disaster recovery planning? 🔄",
    "options": {
      "A": "To eliminate all vulnerabilities ❌",
      "B": "To promote unrestricted data sharing 📢",
      "C": "To identify and prioritize recovery tasks and resources 💬📝",
      "D": "To ignore potential risks 🙈"
    },
    "answer": "C"
  },
  {
    "question": "The things carried out by means of electronic data interchange, and other means of electronic communication is commonly referred to as: 💻📡",
    "options": {
      "A": "e-communication 📧",
      "B": "e-governance 🏛️",
      "C": "e-record 📄",
      "D": "e-commerce 🛒🛒"
    },
    "answer": "D"
  },
  {
    "question": "The authentication to be affected by use of asymmetric crypto system and hash function is known as: 🔑🔢",
    "options": {
      "A": "Public key 🔑🌍",
      "B": "Private Key 🔑🤫",
      "C": "Digital Signature ✍️📝",
      "D": "e-governance 🏛️"
    },
    "answer": "C"
  },
  {
    "question": "The Central Government may appoint a ________ of Certifying Authority who shall exercise supervision over the activities of Certifying Authorities. 🏛️🎮",
    "options": {
      "A": "Commissioner 👤",
      "B": "Controller 🎮💬",
      "C": "Executive 👨‍💼",
      "D": "President 👑"
    },
    "answer": "B"
  },
  {
    "question": "________ is a person in whose name the Digital Signature Certificate is issued. 👤✍️",
    "options": {
      "A": "Certified authority 📝👤",
      "B": "Subscriber 📝👤💬",
      "C": "Holder 📋👤",
      "D": "Controller 🎮👤"
    },
    "answer": "B"
  },
  {
    "question": "The ________ has the power to suspend or revoke Digital Signature Certificate. 🚫✍️",
    "options": {
      "A": "Commissioner 👤",
      "B": "Certifying Authority 📜📝",
      "C": "Subscriber 📝👤",
      "D": "Controller 🎮"
    },
    "answer": "B"
  },
  {
    "question": "Digital signatures are created and verified using: ✍️",
    "options": {
      "A": "Program 💻",
      "B": "Graphical coding 🎨",
      "C": "HTML 🌐",
      "D": "Cryptography 🔐🔐"
    },
    "answer": "D"
  },
  {
    "question": "Which of the following refers to the violation of the principle if information/computer is no more accessible? 💻🚫",
    "options": {
      "A": "Availability ⏳🛡️",
      "B": "Confidentiality 🤐",
      "C": "Access control 🔐",
      "D": "All of the above 🔄"
    },
    "answer": "A"
  },
  {
    "question": "Which of the following provides legal framework for e-governance in India? 🇮🇳🏛️",
    "options": {
      "A": "IT (Amendment) Act, 2008 📅",
      "B": "Indian Penal Code ⚖️",
      "C": "IT Act, 2000 ⚖️📜⚖️",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "Cyberspace has: 🌐",
    "options": {
      "A": "No national boundaries 🚫🗺️🚫",
      "B": "International jurisdiction 🌍⚖️💬",
      "C": "Limited boundaries 📏",
      "D": "Both (A) and (B) 🔀🔀"
    },
    "answer": "D"
  },
  {
    "question": "Out of following which is the main authority at the top and its main function is to issue license to the certifying authority and to supervise his functions? 🎮📜",
    "options": {
      "A": "Controller of certifying authority 🎮📝📝",
      "B": "Verification authority ⚖️👤",
      "C": "Subscriber 📝👤",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "________ means a system of a secure key pair consisting of a private key for creating digital signature and public key for verifying digital signature. 🔑",
    "options": {
      "A": "Asymmetric Cryptography 🔑🔑🔐",
      "B": "Cryptosystem 🔐",
      "C": "Symmetric cryptosystem 🔑",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "Public key cryptography is same as: 🔑🌍",
    "options": {
      "A": "Private key cryptography 🔑🤫",
      "B": "Asymmetric cryptography 🔑🔑🔐",
      "C": "Symmetric cryptography 🔑",
      "D": "Session key cryptography 🔑⏱️"
    },
    "answer": "B"
  },
  {
    "question": "Hash function are used for: 🔢",
    "options": {
      "A": "Encryption 🔒",
      "B": "Decryption 🔓",
      "C": "Digital signature ✍️📝",
      "D": "None of the above ❌"
    },
    "answer": "C"
  },
  {
    "question": "Under Information Technology Act the purpose of digital signature is to: 📜✍️",
    "options": {
      "A": "Forge the document ✍️❌",
      "B": "Photocopy the document 📄",
      "C": "Digital Printing 🖨️",
      "D": "Ensure integrity 🛡️📏🛡️"
    },
    "answer": "D"
  },
  {
    "question": "________ monitors all internet and other network activity, looking for suspicious data and preventing unauthorized access. 👀🌐",
    "options": {
      "A": "Intrusion detection system 👀👀",
      "B": "Firewall 🔥🧱",
      "C": "Data encryption 🔐",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "Which of the following is an example of web application vulnerability? 🌐⚠️",
    "options": {
      "A": "SQL Injection 🗄️💉💬",
      "B": "DNS Spoofing 🌐🎭",
      "C": "Buffer Overflow 📦💥",
      "D": "Cross Site Scripting (XSS) 🌐📜"
    },
    "answer": "A"
  },
  {
    "question": "Under which section of information act 2000 amended in 2008, stealing any digital asset or info is considered as a cyber crime? 📜🔢",
    "options": {
      "A": "64",
      "B": "65",
      "C": "66 📋",
      "D": "67"
    },
    "answer": "C"
  },
  {
    "question": "Hash functions guarantee message integrity and that the message has not been 🔢✅",
    "options": {
      "A": "Over view 👁️",
      "B": "Replaced 🔄",
      "C": "Violated ⚠️",
      "D": "Changed ✏️💬"
    },
    "answer": "D"
  },
  {
    "question": "Data must arrive exactly as it was sent from receiver to sender, is called 📨✅",
    "options": {
      "A": "Message Sending 📤",
      "B": "Message Splashing 💦",
      "C": "Message Integrity 🛡️📏🛡️",
      "D": "Message Confidentiality 🤐"
    },
    "answer": "C"
  },
  {
    "question": "Wi-Fi is abbreviated as: 📶",
    "options": {
      "A": "Wireless FLAN",
      "B": "Wireless LAN 📶",
      "C": "Wireless Fidelity 📶",
      "D": "Wired fellow"
    },
    "answer": "C"
  },
  {
    "question": "When there is an intermediate between the communications without the knowledge of the communicators, which type of threats is this? 👥",
    "options": {
      "A": "Network Injection 🌐💉",
      "B": "Malicious Association 🎭🔗",
      "C": "Accidental Association 🚫🔗",
      "D": "Man in the middle attack 👥💣"
    },
    "answer": "D"
  },
  {
    "question": "In which layer frequency band is defined and wireless signals are encoded? 📶",
    "options": {
      "A": "Medium Access Layer 🔗",
      "B": "Physical Layer 📡💬",
      "C": "Logic Link Control Layer 🔗",
      "D": "Both (B) and (C) 🔄"
    },
    "answer": "B"
  },
  {
    "question": "A communication is said to be insecure where data is transmitted in a manner that allows for interception also called ________ Attack? 👂📡",
    "options": {
      "A": "Interception 👂💬",
      "B": "Sniffing 👃",
      "C": "ISP 🌐",
      "D": "Citation 📝"
    },
    "answer": "A"
  },
  {
    "question": "The key of key pair used to create digital signature is called: 🔑✍️",
    "options": {
      "A": "Public key 🔑🌍",
      "B": "Private key 🔑🤫🗝️",
      "C": "Session key 🔑⏱️",
      "D": "Secret key 🤫🔑"
    },
    "answer": "B"
  },
  {
    "question": "The key pair of ________ is used for creation and verification of digital signature. 🔑✍️",
    "options": {
      "A": "Sender ✉️📬",
      "B": "Receiver 📬",
      "C": "66 🔢",
      "D": "67 🔢"
    },
    "answer": "A"
  },
  {
    "question": "Digital signature certificate is issued by (as in IT act 2000): ✍️📜",
    "options": {
      "A": "Appellate tribunal ⚖️",
      "B": "Controller of certificate authority 🎮",
      "C": "Certificate authority 📜📝📝",
      "D": "Cyber crime investigator 🕵️"
    },
    "answer": "C"
  },
  {
    "question": "e-governance includes: 🏛️💻",
    "options": {
      "A": "Filing of form online, paperless 📄🛒",
      "B": "Efficient, low cost, transparent governance 💰📊🗂️",
      "C": "Both (A) and (B) 🔀🔀",
      "D": "Payment of bills 💵"
    },
    "answer": "C"
  },
  {
    "question": "Digital signature is defined under ________ section of IT Act, 2000. ✍️📜🔢",
    "options": {
      "A": "Section 1",
      "B": "Section 2 📋",
      "C": "Section 8",
      "D": "Section 6"
    },
    "answer": "B"
  },
  {
    "question": "Information Technology Act, 2000 directed the formation of a Controller of Certifying Authorities to regulate the issuance of ________ 📜🎮",
    "options": {
      "A": "Data license 📄",
      "B": "IP address in India 🌐",
      "C": "Digital signatures ✍️📝",
      "D": "Internet service provider license 🌐"
    },
    "answer": "C"
  },
  {
    "question": "Which of the following are the types of scanning? 🔍",
    "options": {
      "A": "Network, vulnerability, and port scanning 🌐⚠️🚪🌐",
      "B": "Port, network, and services 🚪🌐⚙️",
      "C": "Any of the above 🔄",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "Which of the following are famous and common cyber-attacks used by hackers to infiltrate the user's system? 👨‍💻⚠️",
    "options": {
      "A": "DDoS and Drive-by Downloads 🌊📥",
      "B": "Malware and Malvertising 🦠📢",
      "C": "Phishing and Password attacks 🎣🔑",
      "D": "All of the above 🔀"
    },
    "answer": "D"
  },
  {
    "question": "Password cracker tries: 🔑",
    "options": {
      "A": "Man in the middle attack 👥",
      "B": "Brute force attack 💪🔑💣",
      "C": "Intrusion detection 👀",
      "D": "Intrusion prevention 🛡️"
    },
    "answer": "B"
  },
  {
    "question": "What is the primary goal of ethical hacker? 👨‍💻⚖️",
    "options": {
      "A": "Avoiding detection 🕵️",
      "B": "Testing security controls 🔍🔒💬",
      "C": "Resolving security vulnerabilities 🛠️",
      "D": "Determining return on investment for security measures 📊"
    },
    "answer": "B"
  },
  {
    "question": "Which one of the following refers to the technique used for verifying the integrity of the message? ✅",
    "options": {
      "A": "Digital signature ✍️",
      "B": "Decryption algorithm 🔓",
      "C": "Protocol 📡",
      "D": "Message Digest 🔢🔢"
    },
    "answer": "D"
  },
  {
    "question": "Which one of the following is a type of antivirus program? 🛡️",
    "options": {
      "A": "Quick heal 💬",
      "B": "McAfee 💬",
      "C": "Kaspersky 💬",
      "D": "All of the above 🔀🔀"
    },
    "answer": "D"
  },
  {
    "question": "In system hacking, which of the following is the most crucial activity? 👨‍💻",
    "options": {
      "A": "Information gathering 📡🔍📊",
      "B": "Covering tracks 🧹👣",
      "C": "Cracking passwords 🔑💪",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "To protect the computer system against the hacker and different kind of viruses, one must always keep ________ on in the computer system. 🛡️",
    "options": {
      "A": "Antivirus 🦠🚫",
      "B": "Firewall 🔥🧱🌐",
      "C": "VLC player 🎬",
      "D": "Script 📜"
    },
    "answer": "B"
  },
  {
    "question": "Which of the following are the types of scanning? 🔍",
    "options": {
      "A": "Network, vulnerability, and port scanning 🌐⚠️🚪🌐",
      "B": "Port, network, and services 🚪🌐⚙️",
      "C": "Client, server, and network 💻🖥️🌐",
      "D": "None of the above ❌"
    },
    "answer": "A"
  },
  {
    "question": "Which of the following are famous and common cyber-attacks used by hackers to infiltrate the user's system? 👨‍💻⚠️",
    "options": {
      "A": "DDoS and Drive-by Downloads 🌊📥",
      "B": "Malware and Malvertising 🦠📢",
      "C": "Phishing and Password attacks 🎣🔑",
      "D": "All of the above 🔀"
    },
    "answer": "D"
  },
  {
    "question": "Which type of the following malware does not replicate or clone themselves through infection? 🦠🚫",
    "options": {
      "A": "Rootkits 🪚",
      "B": "Trojans 🐴🦠",
      "C": "Worms 🐛",
      "D": "Viruses 🦠"
    },
    "answer": "B"
  },
  {
    "question": "What is the primary goal of a risk assessment in cybersecurity? 🎯📊",
    "options": {
      "A": "To eliminate all cyber threats ❌",
      "B": "To identify and manage potential risks 🔍📊⚠️",
      "C": "To promote unrestricted data sharing 📢",
      "D": "To ignore the impact of cyber threats 🙈"
    },
    "answer": "B"
  },
  {
    "question": "In the context of risk assessment, what does the term \"vulnerability\" refer to? ⚠️",
    "options": {
      "A": "A weakness that could be exploited by a threat 🔻⚠️",
      "B": "Promoting unrestricted data sharing 📢",
      "C": "Ignoring potential risks 🙈",
      "D": "Fostering a risk-aware culture 🌱"
    },
    "answer": "A"
  },
  {
    "question": "What is the purpose of a risk assessment report in cybersecurity risk management? 📊📄",
    "options": {
      "A": "To eliminate all vulnerabilities ❌",
      "B": "To promote unrestricted data sharing 📢",
      "C": "To communicate the results of the risk assessment 📢📊⚠️",
      "D": "To ignore potential risks 🙈"
    },
    "answer": "C"
  },
  {
    "question": "In the context of risk assessment, what does the term 'risk mitigation' involve? 📊🛡️",
    "options": {
      "A": "The process of identifying and assessing risks 🔍",
      "B": "The process of eliminating all vulnerabilities ❌",
      "C": "The process of reducing the impact and likelihood of identified risks 📉⚠️",
      "D": "The process of promoting unrestricted data sharing 📢"
    },
    "answer": "C"
  },
  {
    "question": "What is the purpose of a risk assessment policy in cybersecurity risk management? 📊📜",
    "options": {
      "A": "To eliminate all vulnerabilities ❌",
      "B": "To promote unrestricted data sharing 📢",
      "C": "To provide guidance on the risk assessment process and responsibilities 📝⚠️",
      "D": "To ignore potential risks 🙈"
    },
    "answer": "C"
  },
  {
    "question": "What is the purpose of a disaster recovery plan (DRP) in cybersecurity? 🛡️📋",
    "options": {
      "A": "To eliminate all vulnerabilities ❌",
      "B": "To promote unrestricted data sharing 📢",
      "C": "To ensure the restoration of IT services after a disruptive event 🔄💻💬",
      "D": "To ignore potential risks 🙈"
    },
    "answer": "C"
  },
  {
    "question": "In the context of business continuity planning, what does the term \"recovery point objective (RPO)\" refer to? 🔄📌",
    "options": {
      "A": "The maximum acceptable downtime for critical systems ⏱️",
      "B": "The point in time to which data must be recovered after a disruption ⏰📊",
      "C": "The process of eliminating all vulnerabilities ❌",
      "D": "The impact of a risk on business operations 📊"
    },
    "answer": "B"
  }
]
  }
];

/* ─── 2. MOTIVATIONAL MESSAGES ─── */
const MESSAGES = {
  high:   ["Outstanding! 🏆", "Sharp thinking! 🧠", "Excellent work! ⭐", "You're on fire! 🔥"],
  mid:    ["Good progress! 💪", "Solid effort! 👍", "Almost there! 🎯", "Keep going! 🚀"],
  low:    ["Keep practicing! 📚", "Every question counts! 💡", "You'll get there! 🌱", "Stay focused! 🎧"]
};

function getMotivation(accuracy) {
  const pool = accuracy >= 75 ? MESSAGES.high : accuracy >= 40 ? MESSAGES.mid : MESSAGES.low;
  return pool[Math.floor(Math.random() * pool.length)];
}

/* ─── 3. LOCAL STORAGE HELPERS ─── */
const LS_KEYS = { stats: 'quova_stats', theme: 'quova_theme' };

function loadStats() {
  try {
    return JSON.parse(localStorage.getItem(LS_KEYS.stats)) || {
      totalAttempted: 0, totalCorrect: 0, sessions: 0,
      subjects: {}, sessionHistory: []
    };
  } catch { return { totalAttempted: 0, totalCorrect: 0, sessions: 0, subjects: {}, sessionHistory: [] }; }
}

function saveStats(stats) {
  localStorage.setItem(LS_KEYS.stats, JSON.stringify(stats));
}

function loadTheme() {
  return localStorage.getItem(LS_KEYS.theme) || 'light';
}

function saveTheme(theme) {
  localStorage.setItem(LS_KEYS.theme, theme);
}

/* ─── 4. APP STATE ─── */
let state = {
  currentSubject: null,
  questions:      [],
  currentIndex:   0,
  answers:        [],
  score:          0,
  streak:         0,
  maxStreak:      0,
  answered:       false,
  globalStats:    loadStats(),
  chartDoughnut:  null,
  chartBar:       null,
  chartAllTime:   null,
  chartRadar:     null,
  chartLine:      null,
  chartPie:       null,
  // chunk state
  currentChunk:   0,   // 0-based chunk index
  chunkSize:      50,
};

/* ─── 5. DOM CACHE ─── */
const $ = id => document.getElementById(id);

const DOM = {
  screenHome:      $('screenHome'),
  screenQuiz:      $('screenQuiz'),
  screenResults:   $('screenResults'),
  screenAnalytics: $('screenAnalytics'),
  themeToggle:     $('themeToggle'),
  statsBtn:        $('statsBtn'),
  progressFill:    $('progressFill'),
  subjectGrid:     $('subjectGrid'),
  homeStats:       $('homeStats'),
  quizSubjectTag:  $('quizSubjectTag'),
  streakBadge:     $('streakBadge'),
  streakCount:     $('streakCount'),
  scoreBadge:      $('scoreBadge'),
  qCurrent:        $('qCurrent'),
  qTotal:          $('qTotal'),
  questionCard:    $('questionCard'),
  questionText:    $('questionText'),
  optionsList:     $('optionsList'),
  explanationPanel:  $('explanationPanel'),
  explanationToggle: $('explanationToggle'),
  explanationChevron:$('explanationChevron'),
  explanationBody:   $('explanationBody'),
  explanationText:   $('explanationText'),
  btnPrev:         $('btnPrev'),
  btnNext:         $('btnNext'),
  btnSubmit:       $('btnSubmit'),
  btnQuit:         $('btnQuit'),
  resultsLabel:    $('resultsLabel'),
  resultsTitle:    $('resultsTitle'),
  resultsSub:      $('resultsSub'),
  scCorrect:       $('scCorrect'),
  scAccuracy:      $('scAccuracy'),
  scScore:         $('scScore'),
  chartDoughnut:   $('chartDoughnut'),
  chartBar:        $('chartBar'),
  doughnutLabel:   $('doughnutLabel'),
  btnRetryWrong:   $('btnRetryWrong'),
  btnRetryAll:     $('btnRetryAll'),
  btnHome:         $('btnHome'),
  btnBackFromAnalytics: $('btnBackFromAnalytics'),
  atTotal:         $('atTotal'),
  atCorrect:       $('atCorrect'),
  atAccuracy:      $('atAccuracy'),
  atSessions:      $('atSessions'),
  chartAllTime:    $('chartAllTime'),
  subjectBreakdown:$('subjectBreakdown'),
};

/* ═══════════════════════════════════════════
   SOUND ENGINE — Web Audio API
═══════════════════════════════════════════ */
let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function playTone(frequency, type, duration, gainVal = 0.18, delay = 0) {
  try {
    const ctx  = getAudioCtx();
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, ctx.currentTime + delay);
    gain.gain.setValueAtTime(gainVal, ctx.currentTime + delay);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + duration);
    osc.start(ctx.currentTime + delay);
    osc.stop(ctx.currentTime + delay + duration + 0.05);
  } catch(e) {}
}

function playCorrectSound() {
  // Happy ascending arpeggio
  playTone(523.25, 'sine', 0.12, 0.20, 0.00);  // C5
  playTone(659.25, 'sine', 0.12, 0.20, 0.10);  // E5
  playTone(783.99, 'sine', 0.12, 0.20, 0.20);  // G5
  playTone(1046.5, 'sine', 0.15, 0.22, 0.30);  // C6
}

function playWrongSound() {
  // Descending sad tones
  playTone(311.13, 'sawtooth', 0.10, 0.10, 0.00);
  playTone(261.63, 'sawtooth', 0.12, 0.12, 0.12);
  playTone(220.00, 'sawtooth', 0.14, 0.08, 0.24);
}

function playSelectSound() {
  // Soft click
  playTone(880, 'sine', 0.06, 0.07, 0);
}

function playSuccessFanfare() {
  // Big win jingle
  const notes = [523, 659, 784, 1047, 784, 1047, 1319];
  const times = [0, 0.12, 0.22, 0.33, 0.45, 0.55, 0.65];
  notes.forEach((f, i) => playTone(f, 'sine', 0.18, 0.22, times[i]));
}

/* ═══════════════════════════════════════════
   EMOJI PARTICLE SYSTEM
═══════════════════════════════════════════ */
const CORRECT_EMOJIS = ['✨','🌟','⭐','💫','🎉','🎊','🥳','👏','🔥','💥','🚀','🏆','💯','🎯','😄'];
const WRONG_EMOJIS   = ['💔','😬','🫠','😅','🤔','💭','📚','🙈','😓','❓','🫤','😶'];

function spawnParticle(emoji, originEl) {
  const rect = originEl
    ? originEl.getBoundingClientRect()
    : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 0, height: 0 };

  const el = document.createElement('div');
  el.className = 'emoji-particle';
  el.textContent = emoji;

  // Start near the clicked element
  const startX = rect.left + rect.width / 2 + (Math.random() - 0.5) * rect.width;
  const startY = rect.top  + rect.height / 2;

  el.style.cssText = `
    left: ${startX}px;
    top:  ${startY}px;
    font-size: ${20 + Math.random() * 22}px;
  `;

  document.body.appendChild(el);

  const dx = (Math.random() - 0.5) * 320;
  const dy = -(80 + Math.random() * 260);
  const rot = (Math.random() - 0.5) * 720;
  const dur = 900 + Math.random() * 600;

  el.animate([
    { transform: `translate(0, 0) rotate(0deg) scale(1)`,   opacity: 1 },
    { transform: `translate(${dx}px, ${dy}px) rotate(${rot}deg) scale(0.4)`, opacity: 0 }
  ], { duration: dur, easing: 'cubic-bezier(0.2, 0, 0.8, 1)', fill: 'forwards' })
  .onfinish = () => el.remove();
}

function burstParticles(isCorrect, originEl, count = 10) {
  const pool = isCorrect ? CORRECT_EMOJIS : WRONG_EMOJIS;
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const emoji = pool[Math.floor(Math.random() * pool.length)];
      spawnParticle(emoji, originEl);
    }, i * 40);
  }
}

function bigCelebration() {
  // Massive burst from multiple positions
  const positions = [
    { left: window.innerWidth * 0.1, top: window.innerHeight * 0.4, width: 0, height: 0 },
    { left: window.innerWidth * 0.5, top: window.innerHeight * 0.3, width: 0, height: 0 },
    { left: window.innerWidth * 0.9, top: window.innerHeight * 0.4, width: 0, height: 0 },
  ];
  positions.forEach((pos, pi) => {
    setTimeout(() => {
      for (let i = 0; i < 14; i++) {
        setTimeout(() => {
          const emoji = CORRECT_EMOJIS[Math.floor(Math.random() * CORRECT_EMOJIS.length)];
          spawnParticle(emoji, pos);
        }, i * 35);
      }
    }, pi * 150);
  });
}

/* ─── 6. SCREEN NAVIGATION ─── */
function showScreen(screenEl) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  screenEl.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ─── 7. THEME ─── */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  saveTheme(theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
  playSelectSound();
  if (DOM.screenResults.classList.contains('active')) rebuildResultsCharts();
  if (DOM.screenAnalytics.classList.contains('active')) { buildAllTimeChart(); buildAnalyticsExtraCharts(); }
}

/* ─── 8. PROGRESS BAR ─── */
function updateProgressBar(current, total) {
  const pct = total > 0 ? ((current) / total) * 100 : 0;
  DOM.progressFill.style.width = pct + '%';
}

/* ─── 9. HOME SCREEN ─── */
function renderHome() {
  renderSubjectGrid();
  renderHomeStats();
  updateProgressBar(0, 0);
  showScreen(DOM.screenHome);
}

function renderSubjectGrid() {
  const stats = state.globalStats;
  DOM.subjectGrid.innerHTML = QUESTION_BANK.map(subj => {
    const sStats = stats.subjects[subj.subject] || { attempted: 0, correct: 0, chunks: {} };
    const totalQ = subj.questions.length;
    const CHUNK  = state.chunkSize;
    const numChunks = Math.ceil(totalQ / CHUNK);

    // Count how many chunks have been attempted (best-attempt tracking)
    const chunksData = sStats.chunks || {};
    const chunksDone = Object.keys(chunksData)
      .filter(k => k !== 'all' && chunksData[k] && chunksData[k].attempted > 0).length;

    // Compute accuracy from stored subject totals (already best-per-chunk)
    const acc = sStats.attempted > 0 ? Math.round((sStats.correct / sStats.attempted) * 100) : null;

    // Coverage = questions covered by completed chunks / total questions
    let coveredQ = 0;
    for (let ci = 0; ci < numChunks; ci++) {
      if (chunksData[ci] && chunksData[ci].attempted > 0) {
        const start = ci * CHUNK;
        coveredQ += Math.min(CHUNK, totalQ - start);
      }
    }
    // If "practice all" was done and covers more, use that
    if (chunksData['all'] && chunksData['all'].attempted > coveredQ) {
      coveredQ = chunksData['all'].attempted;
    }
    const coveragePct = totalQ > 0 ? Math.round((coveredQ / totalQ) * 100) : 0;

    const statusText = acc !== null
      ? `${chunksDone}/${numChunks} parts · ${acc}% accuracy`
      : `${totalQ} questions · ${numChunks} parts`;

    return `
      <button class="subject-card" data-subject="${subj.subject}" aria-label="Start ${subj.subject} quiz" style="--card-accent: ${subj.color}">
        <span class="subject-emoji">${subj.emoji}</span>
        <span class="subject-name">${subj.subject}</span>
        <span class="subject-count">${statusText}</span>
        <div class="subject-progress-bar">
          <div class="subject-progress-fill" style="width:${coveragePct}%; background: ${subj.color}"></div>
        </div>
      </button>`;
  }).join('');

  DOM.subjectGrid.querySelectorAll('.subject-card').forEach(card => {
    card.addEventListener('click', () => {
      playSelectSound();
      renderChunkPicker(card.dataset.subject);
    });
  });
}

/* ─── CHUNK PICKER SCREEN ─── */
function renderChunkPicker(subjectName) {
  const subj = QUESTION_BANK.find(s => s.subject === subjectName);
  if (!subj) return;

  const CHUNK = state.chunkSize;
  const total = subj.questions.length;
  const numChunks = Math.ceil(total / CHUNK);
  const sStats = (state.globalStats.subjects[subjectName] || {}).chunks || {};

  // Build chunk picker overlay on home screen
  const existing = document.getElementById('chunkPickerModal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'chunkPickerModal';
  modal.className = 'chunk-picker-modal';
  modal.innerHTML = `
    <div class="chunk-picker-box">
      <div class="chunk-picker-header">
        <span class="chunk-picker-emoji">${subj.emoji}</span>
        <div>
          <p class="chunk-picker-subject">${subj.subject}</p>
          <p class="chunk-picker-sub">Choose a part to practice</p>
        </div>
        <button class="chunk-picker-close" id="chunkPickerClose" aria-label="Close">✕</button>
      </div>
      <div class="chunk-grid">
        ${Array.from({ length: numChunks }, (_, i) => {
          const start = i * CHUNK + 1;
          const end   = Math.min((i + 1) * CHUNK, total);
          const cs    = sStats[i] || { attempted: 0, correct: 0 };
          const pct   = cs.attempted > 0 ? Math.round((cs.correct / cs.attempted) * 100) : null;
          const done  = pct !== null;
          return `
            <button class="chunk-btn${done ? ' chunk-done' : ''}" data-chunk="${i}" style="--card-accent:${subj.color}">
              <span class="chunk-label">Part ${i + 1}</span>
              <span class="chunk-range">Q${start}–${end}</span>
              ${done ? `<span class="chunk-pct" style="color:${subj.color}">${pct}%</span>` : '<span class="chunk-pct">—</span>'}
              <div class="chunk-bar"><div class="chunk-bar-fill" style="width:${done ? pct : 0}%; background:${subj.color}"></div></div>
            </button>`;
        }).join('')}
      </div>
      <div class="chunk-picker-actions">
        <button class="btn btn-primary" id="chunkStartAll" style="background:${subj.color};border-color:${subj.color}">Practice All (${total} Qs)</button>
      </div>
    </div>`;

  document.body.appendChild(modal);
  requestAnimationFrame(() => modal.classList.add('visible'));

  document.getElementById('chunkPickerClose').addEventListener('click', () => {
    modal.classList.remove('visible');
    setTimeout(() => modal.remove(), 250);
  });

  modal.querySelectorAll('.chunk-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      playSelectSound();
      modal.classList.remove('visible');
      setTimeout(() => modal.remove(), 250);
      startQuiz(subjectName, false, parseInt(btn.dataset.chunk));
    });
  });

  document.getElementById('chunkStartAll').addEventListener('click', () => {
    playSelectSound();
    modal.classList.remove('visible');
    setTimeout(() => modal.remove(), 250);
    startQuiz(subjectName, false, 'all'); // 'all' = all questions
  });
}

function renderHomeStats() {
  const s = state.globalStats;
  const accuracy = s.totalAttempted > 0 ? Math.round((s.totalCorrect / s.totalAttempted) * 100) : 0;

  DOM.homeStats.innerHTML = `
    <div class="stats-strip">
      <div class="stats-strip-item">
        <span class="stats-strip-val">${s.totalAttempted}</span>
        <span class="stats-strip-lbl">Attempted</span>
      </div>
      <div class="stats-strip-item">
        <span class="stats-strip-val">${s.totalCorrect}</span>
        <span class="stats-strip-lbl">Correct</span>
      </div>
      <div class="stats-strip-item">
        <span class="stats-strip-val">${accuracy}%</span>
        <span class="stats-strip-lbl">Accuracy</span>
      </div>
    </div>`;
}

/* ─── 10. START QUIZ ─── */
function startQuiz(subjectName, wrongOnly = false, chunkIndex = 0) {
  const subj = QUESTION_BANK.find(s => s.subject === subjectName);
  if (!subj) return;

  state.currentSubject = subj;
  state.currentChunk   = chunkIndex;

  const CHUNK = state.chunkSize;
  let pool;

  if (wrongOnly && state.answers && state.questions.length > 0) {
    // Filter wrong answers from the previously played questions (correct pool for the chunk)
    const prevQuestions = state.questions;
    pool = prevQuestions.filter((_, i) => state.answers[i] === 'wrong');
    if (pool.length === 0) pool = [...prevQuestions];
  } else if (chunkIndex === 'all') {
    // All questions
    pool = [...subj.questions];
  } else {
    const start = chunkIndex * CHUNK;
    pool = subj.questions.slice(start, start + CHUNK);
  }

  state.questions    = pool;
  state.currentIndex = 0;
  state.answers      = new Array(pool.length).fill(null);
  state.score        = 0;
  state.streak       = 0;
  state.maxStreak    = 0;
  state.answered     = false;

  const chunkLabel = chunkIndex === 'all' ? 'All' : `Part ${chunkIndex + 1}`;
  DOM.quizSubjectTag.textContent = `${subj.emoji} ${subj.subject} · ${chunkLabel}`;
  DOM.qTotal.textContent = state.questions.length;

  renderQuestion();
  showScreen(DOM.screenQuiz);
}

/* ─── 11. QUESTION RENDERING ─── */
function renderQuestion() {
  const q = state.questions[state.currentIndex];
  const answered = state.answers[state.currentIndex];

  state.answered = answered !== null;

  DOM.qCurrent.textContent = state.currentIndex + 1;
  DOM.streakCount.textContent = state.streak;
  DOM.scoreBadge.textContent = `${state.score} pts`;

  updateProgressBar(state.currentIndex, state.questions.length);

  DOM.questionCard.style.opacity = '0';
  DOM.questionCard.style.transform = 'translateY(8px)';
  setTimeout(() => {
    DOM.questionText.textContent = q.question;
    DOM.questionCard.style.transition = 'all 250ms ease-in-out';
    DOM.questionCard.style.opacity = '1';
    DOM.questionCard.style.transform = 'translateY(0)';
  }, 30);

  const LABELS = ['A', 'B', 'C', 'D'];
  // Support both array and object format for options
  const optionsArray = Array.isArray(q.options)
    ? q.options
    : LABELS.map(lbl => q.options[lbl]).filter(Boolean);
  // Support both q.correctAnswer (full text) and q.answer (letter key)
  const correctText = q.correctAnswer !== undefined
    ? q.correctAnswer
    : (Array.isArray(q.options) ? q.options[LABELS.indexOf(q.answer)] : q.options[q.answer]);

  DOM.optionsList.style.opacity = '0';
  setTimeout(() => {
    DOM.optionsList.innerHTML = optionsArray.map((opt, i) => {
      let cls = 'option-btn';
      if (answered) {
        cls += ' disabled';
        if (opt === correctText)       cls += ' correct';
        else if (opt === answered)     cls += ' wrong';
        else                           cls += ' faded';
      }
      return `
        <button class="${cls}" data-option="${opt}" aria-label="Option ${LABELS[i]}: ${opt}">
          <span class="option-label">${LABELS[i]}</span>
          <span>${opt}</span>
        </button>`;
    }).join('');

    DOM.optionsList.style.transition = 'opacity 250ms ease-in-out';
    DOM.optionsList.style.opacity = '1';

    if (!answered) {
      DOM.optionsList.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => selectAnswer(btn.dataset.option, btn));
      });
    }
  }, 60);

  if (answered) {
    DOM.explanationPanel.classList.add('visible');
    DOM.explanationPanel.setAttribute('aria-hidden', 'false');
    DOM.explanationText.textContent = q.explanation || q.explain || '💡 The correct answer is: ' + correctText;
  } else {
    DOM.explanationPanel.classList.remove('visible');
    DOM.explanationPanel.setAttribute('aria-hidden', 'true');
    DOM.explanationBody.classList.remove('open');
    DOM.explanationChevron.classList.remove('open');
    DOM.explanationToggle.setAttribute('aria-expanded', 'false');
    DOM.explanationToggle.querySelector('span:first-child').textContent = '📖';
    DOM.explanationToggle.childNodes[1].textContent = ' Show explanation';
  }

  updateNavButtons();
}

function selectAnswer(chosen, btnEl) {
  if (state.answered) return;

  const q = state.questions[state.currentIndex];
  const LABELS = ['A', 'B', 'C', 'D'];
  const correctText = q.correctAnswer !== undefined
    ? q.correctAnswer
    : (Array.isArray(q.options) ? q.options[LABELS.indexOf(q.answer)] : q.options[q.answer]);
  const isCorrect = chosen === correctText;

  state.answered = true;
  state.answers[state.currentIndex] = isCorrect ? 'correct' : 'wrong';

  if (isCorrect) {
    state.score  += 10;
    state.streak += 1;
    state.maxStreak = Math.max(state.maxStreak, state.streak);
    DOM.streakBadge.classList.add('hot');
    setTimeout(() => DOM.streakBadge.classList.remove('hot'), 700);

    // Sound + particles
    playCorrectSound();
    burstParticles(true, btnEl, state.streak >= 3 ? 16 : 10);

    // Extra burst for hot streaks
    if (state.streak >= 3) {
      setTimeout(() => burstParticles(true, btnEl, 8), 200);
    }
  } else {
    state.streak = 0;
    playWrongSound();
    burstParticles(false, btnEl, 6);
  }

  DOM.streakCount.textContent = state.streak;
  DOM.scoreBadge.textContent  = `${state.score} pts`;

  DOM.optionsList.querySelectorAll('.option-btn').forEach(btn => {
    btn.classList.add('disabled');
    const opt = btn.dataset.option;
    if (opt === correctText)            btn.classList.add('correct');
    else if (opt === chosen && !isCorrect) btn.classList.add('wrong');
    else                                btn.classList.add('faded');
  });

  DOM.explanationPanel.classList.add('visible');
  DOM.explanationPanel.setAttribute('aria-hidden', 'false');
  DOM.explanationText.textContent = q.explanation || q.explain || '💡 The correct answer is: ' + correctText;

  updateNavButtons();
}

function updateNavButtons() {
  const isFirst  = state.currentIndex === 0;
  const isLast   = state.currentIndex === state.questions.length - 1;
  const answered = state.answered;

  DOM.btnPrev.disabled    = isFirst;
  DOM.btnNext.disabled    = !answered || isLast;
  DOM.btnSubmit.style.display = (isLast && answered) ? 'inline-flex' : 'none';
  DOM.btnNext.style.display   = isLast ? 'none' : 'inline-flex';
}

/* ─── 12. NAVIGATION ─── */
DOM.btnNext.addEventListener('click', () => {
  if (state.currentIndex < state.questions.length - 1) {
    playSelectSound();
    state.currentIndex++;
    renderQuestion();
  }
});

DOM.btnPrev.addEventListener('click', () => {
  if (state.currentIndex > 0) {
    playSelectSound();
    state.currentIndex--;
    renderQuestion();
  }
});

DOM.btnSubmit.addEventListener('click', () => {
  playSelectSound();
  finishQuiz();
});

DOM.btnQuit.addEventListener('click', () => {
  if (confirm('Quit this quiz? Your progress will be lost.')) {
    playSelectSound();
    renderHome();
  }
});

/* ─── 13. EXPLANATION TOGGLE ─── */
DOM.explanationToggle.addEventListener('click', () => {
  const open = DOM.explanationBody.classList.toggle('open');
  DOM.explanationChevron.classList.toggle('open', open);
  DOM.explanationToggle.setAttribute('aria-expanded', open);
  DOM.explanationToggle.childNodes[1].textContent = open ? ' Hide explanation' : ' Show explanation';
  playSelectSound();
});

/* ─── 14. FINISH QUIZ & SAVE STATS ─── */
function finishQuiz() {
  const correct   = state.answers.filter(a => a === 'correct').length;
  const total     = state.questions.length;
  const accuracy  = total > 0 ? Math.round((correct / total) * 100) : 0;

  const s = state.globalStats;
  s.sessions += 1;

  // Track session history for line chart
  if (!s.sessionHistory) s.sessionHistory = [];
  s.sessionHistory.push({
    session:  s.sessions,
    subject:  state.currentSubject.subject,
    accuracy: accuracy,
    score:    state.score,
    date:     new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })
  });
  // Keep only last 10 sessions
  if (s.sessionHistory.length > 10) s.sessionHistory.shift();

  const sName = state.currentSubject.subject;
  if (!s.subjects[sName]) s.subjects[sName] = { attempted: 0, correct: 0, chunks: {} };
  if (!s.subjects[sName].chunks) s.subjects[sName].chunks = {};

  // Save per-chunk stats — keep only the BEST attempt per chunk (not cumulative)
  if (state.currentChunk !== 'all') {
    const ci = state.currentChunk;
    const prev = s.subjects[sName].chunks[ci];
    // Store best accuracy attempt for this chunk
    if (!prev || correct > prev.correct) {
      s.subjects[sName].chunks[ci] = { attempted: total, correct: correct };
    }
  }

  // Recompute subject-level totals from best-per-chunk results
  // This prevents retries from inflating the attempted/correct counts
  const subjObj = QUESTION_BANK.find(sb => sb.subject === sName);
  const CHUNK = state.chunkSize;
  const totalQ = subjObj ? subjObj.questions.length : 0;
  const numChunks = Math.ceil(totalQ / CHUNK);

  if (state.currentChunk !== 'all') {
    // Rebuild totals from chunks only
    let sumAttempted = 0, sumCorrect = 0;
    for (let ci = 0; ci < numChunks; ci++) {
      const cs = s.subjects[sName].chunks[ci];
      if (cs) {
        sumAttempted += cs.attempted;
        sumCorrect   += cs.correct;
      }
    }
    s.subjects[sName].attempted = sumAttempted;
    s.subjects[sName].correct   = sumCorrect;
  } else {
    // "Practice All" — store as a special 'all' key
    // Only update subject totals if this full-run is better than current
    const prevAll = s.subjects[sName].chunks['all'];
    if (!prevAll || correct > prevAll.correct) {
      s.subjects[sName].chunks['all'] = { attempted: total, correct: correct };
    }
    // For "all", use the best full-run result vs best chunk-by-chunk — take whichever covers more
    const bestAll = s.subjects[sName].chunks['all'];
    let chunkSumAttempted = 0, chunkSumCorrect = 0;
    for (let ci = 0; ci < numChunks; ci++) {
      const cs = s.subjects[sName].chunks[ci];
      if (cs) { chunkSumAttempted += cs.attempted; chunkSumCorrect += cs.correct; }
    }
    // Use chunk-sum if more questions covered, else the full-run
    if (chunkSumAttempted >= bestAll.attempted) {
      s.subjects[sName].attempted = chunkSumAttempted;
      s.subjects[sName].correct   = chunkSumCorrect;
    } else {
      s.subjects[sName].attempted = bestAll.attempted;
      s.subjects[sName].correct   = bestAll.correct;
    }
  }

  // Recompute global totals from all subjects' best-per-chunk data
  let globalAttempted = 0, globalCorrect = 0;
  for (const subName of Object.keys(s.subjects)) {
    globalAttempted += s.subjects[subName].attempted || 0;
    globalCorrect   += s.subjects[subName].correct   || 0;
  }
  s.totalAttempted = globalAttempted;
  s.totalCorrect   = globalCorrect;
  saveStats(s);
  state.globalStats = s;

  updateProgressBar(total, total);

  // Celebrate based on score
  if (accuracy >= 80) {
    playSuccessFanfare();
    setTimeout(() => bigCelebration(), 300);
  } else if (accuracy >= 50) {
    playCorrectSound();
    burstParticles(true, null, 12);
  }

  renderResults(correct, total, accuracy);
  showScreen(DOM.screenResults);
}

/* ─── 15. RESULTS SCREEN ─── */
function renderResults(correct, total, accuracy) {
  const wrong = total - correct;

  const title = accuracy >= 80 ? '🏆 Excellent!' : accuracy >= 60 ? '✨ Well done.' : accuracy >= 40 ? '💪 Keep going.' : '📚 Keep practicing.';
  DOM.resultsTitle.textContent = title;
  DOM.resultsSub.textContent   = getMotivation(accuracy);

  DOM.scCorrect.textContent  = `${correct}/${total}`;
  DOM.scAccuracy.textContent = `${accuracy}%`;
  DOM.scScore.textContent    = `${state.score}`;

  if (state.chartDoughnut) { state.chartDoughnut.destroy(); state.chartDoughnut = null; }
  if (state.chartBar)      { state.chartBar.destroy();      state.chartBar = null; }
  if (state.chartPie)      { state.chartPie.destroy();      state.chartPie = null; }

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const colorCorrect = isDark ? '#34d399' : '#059669';
  const colorWrong   = isDark ? '#f87171' : '#dc2626';
  const colorNeutral = isDark ? '#3f3f46' : '#e4e4e7';
  const colorText    = isDark ? '#fafafa'  : '#0f0f11';

  // Doughnut
  DOM.doughnutLabel.textContent = `${accuracy}%`;
  state.chartDoughnut = new Chart(DOM.chartDoughnut, {
    type: 'doughnut',
    data: {
      labels: ['Correct', 'Wrong'],
      datasets: [{
        data: [correct, wrong],
        backgroundColor: [colorCorrect, colorNeutral],
        borderWidth: 0,
        hoverOffset: 0,
      }]
    },
    options: {
      cutout: '72%',
      animation: { duration: 700, easing: 'easeInOutQuart' },
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
    }
  });

  // Per-question bar chart — group into blocks of 5 if > 20 questions
  const total50 = state.questions.length;
  let labels, data, colors;
  if (total50 <= 20) {
    labels = state.questions.map((_, i) => `Q${i + 1}`);
    data   = state.answers.map(a => a === 'correct' ? 1 : 0);
    colors = state.answers.map(a => a === 'correct' ? colorCorrect : colorWrong);
  } else {
    // Group into blocks of 5
    const blockSize = 5;
    const blocks = Math.ceil(total50 / blockSize);
    labels = Array.from({ length: blocks }, (_, b) => `Q${b * blockSize + 1}–${Math.min((b + 1) * blockSize, total50)}`);
    data   = Array.from({ length: blocks }, (_, b) => {
      const slice = state.answers.slice(b * blockSize, (b + 1) * blockSize);
      return slice.filter(a => a === 'correct').length;
    });
    const maxBlock = blockSize;
    colors = data.map(d => d >= maxBlock * 0.8 ? colorCorrect : d >= maxBlock * 0.4 ? '#f59e0b' : colorWrong);
  }

  state.chartBar = new Chart(DOM.chartBar, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        data,
        backgroundColor: colors,
        borderRadius: 6,
        borderSkipped: false,
      }]
    },
    options: {
      responsive: true,
      animation: { duration: 600, easing: 'easeInOutQuart' },
      scales: {
        y: { display: total50 > 20, max: total50 > 20 ? 5 : 1.5, min: 0,
             ticks: { color: colorText, stepSize: 1 }, grid: { display: false }, border: { display: false } },
        x: {
          ticks: { color: colorText, font: { size: total50 > 20 ? 9 : 11 }, maxRotation: total50 > 20 ? 45 : 0 },
          grid: { display: false },
          border: { display: false },
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: ctx => total50 > 20 ? `${ctx.raw}/5 correct` : ctx.raw === 1 ? '✅ Correct' : '❌ Incorrect' } }
      }
    }
  });

  // NEW: Pie chart — correct vs wrong with labels
  const pieCanvas = $('chartResultPie');
  if (pieCanvas) {
    if (state.chartPie) { state.chartPie.destroy(); state.chartPie = null; }
    state.chartPie = new Chart(pieCanvas, {
      type: 'pie',
      data: {
        labels: ['Correct', 'Incorrect'],
        datasets: [{
          data: [correct, wrong],
          backgroundColor: [colorCorrect, colorWrong],
          borderWidth: 2,
          borderColor: isDark ? '#18181b' : '#ffffff',
        }]
      },
      options: {
        animation: { duration: 700 },
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: { color: colorText, usePointStyle: true, font: { size: 11 } }
          },
          tooltip: {
            callbacks: {
              label: ctx => ` ${ctx.label}: ${ctx.raw} (${Math.round(ctx.raw/total*100)}%)`
            }
          }
        }
      }
    });
  }

  const wrongCount = state.answers.filter(a => a === 'wrong').length;
  DOM.btnRetryWrong.textContent = wrongCount > 0
    ? `Retry ${wrongCount} incorrect`
    : 'No incorrect answers 🎉';
  DOM.btnRetryWrong.disabled = wrongCount === 0;
}

function rebuildResultsCharts() {
  const correct  = state.answers.filter(a => a === 'correct').length;
  const total    = state.questions.length;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
  renderResults(correct, total, accuracy);
}

/* ─── 16. RESULTS ACTIONS ─── */
DOM.btnRetryWrong.addEventListener('click', () => {
  playSelectSound();
  startQuiz(state.currentSubject.subject, true, state.currentChunk);
});
DOM.btnRetryAll.addEventListener('click', () => {
  playSelectSound();
  startQuiz(state.currentSubject.subject, false, state.currentChunk);
});
DOM.btnHome.addEventListener('click', () => {
  playSelectSound();
  renderHome();
});

/* ─── 17. ANALYTICS SCREEN ─── */
function renderAnalytics() {
  const s = state.globalStats;
  const accuracy = s.totalAttempted > 0 ? Math.round((s.totalCorrect / s.totalAttempted) * 100) : 0;

  DOM.atTotal.textContent    = s.totalAttempted;
  DOM.atCorrect.textContent  = s.totalCorrect;
  DOM.atAccuracy.textContent = `${accuracy}%`;
  DOM.atSessions.textContent = s.sessions;

  buildAllTimeChart();
  buildSubjectBreakdown();
  buildAnalyticsExtraCharts();
  updateProgressBar(s.totalCorrect, s.totalAttempted);
  showScreen(DOM.screenAnalytics);
}

function buildAllTimeChart() {
  if (state.chartAllTime) { state.chartAllTime.destroy(); state.chartAllTime = null; }

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const colorCorrect = isDark ? '#818cf8' : '#4f46e5';
  const colorWrong   = isDark ? '#f87171' : '#fca5a5';
  const colorText    = isDark ? '#a1a1aa'  : '#71717a';

  const subjects = QUESTION_BANK.map(s => s.subject);
  const correct  = subjects.map(n => (state.globalStats.subjects[n] || {}).correct   || 0);
  const wrong    = subjects.map(n => {
    const sub = state.globalStats.subjects[n] || {};
    return (sub.attempted || 0) - (sub.correct || 0);
  });

  state.chartAllTime = new Chart(DOM.chartAllTime, {
    type: 'bar',
    data: {
      labels: subjects,
      datasets: [
        { label: 'Correct',   data: correct, backgroundColor: colorCorrect, borderRadius: 4, borderSkipped: false },
        { label: 'Incorrect', data: wrong,   backgroundColor: colorWrong,   borderRadius: 4, borderSkipped: false }
      ]
    },
    options: {
      responsive: true,
      animation: { duration: 600 },
      scales: {
        x: { stacked: true, ticks: { color: colorText, font: { size: 10 } }, grid: { display: false }, border: { display: false } },
        y: { stacked: true, ticks: { color: colorText, font: { size: 11 }, stepSize: 1 }, grid: { color: isDark ? '#27272a' : '#f0f0f2' }, border: { display: false } }
      },
      plugins: {
        legend: { display: true, position: 'top', labels: { color: colorText, usePointStyle: true, pointStyleWidth: 10, boxHeight: 8, font: { size: 11 } } }
      }
    }
  });
}

function buildAnalyticsExtraCharts() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const colorText  = isDark ? '#a1a1aa' : '#71717a';
  const colorGrid  = isDark ? '#27272a' : '#f0f0f2';
  const accentColor = isDark ? '#818cf8' : '#4f46e5';

  // ── Radar Chart: subject mastery ──
  const radarCanvas = $('chartRadar');
  if (radarCanvas) {
    if (state.chartRadar) { state.chartRadar.destroy(); state.chartRadar = null; }
    const subjects = QUESTION_BANK.map(s => s.subject);
    const radarData = subjects.map(n => {
      const sub = state.globalStats.subjects[n] || {};
      return sub.attempted > 0 ? Math.round((sub.correct / sub.attempted) * 100) : 0;
    });

    state.chartRadar = new Chart(radarCanvas, {
      type: 'radar',
      data: {
        labels: subjects,
        datasets: [{
          label: 'Mastery %',
          data: radarData,
          backgroundColor: isDark ? 'rgba(129,140,248,0.2)' : 'rgba(79,70,229,0.15)',
          borderColor: accentColor,
          borderWidth: 2,
          pointBackgroundColor: accentColor,
          pointRadius: 4,
        }]
      },
      options: {
        animation: { duration: 700 },
        scales: {
          r: {
            min: 0, max: 100,
            ticks: { display: false, stepSize: 25 },
            pointLabels: { color: colorText, font: { size: 10, weight: '600' } },
            grid:     { color: colorGrid },
            angleLines:{ color: colorGrid },
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: ctx => ` ${ctx.raw}% mastery` } }
        }
      }
    });
  }

  // ── Line Chart: session accuracy trend ──
  const lineCanvas = $('chartLine');
  if (lineCanvas) {
    if (state.chartLine) { state.chartLine.destroy(); state.chartLine = null; }
    const hist = state.globalStats.sessionHistory || [];

    if (hist.length > 0) {
      state.chartLine = new Chart(lineCanvas, {
        type: 'line',
        data: {
          labels: hist.map((h, i) => h.date || `S${i + 1}`),
          datasets: [{
            label: 'Accuracy %',
            data: hist.map(h => h.accuracy),
            borderColor: accentColor,
            backgroundColor: isDark ? 'rgba(129,140,248,0.1)' : 'rgba(79,70,229,0.08)',
            borderWidth: 2.5,
            tension: 0.4,
            fill: true,
            pointBackgroundColor: accentColor,
            pointRadius: 5,
            pointHoverRadius: 7,
          }]
        },
        options: {
          responsive: true,
          animation: { duration: 700 },
          scales: {
            y: {
              min: 0, max: 100,
              ticks: { color: colorText, font: { size: 11 }, callback: v => v + '%' },
              grid: { color: colorGrid },
              border: { display: false },
            },
            x: {
              ticks: { color: colorText, font: { size: 10 } },
              grid: { display: false },
              border: { display: false },
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: ctx => ` ${ctx.raw}% accuracy` } }
          }
        }
      });
    } else {
      const parent = lineCanvas.parentElement;
      parent.innerHTML = `<div class="empty-chart-msg">📈 Complete a quiz to see your trend</div>`;
    }
  }

  // ── Subject Pie Chart ──
  const subPieCanvas = $('chartSubjectPie');
  if (subPieCanvas) {
    if (state.chartSubjectPie) { state.chartSubjectPie.destroy(); state.chartSubjectPie = null; }
    const subjects = QUESTION_BANK.map(s => s.subject);
    const attempted = subjects.map(n => (state.globalStats.subjects[n] || {}).attempted || 0);
    const totalAttempted = attempted.reduce((a, b) => a + b, 0);

    if (totalAttempted > 0) {
      const palette = ['#6366f1','#0ea5e9','#f59e0b','#10b981','#8b5cf6','#ef4444'];
      state.chartSubjectPie = new Chart(subPieCanvas, {
        type: 'doughnut',
        data: {
          labels: subjects,
          datasets: [{
            data: attempted,
            backgroundColor: palette,
            borderWidth: 2,
            borderColor: isDark ? '#18181b' : '#ffffff',
            hoverOffset: 6,
          }]
        },
        options: {
          cutout: '55%',
          animation: { duration: 700 },
          plugins: {
            legend: {
              display: true,
              position: 'right',
              labels: { color: colorText, usePointStyle: true, font: { size: 10 }, boxHeight: 8 }
            },
            tooltip: {
              callbacks: {
                label: ctx => ` ${ctx.label}: ${ctx.raw} questions`
              }
            }
          }
        }
      });
    } else {
      subPieCanvas.parentElement.innerHTML = `<div class="empty-chart-msg">🍕 Take quizzes to see your focus breakdown</div>`;
    }
  }
}

function buildSubjectBreakdown() {
  const rows = QUESTION_BANK.map(subj => {
    const sub = state.globalStats.subjects[subj.subject] || { attempted: 0, correct: 0 };
    const pct = sub.attempted > 0 ? Math.round((sub.correct / sub.attempted) * 100) : 0;
    return { name: subj.subject, emoji: subj.emoji, color: subj.color, pct, attempted: sub.attempted };
  }).sort((a, b) => b.attempted - a.attempted);

  if (rows.every(r => r.attempted === 0)) {
    DOM.subjectBreakdown.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📭</div>
        <p>No quizzes taken yet.<br/>Start a subject to see progress here.</p>
      </div>`;
    return;
  }

  DOM.subjectBreakdown.innerHTML = `
    <p class="breakdown-title">By subject</p>
    ${rows.map(r => `
      <div class="breakdown-row">
        <span class="breakdown-emoji">${r.emoji}</span>
        <span class="breakdown-name">${r.name}</span>
        <div class="breakdown-bar-wrap">
          <div class="breakdown-bar-fill" style="width:${r.pct}%; background: ${r.color}"></div>
        </div>
        <span class="breakdown-pct">${r.attempted > 0 ? r.pct + '%' : '—'}</span>
      </div>`).join('')}`;
}

/* ─── 18. EVENT BINDINGS ─── */
DOM.themeToggle.addEventListener('click', toggleTheme);
DOM.statsBtn.addEventListener('click', () => { playSelectSound(); renderAnalytics(); });
DOM.btnBackFromAnalytics.addEventListener('click', () => { playSelectSound(); renderHome(); });

/* ─── 19. INIT ─── */
function init() {
  applyTheme(loadTheme());
  renderHome();
}

init();