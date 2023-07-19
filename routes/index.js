var express = require('express');
var router = express.Router();


const glossary_list = [
  { 'id': 1, 'Term': 'Nanotechnology', 'Description': 'Nanotechnology involves manipulating matter at the molecular or atomic level to create new materials, devices, and applications with unique properties (Roco, 2003).', 'reference': 'Roco, M. C. (2003). Broader societal issues of nanotechnology. Journal of Nanoparticle Research, 5(3-4), 181-189.' },
  { 'id': 2, 'Term': 'Virtual Reality', 'Description': 'VR is a computer-generated simulation that immerses users in a three-dimensional environment, usually experienced through specialized headsets and devices ', 'reference': 'Biocca, F. (1992). Communication within Virtual Reality: Creating a Space for Research. Journal of Communication, 42(4), 5-22.' },
  { 'id': 3, 'Term': 'Renewable energy ', 'Description': 'Renewable energy refers to energy sources derived from natural processes that are continually replenished, such as solar, wind, hydropower, geothermal, and biomass', 'reference': 'Jacobson, M. Z., & Delucchi, M. A. (2011). Providing all global energy with wind, water, and solar power, Part I: Technologies, energy resources, quantities and areas of infrastructure, and materials. Energy Policy, 39(3), 1154-1169.' },
  { 'id': 4, 'Term': 'Machine Learning', 'Description': ' Machine learning is an AI technique in which computer systems learn from and improve their performance on tasks without being explicitly programmed, often using statistical approaches', 'reference': 'Mitchell, T. M. (1997). Machine Learning. McGraw Hill.' },
  { 'id': 5, 'Term': 'Internet of Things', 'Description': 'IoT is a network of physical devices, vehicles, appliances, and other objects embedded with sensors, software, and connectivity, enabling them to collect and exchange data', 'reference': 'Atzori, L., Iera, A., & Morabito, G. (2010). The Internet of Things: A survey. Computer Networks, 54(15), 2787-2805.' },
  { 'id': 6, 'Term': 'Gene Editing', 'Description': 'Gene editing is a technique that allows scientists to modify an organisms DNA, enabling precise alterations to genes, potentially offering solutions for genetic diseases and agricultural improvements', 'reference': 'Doudna, J. A., & Sternberg, S. H. (2017). A Crack in Creation: Gene Editing and the Unthinkable Power to Control Evolution. Houghton Mifflin Harcourt.' },
  { 'id': 7, 'Term': 'Cybersecurity', 'Description': 'Cybersecurity involves protecting computer systems, networks, and data from unauthorized access, attacks, and damage to maintain confidentiality, integrity, and availability', 'reference': 'NIST. (2017). NIST Cybersecurity Framework. National Institute of Standards and Technology.' },
  { 'id': 8, 'Term': 'Climate Change', 'Description': ' Climate change refers to the long-term alteration of Earths climate patterns, including global warming caused by human activities such as burning fossil fuels and deforestation', 'reference': 'IPCC. (2014). Climate Change 2014: Synthesis Report. Contribution of Working Groups I, II, and III to the Fifth Assessment Report of the Intergovernmental Panel on Climate Change. Geneva, Switzerland: IPCC.' },
  { 'id': 9, 'Term': 'Blockchain', 'Description': 'Blockchain is a decentralized and distributed digital ledger technology that records transactions across multiple computers in a way that ensures security, transparency, and immutability', 'reference': 'Swan, M. (2015). Blockchain: Blueprint for a New Economy. O Reilly Media.' },
  { 'id': 10, 'Term': 'Artificial Intelligence', 'Description': ' AI refers to the simulation of human intelligence in machines that are programmed to perform tasks requiring human-like cognitive abilities, such as learning, problem-solving, and decision-making', 'reference': 'Russell, S. J., & Norvig, P. (2016). Artificial Intelligence: A Modern Approach (3rd ed.). Pearson.' },
  
  
];



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Glossary', glossary: glossary_list });
});

module.exports = router;
