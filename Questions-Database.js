// TODO: change correct to index
// TODO: randomize answers (extra functionality)
const KEY = [
    {question: `In 1902, a chemist with a government grant tested this common 
    preservative by adding it to the daily meals of 12 volunteers for almost a year. 
    The brave men (known as the Poison Squad) began suffering from stomachaches, 
    headaches, and lost appetites from consuming this chemical. It’s now banned from 
    food in the US although still used in other countries.`,
    answers: ['Radium', 'Borax (Sodium Borate)', 'Potassium Bromate', 'Cyclamate'],
    correct: 'Borax (Sodium Borate)',
    response: `<img src="https://hips.hearstapps.com/esq.h-cdn.co/assets/cm/15/06/54cf5d7ac4217_-_poison-squad-sign.jpg" alt="Poison Squad eating a meal with sign
    that says 'None but the Brave Can Eat the Fare'">`,
    feedback: `Borax is still used as a cleaning product in the US. Read more about 
    the daring experiments the Poison Squad went through to make food safe!
    <a href="https://www.atlasobscura.com/articles/food-testing-in-1902-featured-a-
    tuxedoclad-poison-squad-eating-plates-of-acid" target="_blank">
    Article on the Poison Squad</a>`
    },
    {question: `This highly processed substance is made from GMO corn and is common 
    in packaged foods as a thickener or filler while extending shelf life.`,
    answers: ['Guar Gum', 'Maltodextrin', 'Xanthan Gum', 'High-Fructose Corn Syrup'],
    correct: 'Maltodextrin',
    response: `<img src="https://images.pexels.com/photos/5765/flour-powder-wheat-jar.jpg"
    alt="jar of maltodextrin powder">`,
    feedback: `Maltodextrin has been okayed by the FDA as a safe food additive but take 
    note, a study in 2012 did find that maltodextrin can mess with your gut bacteria & 
    make you more susceptible to disease.<br>
    <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0052132"
    target="_blank">Source</a>`
    },
    {question: `This chemical is used in personal care products as a foaming agent. 
    Although determined to be safe for consumer use in the US, it is known to cause eye 
    or skin irritation. As Jonathan from Queer Eye loves to say, it’s “actually the 
    same thing that cleans the engine in a car.”`,
    answers: ['Panthenol', 'Dimethicone', 'Sodium Lauryl Sulfate','Parabens'],
    correct: 'Sodium Lauryl Sulfate',
    response: {right: `<img src="https://i.giphy.com/media/3ohs4vCUiRVUuwgsdG/giphy.webp"
    alt="Jonathan from Queer Eye saying 'Yes, queen!'">`,
    wrong: `<img src="https://i.giphy.com/media/ZcaLOINqHuumtOjjKZ/giphy.webp"
    alt="Antoni from Queer Eye crying">`},
    feedback: `Want to read more about the ingredients in your personal care 
    products? Check out this resource: 
    <a href="https://www.ewg.org/" target="_blank">Environmental Working Group</a>`
    },
    {question: `This food additive is made from ground up bugs.`,
    answers: ['Carmine','Annatto Extract', 'Lanoline', 'Shellac'],
    correct: 'Carmine',
    response: `<img src="https://media.wired.com/photos/59547f0e8e8cc150fa8ec16f/master/pass/Dactylopius_coccus_05.jpg"
    alt="Cochineal bugs on host cactus">`,
    feedback: `Carmine is made from female cochineal bugs and has been used by 
    people for centuries as a red dye. These bugs live on cactus. What a cozy home!`
    },
    {question: `In 2014, Subway phased out this “yoga mat chemical” from its bread 
    after a food blogger incited a public outcry about it.`,
    answers: ['Asorbic Acid', 'Natamycin', 'Formaldehyde', 'Azodicarbonamide'],
    correct: 'Azodicarbonamide',
    response: `<img src="http://www.naturesgardenexpress.com/blog/wp-content/uploads/2014/02/subway-yoga-mat-bread.jpg"
    alt="Yoga mat with subway sandwich inbetween">`,
    feedback: `The blog post that started it all: <a href="https://foodbabe.com/subway/"
    target="_blank">
    Subway: Stop Using Dangerous Chemicals In Your Bread</a>.<p class="feedback-paragraph">
    Many other fast food chains (like MacDonalds and Wendy’s) also phased 
    out using this chemical due to the negative publicity. Azodicarbonamide is still 
    being used in some food products though, as it is approved by FDA despite being 
    linked to asthma and cancer in some studies.</p>`
    },
    {question: `This food ingredient is taken from the stomach of unweaned calves.`,
    answers: ['Lactic Acid', 'Rennet', 'Sodium Caseinate', 'Lysozyme'],
    correct: `Rennet`,
    response: `<img src="http://www.onearabvegan.com/wp-content/uploads/2016/07/vegan-cashew-cheese-9.jpg"
    alt="cashew cheese">`,
    feedback: `Rennet is an enzyme used for making cheese and is extracted from the 
    dried fourth stomach chamber of calves. Alternatives to animal rennet include plant 
    and microbial sources which are cheaper and more humane. These cheeses are also certified kosher.
    Or if you're feeling adventurous, try a non-dairy nut cheese!`
    },
    {question: `This artificial sweetener used to carry a label warning consumers about 
    its health risks (based on laboratory studies that showed it was causing bladder 
    cancer in rats). The label warning has since been dropped since further research 
    didn’t find conclusive evidence about it causing cancer or other health problems 
    in humans.`,
    answers: ['Aspartame', 'Sucralose', 'Xylitol', 'Saccharin'],
    correct: `Saccharin`,
    response: `<img src="http://theweeklychallenger.com/wp-content/uploads/2018/06/ArtificialSweeteners.png"
    alt="artificial sweetener packets">`,
    feedback: `Saccharin was actually popular in World War I and World War II when there 
    were sugar shortages. The FDA considers all artificial sweeteners on your grocery 
    shelf as “generally recognized as safe” but has set acceptable daily intakes that 
    you should be aware of if you have a sweet tooth. Find that table here: 
    <a href="https://www.fda.gov/food/ingredientspackaginglabeling/foodadditivesingredients/ucm397725.htm" 
    target="_blank">Additional Information about High-Intensity Sweeteners</a>`
    },
    {question: `This additive to diet versions of your favorite snacks has been linked 
    to diarrhea or “oily anal leakage”. In 2010, it was honored on Time’s list of the 
    50 Worst Inventions.`,
    answers: ['Olestra', 'Sodium Diacetate', 'Fumaric Acid', 'Partially Hydrogenated Oil'],
    correct: `Olestra`,
    response: `<img src="http://www.reactiongifs.com/wp-content/uploads/2013/02/yuck.gif"
    alt="Rashida Jones reacting with 'yuck'">`,
    feedback: `Still approved as a food additive by the FDA, olestra (sometimes known by its brand 
    name Olean) not only makes you struggle in the bathroom but also limits your body’s ability 
    to absorb essential vitamins and gives you cramps and gas. Sexy. Find more facepalm 
    inventions on Time’s list:
    <a href="https://content.time.com/time/specials/packages/completelist/0,29569,1991915,00.html" 
    target="_blank">The 50 Worst Inventions</a> `
    },
    {question: `Like your apples spotless and shiny? Well the fruits weren’t born that way. This chemical 
    adds a glossy sheen to apples and prevent them from browning in storage. So that fresh looking apple 
    you’re picking up from the grocery store could be months old and you don’t even know!`,
    answers: ['Propyl Gallate', 'Butylated hydroxyanisole (BHT)', 'Calcium Carbide', 'Diphenylamine (DPA)'],
    correct: `Diphenylamine (DPA)`,
    response: `<img src="https://images.pexels.com/photos/693794/pexels-photo-693794.jpeg"
    alt="shiny green apples">`,
    feedback: `DPA residue is often found on raw apples as well as apple juice and applesauce and it’s known 
    to break down into nitrosamines (carcinogen). We don’t know enough about if or how much the DPA residue is 
    linked to cancer but the EU is playing it safe for now and banning DPA. The US hasn’t followed suit.`
    },
    {question: `The FDA has received many anecdotal reports about reactions to this flavor enhancer 
    (including headaches, sweating, numbness, and nausea) but so far haven’t found any definitive evidence 
    to confirm the reported symptoms in research studies.`,
    answers: ['Maltol', 'Sodium Nitrite', 'Monosodium Glutamate', 'Carrageenan'],
    correct: `Monosodium Glutamate`,
    response: `<img src="https://s27160.pcdn.co/wp-content/uploads/drupal/uploads/2016/09/30/MSGyellowbowl.jpg"
    alt="Monosodium Glutamate in a yellow bowl">`,
    feedback: `Ah, monosodium glutamate. So yummy yet so controversial. It’s popular in Asian cooking and 
    snacks and is derived from the amino acid, glutamic acid. It adds a savory umami flavor to foods. MSG has 
    got a bad rap because a study in 1969 showed that large doses of MSG given to newborn mice lead to harmful 
    neurological effects. But the MSG in our food isn’t nearly close to those quantities and is unlikely to 
    have any effect on the human brain since it can’t cross the blood-brain barrier.<br>
    <a href="https://www.ncbi.nlm.nih.gov/pubmed/19571220" target="_blank">Source</a>`
    }
];

const RESPONSES = [
    `Don't worry, you're not gonna die suddenly from chemical poisoning. You 
    don't need to enroll in a chemistry class right now. Just take a moment 
    while you're in line at the grocery store, waiting for the microwave, 
    or sitting on the porcelain throne and look at the ingredients list of 
    what you're buying, what's in your kitchen, or what's in your bathroom. 
    Get familiar. Maybe next time you're at the store you'll opt for a more 
    conscious decision.`,

    `Not bad! You've done a bit of research. Keep being curious and learning! 
    But keep in mind some food and personal product fears are legitimate 
    while others are an overreaction. As you've probably noticed, it's not 
    always clear how dangerous chemicals are to us and in what doses. What 
    harms lab animals doesn't necessarily translate to harming us. New 
    chemicals are being synthesized and put into our products all the time. 
    We simply don't have the time or resources to do extensive tests and 
    long-term studies on the health risks of every chemical.`,

    `Wow! You know your stuff! You're one smart customer. Or maybe you're a 
    chemist...or work for the FDA...`
];

