var express = require('express');
var router = express.Router();


const glossary_list = [
  
    {
      'id': 1,
      'Term': 'Nanotechnology',
      'Description': 'Nanotechnology involves manipulating matter at the molecular or atomic level to create new materials, devices, and applications with unique properties (Roco, 2003).',
      'reference': 'Roco, M. C. (2003). Broader societal issues of nanotechnology. Journal of Nanoparticle Research, 5(3-4), 181-189.'
    },
    {
      'id': 2,
      'Term': 'Virtual Reality',
      'Description': 'VR is a computer-generated simulation that immerses users in a three-dimensional environment, usually experienced through specialized headsets and devices (Biocca, 1992).',
      'reference': 'Biocca, F. (1992). Communication within Virtual Reality: Creating a Space for Research. Journal of Communication, 42(4), 5-22.'
    },
    {
      'id': 3,
      'Term': 'Renewable Energy',
      'Description': 'Renewable energy refers to energy sources derived from natural processes that are continually replenished, such as solar, wind, hydropower, geothermal, and biomass (Jacobson & Delucchi, 2011).',
      'reference': 'Jacobson, M. Z., & Delucchi, M. A. (2011). Providing all global energy with wind, water, and solar power, Part I: Technologies, energy resources, quantities and areas of infrastructure, and materials. Energy Policy, 39(3), 1154-1169.'
    },
    {
      'id': 4,
      'Term': 'Machine Learning',
      'Description': 'Machine learning is an AI technique in which computer systems learn from and improve their performance on tasks without being explicitly programmed, often using statistical approaches (Mitchell, 1997).',
      'reference': 'Mitchell, T. M. (1997). Machine Learning. McGraw Hill.'
    },
    {
      'id': 5,
      'Term': 'Internet of Things',
      'Description': 'IoT is a network of physical devices, vehicles, appliances, and other objects embedded with sensors, software, and connectivity, enabling them to collect and exchange data (Atzori et al., 2010).',
      'reference': 'Atzori, L., Iera, A., & Morabito, G. (2010). The Internet of Things: A survey. Computer Networks, 54(15), 2787-2805.'
    },
    {
      'id': 6,
      'Term': 'Gene Editing',
      'Description': 'Gene editing is a technique that allows scientists to modify an organisms DNA, enabling precise alterations to genes, potentially offering solutions for genetic diseases and agricultural improvements (Doudna & Sternberg, 2017).',
      'reference': 'Doudna, J. A., & Sternberg, S. H. (2017). A Crack in Creation: Gene Editing and the Unthinkable Power to Control Evolution. Houghton Mifflin Harcourt.'
    },
    {
      'id': 7,
      'Term': 'Cybersecurity',
      'Description': 'Cybersecurity involves protecting computer systems, networks, and data from unauthorized access, attacks, and damage to maintain confidentiality, integrity, and availability (NIST, 2017).',
      'reference': 'NIST. (2017). NIST Cybersecurity Framework. National Institute of Standards and Technology.'
    },
    {
      'id': 8,
      'Term': 'Climate Change',
      'Description': 'Climate change refers to the long-term alteration of Earths climate patterns, including global warming caused by human activities such as burning fossil fuels and deforestation (IPCC, 2014).',
      'reference': 'IPCC. (2014). Climate Change 2014: Synthesis Report. Contribution of Working Groups I, II, and III to the Fifth Assessment Report of the Intergovernmental Panel on Climate Change. Geneva, Switzerland: IPCC.'
    },
    {
      'id': 9,
      'Term': 'Blockchain',
      'Description': 'Blockchain is a decentralized and distributed digital ledger technology that records transactions across multiple computers in a way that ensures security, transparency, and immutability (Swan, 2015).',
      'reference': 'Swan, M. (2015). Blockchain: Blueprint for a New Economy. O Reilly Media.'
    },
    {
      'id': 10,
      'Term': 'Artificial Intelligence',
      'Description': 'AI refers to the simulation of human intelligence in machines that are programmed to perform tasks requiring human-like cognitive abilities, such as learning, problem-solving, and decision-making (Russell & Norvig, 2016).',
      'reference': 'Russell, S. J., & Norvig, P. (2016). Artificial Intelligence: A Modern Approach (3rd ed.). Pearson.'
    },
    {
      'id': 11,
      'Term': 'Big Data',
      'Description': 'Big data refers to extremely large and complex datasets that require specialized processing and analysis techniques to extract meaningful insights and patterns (Laney, 2001).',
      'reference': 'Laney, D. (2001). 3D Data Management: Controlling Data Volume, Velocity, and Variety. META Group Research Note, G00166629.'
    },
    {
      'id': 12,
      'Term': 'Cloud Computing',
      'Description': 'Cloud computing is the delivery of computing services, including storage, processing power, and software, over the internet, allowing users to access resources on-demand without local infrastructure (Armbrust et al., 2010).',
      'reference': 'Armbrust, M., Fox, A., Griffith, R., Joseph, A. D., Katz, R. H., Konwinski, A., ... & Zaharia, M. (2010). A view of cloud computing. Communications of the ACM, 53(4), 50-58.'
    },
    {
      'id': 13,
      'Term': 'Deep Learning',
      'Description': 'Deep learning is a subset of machine learning that involves artificial neural networks with multiple layers, enabling the system to automatically learn hierarchical features from data (LeCun et al., 2015).',
      'reference': 'LeCun, Y., Bengio, Y., & Hinton, G. (2015). Deep learning. Nature, 521(7553), 436-444.'
    },
    {
      'id': 14,
      'Term': 'Fintech',
      'Description': 'Fintech, short for financial technology, refers to innovative technologies and solutions that enhance and automate financial services, including banking, payments, lending, and investment (PwC, 2017).',
      'reference': 'PwC. (2017). Redrawing the lines: FinTech’s growing influence on financial services. PwC Global FinTech Report.'
    },
    {
      'id': 15,
      'Term': 'Genetic Engineering',
      'Description': 'Genetic engineering involves manipulating an organisms genes to introduce specific traits or modifications, often used in biotechnology and agriculture (National Academies of Sciences, Engineering, and Medicine, 2016).',
      'reference': 'National Academies of Sciences, Engineering, and Medicine. (2016). Gene Drives on the Horizon: Advancing Science, Navigating Uncertainty, and Aligning Research with Public Values. The National Academies Press.'
    },
    {
      'id': 16,
      'Term': 'Quantum Computing',
      'Description': 'Quantum computing utilizes quantum-mechanical phenomena, such as superposition and entanglement, to perform computations with the potential to solve complex problems more efficiently than classical computers (Preskill, 2018).',
      'reference': 'Preskill, J. (2018). Quantum Computing in the NISQ era and beyond. Quantum, 2, 79.'
    },
    {
      'id': 17,
      'Term': 'Robotics',
      'Description': 'Robotics is the interdisciplinary field that involves the design, construction, operation, and use of robots to perform tasks autonomously or under human control (Siciliano & Khatib, 2016).',
      'reference': 'Siciliano, B., & Khatib, O. (Eds.). (2016). Springer Handbook of Robotics. Springer.'
    },
    {
      'id': 18,
      'Term': 'Sustainable Development',
      'Description': 'Sustainable development refers to the practice of meeting current societal needs without compromising the ability of future generations to meet their own needs, balancing economic, environmental, and social factors (United Nations, 1987).',
      'reference': 'United Nations. (1987). Our Common Future: Report of the World Commission on Environment and Development. Oxford University Press.'
    },
    {
      'id': 19,
      'Term': 'Virtual Assistant',
      'Description': 'A virtual assistant is an AI-powered software or application that can perform tasks, provide information, and interact with users through natural language processing and other technologies (Li et al., 2020).',
      'reference': 'Li, D., Chu, W., & Miao, C. (2020). Virtual Assistant Design and Features: A Literature Review. IEEE Access, 8, 21377-21392.'
    },
    {
      'id': 20,
      'Term': '5G',
      'Description': '5G refers to the fifth generation of mobile wireless technology, offering significantly higher data speeds, lower latency, and increased connectivity for a wide range of applications (Rappaport et al., 2013).',
      'reference': 'Rappaport, T. S., Heath Jr, R. W., Daniels, R. C., & Murdock, J. N. (2013). Millimeter wave wireless communications. Prentice Hall.'
    },
  
      {
        'id': 21,
        'Term': 'Wireless Charging',
        'Description': 'Wireless Charging is a technology that enables devices to be charged without the need for physical cables. It uses electromagnetic fields to transfer power between a charging station and a compatible device, allowing for convenient and cable-free charging experiences.',
        'reference': 'O\'Neill, T., & Covic, G. A. (2018). Wireless Power Transfer for Electric Vehicles and Mobile Devices. Wiley.'
      },
      {
        'id': 22,
        'Term': 'Smart Cities',
        'Description': 'Smart Cities are urban environments that leverage technology and data to improve the efficiency of services, enhance the quality of life for residents, and optimize resource utilization. This involves integrating various technologies, such as IoT sensors, data analytics, and automation, to address urban challenges.',
        'reference': 'Giffinger, R., Fertner, C., Kramar, H., Kalasek, R., Pichler-Milanovic, N., & Meijers, E. (2007). Smart Cities: Ranking of European Medium-Sized Cities. Centre of Regional Science.'
      },
      {
        'id': 23,
        'Term': 'Digital Twin',
        'Description': 'A Digital Twin is a virtual representation of a physical object, process, or system. It is used for real-time monitoring, simulation, and analysis. By creating a digital counterpart of a physical entity, organizations can gain insights, optimize performance, and make informed decisions.',
        'reference': 'Glaessgen, E. H., & Stargel, D. S. (2012). The Digital Twin Paradigm for Future NASA and US Air Force Vehicles. Proceedings of the AIAA Modeling and Simulation Technologies Conference.'
      },
      {
        'id': 24,
        'Term': 'Quantified Self',
        'Description': 'The Quantified Self movement involves tracking and analyzing personal data, such as physical activity, sleep patterns, and health metrics, using technology. This self-monitoring helps individuals gain insights into their behaviors and habits to make informed decisions about their lifestyle and well-being.',
        'reference': 'Swan, M. (2013). The Quantified Self: Fundamental Disruption in Big Data Science and Biological Discovery. Big Data, 1(2), 85-99.'
      },
      {
        'id': 25,
        'Term': 'Neural Networks',
        'Description': 'Neural Networks are computational models inspired by the structure and functioning of the human brain. They are used in machine learning to recognize patterns, solve complex problems, and make predictions. Neural networks consist of interconnected nodes (neurons) that process and transmit information.',
        'reference': 'Haykin, S. (2009). Neural Networks and Learning Machines. Pearson.'
      },
      {
        'id': 26,
        'Term': '3D Printing',
        'Description': '3D Printing, also known as additive manufacturing, is a process of creating three-dimensional objects from digital design files. It involves adding material layer by layer to build the final object, making it a versatile technology used in various industries for prototyping, manufacturing, and customization.',
        'reference': 'Gibson, I., Rosen, D. W., & Stucker, B. (2014). Additive Manufacturing Technologies: 3D Printing, Rapid Prototyping, and Direct Digital Manufacturing. Springer.'
      },
      {
        'id': 27,
        'Term': 'Biotechnology',
        'Description': 'Biotechnology involves the use of biological systems, organisms, or living cells to develop products and applications for various fields, including medicine, agriculture, and industry. It harnesses biological processes and organisms to create new technologies and solve challenges.',
        'reference': 'Smith, J. E., & Smith, J. A. (2019). Biotechnology. Cambridge University Press.'
      },
      {
        'id': 28,
        'Term': 'Smart Grid',
        'Description': 'A Smart Grid is an advanced electrical grid that integrates modern communication and information technologies into the power distribution system. It enables real-time monitoring, control, and optimization of energy generation, distribution, and consumption, leading to improved efficiency and reliability.',
        'reference': 'Amin, M., & Zhang, L. (2011). Smart Grid: Overview, Issues and Opportunities. IEEE Transactions on Smart Grid, 2(2), 295-296.'
      },
      {
        'id': 29,
        'Term': 'Cyber-Attack',
        'Description': 'A Cyber-Attack refers to deliberate actions taken to compromise computer systems, networks, or devices with malicious intent. These attacks can include hacking, malware distribution, and unauthorized access, resulting in data breaches, service disruptions, and other security breaches.',
        'reference': 'Goodman, S. E. (Year). Data and Goliath: The Hidden Battles to Collect Your Data and Control Your World. W. W. Norton & Company.'
      },
      {
        'id': 30,
        'Term': 'Edge Computing',
        'Description': 'Edge Computing is a computing paradigm that involves processing data closer to its source, reducing the need to send all data to centralized cloud servers. This approach minimizes latency and improves real-time processing for applications like IoT, where immediate response is crucial.',
        'reference': 'Shi, W., Cao, J., Zhang, Q., Li, Y., & Xu, L. (2016). Edge Computing: Vision and Challenges. IEEE Internet of Things Journal, 3(5), 637-646.'
      }
    
    


];



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Glossary', glossary: glossary_list });
});

module.exports = router;
