window.SAT_DAYS = window.SAT_DAYS || [];
window.SAT_DAYS.push(
{
  day: 1,
  date: "2026-09-19",
  questions: [
    {
      n: 1, skill: "Words in Context",
      texts: [{ body: "The biologist warned that the study’s conclusion was ______: it rested on a single trial with a tiny sample, so a later experiment could easily overturn it." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "definitive", B: "tenuous", C: "picturesque", D: "redundant" },
      answer: "B",
      explain: {
        correct: "Tenuous means weak or flimsy, which matches a conclusion based on one small trial.",
        wrong: {
          A: "Definitive means settled and final, the opposite of a fragile one-trial claim.",
          C: "Picturesque describes visual charm, not the strength of evidence.",
          D: "Redundant means unnecessarily repeated, which the sentence does not claim."
        }
      }
    },
    {
      n: 2, skill: "Words in Context",
      texts: [{ body: "Rather than scolding the intern, the editor offered ______ advice, pointing out two cuts that would tighten the lede without rewriting the whole piece." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "caustic", B: "constructive", C: "ambiguous", D: "lavish" },
      answer: "B",
      explain: {
        correct: "Constructive advice improves the work; the editor names specific, useful cuts.",
        wrong: {
          A: "Caustic means bitterly sarcastic, which clashes with helpful, concrete notes.",
          C: "Ambiguous advice would be unclear; these comments are specific.",
          D: "Lavish means extravagant; nothing here is over-the-top or luxurious."
        }
      }
    },
    {
      n: 3, skill: "Words in Context",
      texts: [{ body: "Because the treaty’s language was ______, each signatory later claimed a different meaning for the same clause, and the talks stalled." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "unequivocal", B: "succinct", C: "equivocal", D: "obsolete" },
      answer: "C",
      explain: {
        correct: "Equivocal means open to more than one interpretation, which explains the conflicting claims.",
        wrong: {
          A: "Unequivocal means clear and unmistakable, which would prevent rival readings.",
          B: "Succinct means brief; brevity alone does not cause competing interpretations.",
          D: "Obsolete means outdated; the problem is unclear wording, not age."
        }
      }
    },
    {
      n: 4, skill: "Words in Context",
      texts: [{ body: "The mayor’s speech was full of ______: she praised “bold action” but never named a policy, a deadline, or a budget line." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "platitudes", B: "data", C: "footnotes", D: "ultimatums" },
      answer: "A",
      explain: {
        correct: "Platitudes are empty, overused remarks—exactly what praise without policy amounts to.",
        wrong: {
          B: "Data would be specific evidence, which the speech lacks.",
          C: "Footnotes are citations; a speech without details is not full of footnotes.",
          D: "Ultimatums are demands with threats, not vague praise."
        }
      }
    },
    {
      n: 5, skill: "Words in Context",
      texts: [{ body: "Once the archive was digitized, historians could ______ letters that had been locked in a private collection for decades." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "suppress", B: "scrutinize", C: "discard", D: "compose" },
      answer: "B",
      explain: {
        correct: "Scrutinize means examine closely; digitizing an archive lets historians study the letters.",
        wrong: {
          A: "Suppress means hide or stop; access would not lead them to hide the letters.",
          C: "Discard means throw away, the opposite of finally being able to use sources.",
          D: "Compose means write; they are reading existing letters, not writing them."
        }
      }
    },
    {
      n: 6, skill: "Words in Context",
      texts: [{ body: "The novelist’s reputation for ______ proved unfair: the new book is spare, and almost every scene advances the plot." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "brevity", B: "prolixity", C: "clarity", D: "humility" },
      answer: "B",
      explain: {
        correct: "Prolixity is wordiness. A spare, efficient book would unfairly contradict a wordy reputation.",
        wrong: {
          A: "Brevity is concision; a spare book would confirm, not contradict, that reputation.",
          C: "Clarity is not opposed by a spare, plot-driven book.",
          D: "Humility concerns ego, not how many words a novelist uses."
        }
      }
    },
    {
      n: 7, skill: "Text Structure and Purpose",
      texts: [{ body: "Most visitors remember Yosemite for its granite walls. Less obvious is the park’s role as a living laboratory. In the 1980s, researchers began tracking how often rockfalls follow heavy rain. Those records now help rangers close trails before debris hits them. The cliffs still draw crowds; the data quietly keep some of those crowds alive." }],
      prompt: "Which choice best describes the function of the third and fourth sentences in the text as a whole?",
      choices: {
        A: "They present a historical example that shows how research became a practical safety tool.",
        B: "They argue that tourism in Yosemite should be sharply reduced.",
        C: "They list the geological causes of granite formation.",
        D: "They undermine the claim that visitors care about the cliffs."
      },
      answer: "A",
      explain: {
        correct: "The sentences trace a path from 1980s tracking to trail closures, showing research put to use.",
        wrong: {
          B: "The text never calls for cutting tourism.",
          C: "No geological origin story for granite appears.",
          D: "The last sentence still treats the cliffs as a draw; it does not say visitors do not care."
        }
      }
    },
    {
      n: 8, skill: "Text Structure and Purpose",
      texts: [{ body: "It is tempting to treat a viral video as proof. A clip can be cropped, a timestamp dropped, a caption written by someone who was not there. Before a clip can settle an argument, a reader still has to ask who filmed it, what sits outside the frame, and whether another angle exists." }],
      prompt: "Which choice best states the main purpose of the text?",
      choices: {
        A: "To recount the history of video-sharing platforms",
        B: "To warn readers that viral clips are incomplete evidence",
        C: "To teach the technical steps for editing video",
        D: "To praise citizen journalism as more reliable than newspapers"
      },
      answer: "B",
      explain: {
        correct: "The author lists ways clips mislead and ends by urging questions, so the purpose is a warning about evidence.",
        wrong: {
          A: "No history of platforms is given.",
          C: "Cropping is mentioned as a risk, not as a how-to.",
          D: "The text does not rank citizen video above newspapers."
        }
      }
    },
    {
      n: 9, skill: "Text Structure and Purpose",
      texts: [{ body: "Critics called the furniture “too simple to be serious.” The designer answered by keeping the same clean lines and changing only the joinery, which was now stronger than that of bulkier chairs. Sales rose, not because the look grew ornate, but because the pieces stopped wobbling." }],
      prompt: "Which choice best describes the overall structure of the text?",
      choices: {
        A: "A scientific hypothesis is tested with a controlled experiment.",
        B: "A criticism is introduced, a response is described, and a result is given.",
        C: "Two biographies are compared in chronological order.",
        D: "A definition is offered and then rejected as incomplete."
      },
      answer: "B",
      explain: {
        correct: "The passage moves from critics’ complaint to the designer’s change to the sales result.",
        wrong: {
          A: "There is no experiment or hypothesis language.",
          C: "Only one designer is discussed, not two life stories.",
          D: "Nothing is being defined as a term."
        }
      }
    },
    {
      n: 10, skill: "Cross-Text Connections",
      texts: [
        { label: "Text 1", body: "Cities should plant the largest shade trees that a sidewalk strip can support. Canopy cools streets, cuts energy use, and makes walking tolerable in July. Small ornamental trees look tidy, but they do not deliver the same temperature drop." },
        { label: "Text 2", body: "Large species crack pipes and lift sidewalks. A smaller, deep-rooted cultivar can still shade a bench in fifteen years without a yearly bill for broken concrete. Cooling matters, but so does a budget that can maintain the street." }
      ],
      prompt: "Based on the texts, how would the author of Text 2 most likely respond to the author of Text 1?",
      choices: {
        A: "By denying that shade has any effect on street temperature",
        B: "By agreeing that cooling matters but arguing that infrastructure costs should limit tree size",
        C: "By claiming ornamental trees cool streets more than large canopy trees do",
        D: "By insisting that cities stop planting trees altogether"
      },
      answer: "B",
      explain: {
        correct: "Text 2 accepts cooling as a goal, then argues that damage and budgets favor smaller cultivars.",
        wrong: {
          A: "Text 2 never denies cooling; it says cooling matters.",
          C: "Text 2 does not claim small trees cool more.",
          D: "Text 2 still wants trees, just a different kind."
        }
      }
    }
  ]
},
{
  day: 2,
  date: "2026-09-20",
  questions: [
    {
      n: 1, skill: "Words in Context",
      texts: [{ body: "The committee’s report was surprisingly ______: in fewer than four pages it named the leak, the failed valve, and the three dates on which inspectors had been turned away." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "rambling", B: "incisive", C: "decorous", D: "hypothetical" },
      answer: "B",
      explain: {
        correct: "Incisive means sharply focused and penetrating, matching a short report that hits the key facts.",
        wrong: {
          A: "Rambling means unfocused, which a tight four-page report is not.",
          C: "Decorous means polite; the emphasis is on precision, not manners.",
          D: "Hypothetical means merely supposed; the report names actual events."
        }
      }
    },
    {
      n: 2, skill: "Words in Context",
      texts: [{ body: "Fans expected the sequel to ______ the original’s messy ending; instead it introduced two new unexplained villains." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "rectify", B: "imitate", C: "conceal", D: "postpone" },
      answer: "A",
      explain: {
        correct: "Rectify means correct. Fans wanted the messy ending fixed; the sequel failed to do that.",
        wrong: {
          B: "Imitate would copy the mess, which is not what fans expected.",
          C: "Conceal means hide; they wanted a fix, not a cover-up of the ending.",
          D: "Postpone means delay; the contrast is with adding more mess, not delaying."
        }
      }
    },
    {
      n: 3, skill: "Words in Context",
      texts: [{ body: "Because the witness was ______, jurors heard long pauses and one-word answers, and they struggled to reconstruct the afternoon’s timeline." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "garrulous", B: "candid", C: "reticent", D: "theatrical" },
      answer: "C",
      explain: {
        correct: "Reticent means reserved or unwilling to speak, which fits pauses and one-word answers.",
        wrong: {
          A: "Garrulous means talkative, the opposite of sparse answers.",
          B: "Candid means frank; frank talk would likely add detail, not starve the timeline.",
          D: "Theatrical suggests performance, not minimal speech."
        }
      }
    },
    {
      n: 4, skill: "Words in Context",
      texts: [{ body: "The museum refused to ______ the forged landscape as a lost Monet, even after a donor offered to fund a new wing." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "authenticate", B: "auction", C: "restore", D: "insure" },
      answer: "A",
      explain: {
        correct: "Authenticate means confirm as genuine; the museum would not certify a fake as a Monet.",
        wrong: {
          B: "Auction is a sale method; the issue is genuineness, not selling.",
          C: "Restore means repair; refusing repair is not the point.",
          D: "Insure is financial coverage, not a verdict on authorship."
        }
      }
    },
    {
      n: 5, skill: "Words in Context",
      texts: [{ body: "What looked like random scribbling was in fact a ______ map of the harbor, with every shoal marked to scale." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "meticulous", B: "hastily drawn", C: "symbolic", D: "obsolete" },
      answer: "A",
      explain: {
        correct: "Meticulous means extremely careful and precise, matching a to-scale chart of every shoal.",
        wrong: {
          B: "Hastily drawn contradicts “every shoal marked to scale.”",
          C: "Symbolic maps are not literal scale charts.",
          D: "Obsolete means outdated; nothing indicates the map is old or unused."
        }
      }
    },
    {
      n: 6, skill: "Words in Context",
      texts: [{ body: "The senator tried to ______ the protest by promising a hearing, but the crowd stayed because no date was attached to the promise." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "inflame", B: "document", C: "placate", D: "ignore" },
      answer: "C",
      explain: {
        correct: "Placate means calm someone by conceding a bit; a promised hearing is an attempt to soothe.",
        wrong: {
          A: "Inflame means make angrier, which is not the senator’s aim here.",
          B: "Document means record; a promise is not a record of the protest.",
          D: "Ignore would mean offering nothing; a hearing is an offer."
        }
      }
    },
    {
      n: 7, skill: "Text Structure and Purpose",
      texts: [{ body: "A cookbook can be a history book in disguise. Consider recipes that still call for pearl ash, an eighteenth-century leavener. When a modern author keeps that ingredient and then explains the wood-ash chemistry behind it, the page is doing two jobs: telling you how to bake, and reminding you that kitchens change slowly and all at once." }],
      prompt: "Which choice best describes the function of the reference to pearl ash in the text as a whole?",
      choices: {
        A: "It provides a concrete case that supports the opening claim about cookbooks.",
        B: "It argues that modern bakers should abandon chemical leaveners.",
        C: "It traces the global trade routes that carried sugar to Europe.",
        D: "It contradicts the idea that recipes ever change."
      },
      answer: "A",
      explain: {
        correct: "Pearl ash is the example that shows a recipe carrying history, backing the first sentence.",
        wrong: {
          B: "The author does not tell bakers to stop using leaveners.",
          C: "Sugar trade is never mentioned.",
          D: "The last sentence says kitchens do change."
        }
      }
    },
    {
      n: 8, skill: "Text Structure and Purpose",
      texts: [{ body: "Do not trust a shoreline drawn on a map from 1850 if you are docking tonight. Rivers migrate. Sandbars appear. The map is still useful as a record of what people once believed they could sail through. It is a poor substitute for a depth sounder." }],
      prompt: "Which choice best states the main purpose of the text?",
      choices: {
        A: "To explain how 1850s surveyors mixed ink",
        B: "To distinguish historical value from present navigational value",
        C: "To encourage collectors to buy antique maps",
        D: "To describe the biology of river fish"
      },
      answer: "B",
      explain: {
        correct: "The text says the old map records past belief but should not guide a boat tonight.",
        wrong: {
          A: "No production method is described.",
          C: "Collecting is not the point.",
          D: "Fish are not mentioned."
        }
      }
    },
    {
      n: 9, skill: "Text Structure and Purpose",
      texts: [{ body: "First the city banned single-use bags. Then it watched litter counts fall on two sample beaches. Only after those counts were public did grocers stop lobbying to reverse the rule. The sequence matters: data, not the ban itself, ended the fight." }],
      prompt: "Which choice best describes the overall structure of the text?",
      choices: {
        A: "A process is narrated in order, then a conclusion about cause is drawn.",
        B: "A definition is followed by several dictionary examples.",
        C: "A hypothesis is rejected without evidence.",
        D: "Two poems are compared for meter and rhyme."
      },
      answer: "A",
      explain: {
        correct: "The sentences walk through ban, data, then lobbying collapse, and close on what caused the end of the fight.",
        wrong: {
          B: "There is no definition-plus-examples pattern.",
          C: "Evidence (litter counts) is central, not absent.",
          D: "No poetry is discussed."
        }
      }
    },
    {
      n: 10, skill: "Cross-Text Connections",
      texts: [
        { label: "Text 1", body: "Homework should be rare in elementary grades. After a full day of directed tasks, children need unstructured time. Countries that assign little homework still post strong reading scores, which suggests more worksheets are not the engine of literacy." },
        { label: "Text 2", body: "Short, predictable home practice—ten minutes of reading aloud—beats both zero homework and marathon packets. The issue is design, not the mere existence of work done after school. Families can absorb a small ritual; they cannot absorb a second shift." }
      ],
      prompt: "Which choice best describes a difference between the two texts?",
      choices: {
        A: "Text 1 treats homework as generally unnecessary in early grades, whereas Text 2 defends a limited, well-designed amount.",
        B: "Text 1 focuses on high school, whereas Text 2 focuses on college.",
        C: "Text 1 argues that reading scores are meaningless, whereas Text 2 ignores scores.",
        D: "Text 1 supports marathon packets, whereas Text 2 supports banning all reading at home."
      },
      answer: "A",
      explain: {
        correct: "Text 1 wants homework rare; Text 2 wants a short ritual and rejects both zero and overload.",
        wrong: {
          B: "Both concern elementary/home practice, not college.",
          C: "Text 1 uses reading scores as evidence; it does not call them meaningless.",
          D: "Those positions reverse and distort both authors."
        }
      }
    }
  ]
},
{
  day: 3,
  date: "2026-09-21",
  questions: [
    {
      n: 1, skill: "Words in Context",
      texts: [{ body: "The diplomat’s ______ reply—neither a yes nor a no—bought time without committing her government to the cease-fire language on the table." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "categorical", B: "evasive", C: "jubilant", D: "verbatim" },
      answer: "B",
      explain: {
        correct: "Evasive means avoiding a direct answer, matching neither yes nor no.",
        wrong: {
          A: "Categorical means absolute and direct, the opposite of a non-answer.",
          C: "Jubilant means joyful; tone of joy is not at issue.",
          D: "Verbatim means word-for-word; the issue is avoidance, not quotation."
        }
      }
    },
    {
      n: 2, skill: "Words in Context",
      texts: [{ body: "Once thought to be ______ in the county, the orchid turned up in three roadside ditches after a wet spring." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "extirpated", B: "cultivated", C: "invasive", D: "decorative" },
      answer: "A",
      explain: {
        correct: "Extirpated means wiped out locally; finding plants again overturns that belief.",
        wrong: {
          B: "Cultivated means farmed or tended; ditches after rain do not imply gardening.",
          C: "Invasive species are overly common, not “once thought gone.”",
          D: "Decorative comments on looks, not presence or absence."
        }
      }
    },
    {
      n: 3, skill: "Words in Context",
      texts: [{ body: "The biography is ______ in the best sense: it lingers on unpaid bills and missed cues, not just prize nights." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "hagiographic", B: "unflinching", C: "cursory", D: "anonymous" },
      answer: "B",
      explain: {
        correct: "Unflinching means not shying from hard facts, such as bills and failures.",
        wrong: {
          A: "Hagiographic means saint-making; prize-nights-only would fit that, not unpaid bills.",
          C: "Cursory means hasty and shallow, not lingering.",
          D: "Anonymous would hide the subject; this book clearly depicts a life."
        }
      }
    },
    {
      n: 4, skill: "Words in Context",
      texts: [{ body: "Engineers had to ______ the bridge design after wind-tunnel tests showed the deck twisting at speeds common in March." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "abandon measurement of", B: "modify", C: "celebrate", D: "paint" },
      answer: "B",
      explain: {
        correct: "Modify means change; dangerous twisting would force a design change.",
        wrong: {
          A: "They used tests; they would not stop measuring.",
          C: "Celebrate does not follow from a structural problem.",
          D: "Paint would not fix twisting."
        }
      }
    },
    {
      n: 5, skill: "Words in Context",
      texts: [{ body: "Her jokes were ______ rather than cruel: she mocked the pompous speech, not the speaker’s accent or clothes." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "sardonic", B: "affectionate", C: "incoherent", D: "mercenary" },
      answer: "A",
      explain: {
        correct: "Sardonic wit is sharp and mocking; targeting pompous speech fits, and “rather than cruel” narrows the tone.",
        wrong: {
          B: "Affectionate jokes would not be described as mocking a speech.",
          C: "Incoherent means unclear; the contrast is cruelty versus pointed mockery.",
          D: "Mercenary means money-driven, unrelated to joke targets."
        }
      }
    },
    {
      n: 6, skill: "Words in Context",
      texts: [{ body: "The new trail map is ______: switchbacks, water, and private-land boundaries all appear, so hikers are less likely to trespass or run dry." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "ornamental", B: "comprehensive", C: "illegible", D: "provisional" },
      answer: "B",
      explain: {
        correct: "Comprehensive means covering the necessary parts; listed features and practical benefits match.",
        wrong: {
          A: "Ornamental means for show, not for navigation details.",
          C: "Illegible maps would not help hikers.",
          D: "Provisional means temporary; nothing says the map is a draft."
        }
      }
    },
    {
      n: 7, skill: "Text Structure and Purpose",
      texts: [{ body: "People say the library is quiet. Listen longer. There is the thud of date stamps, the squeak of a cart, a child sounding out a word, a printer waking up. The quiet is not emptiness. It is a set of small sounds that people have agreed not to treat as noise." }],
      prompt: "Which choice best states the main purpose of the text?",
      choices: {
        A: "To argue that libraries should install more printers",
        B: "To redefine library quiet as managed sound rather than silence",
        C: "To criticize parents who bring children to libraries",
        D: "To recount the invention of the date stamp"
      },
      answer: "B",
      explain: {
        correct: "The author lists sounds and concludes that quiet is a social agreement, not a void.",
        wrong: {
          A: "Printers are one sound, not a policy proposal.",
          C: "The child is an example of accepted sound, not a target of blame.",
          D: "No invention story appears."
        }
      }
    },
    {
      n: 8, skill: "Text Structure and Purpose",
      texts: [{ body: "In 1970 the river failed a basic oxygen test. By 1995, after sewage plants were upgraded, fish surveys listed species that had been absent for a generation. The recovery is incomplete—storm runoff still spikes after heavy rain—but the river is no longer a write-off." }],
      prompt: "Which choice best describes the function of the last sentence in the text as a whole?",
      choices: {
        A: "It qualifies the success described earlier without erasing it.",
        B: "It introduces a new river in a different state.",
        C: "It denies that sewage plants were ever upgraded.",
        D: "It explains how oxygen is measured in a lab."
      },
      answer: "A",
      explain: {
        correct: "“Incomplete” plus remaining runoff limits the good news, while “no longer a write-off” keeps the gains.",
        wrong: {
          B: "The same river is still under discussion.",
          C: "Earlier sentences treat upgrades as fact.",
          D: "No lab method is taught."
        }
      }
    },
    {
      n: 9, skill: "Text Structure and Purpose",
      texts: [{ body: "A good field guide does not try to be a novel. It groups birds by silhouette first, color second, because that is how a moving bird actually presents itself. Narrative charm can wait until you have named what just left the fence post." }],
      prompt: "Which choice best describes the overall structure of the text?",
      choices: {
        A: "A contrast with another genre, then a practical principle, then a limit on style",
        B: "A chronological history of field guides from 1800 to today",
        C: "A personal memoir of a birding trip",
        D: "A step-by-step drawing lesson"
      },
      answer: "A",
      explain: {
        correct: "The text sets guides against novels, explains silhouette-first grouping, then postpones charm.",
        wrong: {
          B: "No timeline of publications is given.",
          C: "There is no trip narrative.",
          D: "Readers are not taught to draw."
        }
      }
    },
    {
      n: 10, skill: "Cross-Text Connections",
      texts: [
        { label: "Text 1", body: "Remote work raised measured output in a large study of call-center employees. Quiet rooms and fewer commutes explain the gain. Managers who insist on seeing faces are clinging to a habit, not to data." },
        { label: "Text 2", body: "The call-center study measured scripted tasks. Designers and nurses do not sell the same work. When a job depends on unplanned conversation, being in the building is not nostalgia; it is how information moves before it is written down." }
      ],
      prompt: "The author of Text 2 would most likely say that the conclusion in Text 1 is",
      choices: {
        A: "persuasive for every occupation",
        B: "overextended beyond the kind of work the study measured",
        C: "invalid because output can never be measured",
        D: "outdated because commuting no longer exists"
      },
      answer: "B",
      explain: {
        correct: "Text 2 grants the study’s setting, then argues that unscripted jobs do not follow from it.",
        wrong: {
          A: "Text 2 explicitly limits the finding.",
          C: "Text 2 does not reject measurement; it rejects overgeneralizing it.",
          D: "Commuting is not said to have vanished."
        }
      }
    }
  ]
},
{
  day: 4,
  date: "2026-09-22",
  questions: [
    {
      n: 1, skill: "Words in Context",
      texts: [{ body: "The chemist’s claim looked ______ until three independent labs reproduced the same unexpected yield." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "implausible", B: "routine", C: "illustrated", D: "mandatory" },
      answer: "A",
      explain: {
        correct: "Implausible means hard to believe; reproduction later makes a once-doubtful claim credible.",
        wrong: {
          B: "Routine claims would not need three labs to rescue them.",
          C: "Illustrated means shown with pictures or examples, not doubted.",
          D: "Mandatory means required; belief is the issue, not rules."
        }
      }
    },
    {
      n: 2, skill: "Words in Context",
      texts: [{ body: "To keep the minutes useful, the secretary had to ______ a twenty-minute argument into two sentences that recorded only the decision." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "inflate", B: "distill", C: "postpone", D: "perform" },
      answer: "B",
      explain: {
        correct: "Distill means reduce to the essence; two sentences capturing the decision fit.",
        wrong: {
          A: "Inflate means enlarge, the opposite of condensing.",
          C: "Postpone means delay; the minutes still record the outcome now.",
          D: "Perform does not mean condense a debate."
        }
      }
    },
    {
      n: 3, skill: "Words in Context",
      texts: [{ body: "Despite the ______ of rainfall records for the valley, the hydrologist refused to guess at a flood frequency." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "abundance", B: "paucity", C: "melody", D: "publicity" },
      answer: "B",
      explain: {
        correct: "Paucity means scarcity; few records would make a hydrologist unwilling to guess.",
        wrong: {
          A: "Abundance would make guessing less necessary, not more refused.",
          C: "Melody is musical and irrelevant.",
          D: "Publicity is attention, not a lack of data."
        }
      }
    },
    {
      n: 4, skill: "Words in Context",
      texts: [{ body: "The director’s cut is more ______ than the theatrical release: whole subplots return, and a character who vanished after scene two now finishes the story." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "abridged", B: "expansive", C: "silent", D: "improvised" },
      answer: "B",
      explain: {
        correct: "Expansive means wider in scope; restored subplots and a completed arc match.",
        wrong: {
          A: "Abridged means shortened, the opposite of material returning.",
          C: "Silent would describe lack of sound, not added plot.",
          D: "Improvised means made up on the spot; a cut is an edited version, not a jam session."
        }
      }
    },
    {
      n: 5, skill: "Words in Context",
      texts: [{ body: "Lawyers for the company tried to ______ responsibility onto a subcontractor, citing a clause the subcontractor had never signed." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "shift", B: "confess", C: "celebrate", D: "notarize" },
      answer: "A",
      explain: {
        correct: "Shift means move; they tried to move blame to another party.",
        wrong: {
          B: "Confess would accept blame, not push it away.",
          C: "Celebrate does not fit assigning blame.",
          D: "Notarize means certify a signature; they are relocating fault, not stamping a form."
        }
      }
    },
    {
      n: 6, skill: "Words in Context",
      texts: [{ body: "What saved the essay was its ______: the student cut three anecdotes that repeated the same point." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "repetition", B: "brevity", C: "hostility", D: "anonymity" },
      answer: "B",
      explain: {
        correct: "Brevity is concision; cutting repeated anecdotes shortens and strengthens the essay.",
        wrong: {
          A: "Repetition is what the student removed.",
          C: "Hostility is anger, not an editing virtue here.",
          D: "Anonymity means unnamed; the cuts are about length, not identity."
        }
      }
    },
    {
      n: 7, skill: "Text Structure and Purpose",
      texts: [{ body: "A smartphone is a poor stargazing tool if you keep it bright. Astronomers ask visitors to use red filters, or to put the phone away, because even a small white screen ruins night vision for minutes. The rule sounds fussy until you watch a meteor vanish while someone checks a message." }],
      prompt: "Which choice best describes the function of the last sentence?",
      choices: {
        A: "It offers a brief scene that justifies the guideline as more than fussiness.",
        B: "It lists the wavelengths of red light.",
        C: "It argues that meteor showers should be canceled.",
        D: "It describes how smartphones are manufactured."
      },
      answer: "A",
      explain: {
        correct: "The meteor-and-message image shows the cost of a bright screen, supporting the rule.",
        wrong: {
          B: "No physics table appears.",
          C: "The target is phone light, not canceling showers.",
          D: "Manufacturing is not discussed."
        }
      }
    },
    {
      n: 8, skill: "Text Structure and Purpose",
      texts: [{ body: "We remember inventors as loners. The patent drawings, though, are crowded with names: an assistant who kept the vacuum sealed, a glassblower who made the bulb, a bookkeeper who delayed creditors. Solo genius is a story. The file cabinet is a group portrait." }],
      prompt: "Which choice best states the main purpose of the text?",
      choices: {
        A: "To argue that patents should be abolished",
        B: "To challenge the myth of the solitary inventor using evidence from patent files",
        C: "To teach readers how to blow glass",
        D: "To praise bookkeepers above scientists"
      },
      answer: "B",
      explain: {
        correct: "The contrast between loner stories and named collaborators is the point.",
        wrong: {
          A: "No call to end patents appears.",
          C: "Glassblowing is one role, not a lesson.",
          D: "The bookkeeper is one example in a group, not a ranking."
        }
      }
    },
    {
      n: 9, skill: "Text Structure and Purpose",
      texts: [{ body: "Start with the complaint: the plaza has no shade. Add the constraint: underground utilities block deep roots. Then consider a third path—structures that cast shade without planting. The point is not that trees are bad. It is that a blocked option should not end the design process." }],
      prompt: "Which choice best describes the overall structure of the text?",
      choices: {
        A: "Problem, constraint, alternative, and a statement of principle",
        B: "Biography of a landscape architect",
        C: "A timed experiment with control groups",
        D: "A travel itinerary through several plazas"
      },
      answer: "A",
      explain: {
        correct: "The sentences follow complaint, utilities limit, shade structures, then the design principle.",
        wrong: {
          B: "No person’s life story is told.",
          C: "There is no experimental protocol.",
          D: "Only one plaza situation is discussed."
        }
      }
    },
    {
      n: 10, skill: "Cross-Text Connections",
      texts: [
        { label: "Text 1", body: "Standardized college essays should be dropped. A timed prompt rewards speed and a certain polished dialect. Portfolios of graded classroom writing would show growth, not performance on one anxious morning." },
        { label: "Text 2", body: "Portfolios sound fair until you ask who has a counselor to curate them. A single, blind-scored essay is crude, but it does not require a parent who knows what admissions offices want. Crude and widely available can beat elaborate and uneven." }
      ],
      prompt: "Based on the texts, both authors would most likely agree that",
      choices: {
        A: "timed essays are a perfect measure of writing ability",
        B: "the current or proposed writing sample is, in some way, an imperfect tool",
        C: "only wealthy students should apply to college",
        D: "classroom portfolios cannot include graded work"
      },
      answer: "B",
      explain: {
        correct: "Text 1 attacks timed essays as narrow; Text 2 calls them crude. Both treat assessment as flawed, then pick different fixes.",
        wrong: {
          A: "Neither calls timed essays perfect; Text 1 rejects them.",
          C: "Neither supports that claim.",
          D: "Text 1 wants graded classroom writing in portfolios."
        }
      }
    }
  ]
},
{
  day: 5,
  date: "2026-09-23",
  questions: [
    {
      n: 1, skill: "Words in Context",
      texts: [{ body: "The island’s freshwater lens is ______: a few dry years, and wells that now taste sweet will draw brine." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "inexhaustible", B: "precarious", C: "ornamental", D: "theoretical" },
      answer: "B",
      explain: {
        correct: "Precarious means insecure; the wells’ future depends on a thin margin of rain.",
        wrong: {
          A: "Inexhaustible means it cannot run out, which contradicts the brine warning.",
          C: "Ornamental refers to decoration.",
          D: "Theoretical means only in theory; the wells exist now."
        }
      }
    },
    {
      n: 2, skill: "Words in Context",
      texts: [{ body: "Rather than ______ the rumor, the company posted the full test results, which were mixed but not disastrous." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "corroborate", B: "quash", C: "translate", D: "dramatize" },
      answer: "B",
      explain: {
        correct: "Quash means put down or suppress. Posting mixed results is an alternative to killing the rumor by denial or silence; wait - \"Rather than quash the rumor, they posted results\" means they chose transparency instead of suppressing. That works.",
        wrong: {
          A: "Corroborate means confirm; posting mixed results is not confirming a rumor as true by default, and “rather than confirm” is less apt than “rather than suppress.”",
          C: "Translate is about language, not rumor control.",
          D: "Dramatize means make more theatrical; posting dry results is the opposite."
        }
      }
    },
    {
      n: 3, skill: "Words in Context",
      texts: [{ body: "The poet’s later work is more ______: images that once exploded in every line now appear sparingly, and the white space does more of the work." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "austere", B: "crowded", C: "comic", D: "biographical" },
      answer: "A",
      explain: {
        correct: "Austere means severely simple; spare images and more white space match.",
        wrong: {
          B: "Crowded is the opposite of sparingly.",
          C: "Comic concerns humor, not density of images.",
          D: "Biographical concerns life story, not style of imagery."
        }
      }
    },
    {
      n: 4, skill: "Words in Context",
      texts: [{ body: "Because the two studies used ______ methods—one a randomized trial, the other a handful of interviews—their headlines should not be treated as interchangeable." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "identical", B: "disparate", C: "outdated", D: "secret" },
      answer: "B",
      explain: {
        correct: "Disparate means markedly different; a trial versus interviews fits.",
        wrong: {
          A: "Identical methods would make headlines more comparable.",
          C: "Outdated is about time, not the contrast between methods.",
          D: "Secret methods are not described; both methods are named."
        }
      }
    },
    {
      n: 5, skill: "Words in Context",
      texts: [{ body: "The ambassador’s gift was ______: a rare seed catalog, chosen because the host country had just reopened its agricultural college." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "arbitrary", B: "apt", C: "overdue", D: "counterfeit" },
      answer: "B",
      explain: {
        correct: "Apt means fitting; a seed catalog matches a reopened agricultural college.",
        wrong: {
          A: "Arbitrary means random, which the because-clause denies.",
          C: "Overdue means late; no delay is mentioned.",
          D: "Counterfeit means fake; nothing suggests a forged catalog."
        }
      }
    },
    {
      n: 6, skill: "Words in Context",
      texts: [{ body: "The detective refused to ______ from the physical evidence to a motive; missing money could mean theft, gambling, or a gift that was never recorded." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "leap", B: "benefit", C: "quote", D: "retire" },
      answer: "A",
      explain: {
        correct: "Leap (as in leap to a conclusion) matches refusing to jump from evidence to one motive when several remain.",
        wrong: {
          B: "Benefit from evidence would not capture the logic jump.",
          C: "Quote from evidence is not the error being refused.",
          D: "Retire from evidence does not mean drawing a motive."
        }
      }
    },
    {
      n: 7, skill: "Text Structure and Purpose",
      texts: [{ body: "Plastic-free aisles photograph well. They also push some shoppers toward heavier glass that takes more fuel to ship. A life-cycle study, not a store display, should decide whether the aisle is an improvement. Until that study exists, the aisle is a statement, not a solution." }],
      prompt: "Which choice best states the main purpose of the text?",
      choices: {
        A: "To urge evaluation of environmental claims with life-cycle evidence",
        B: "To advertise a grocery chain’s new aisle",
        C: "To explain how glass is blown",
        D: "To argue that photographs should be banned in stores"
      },
      answer: "A",
      explain: {
        correct: "The author contrasts photo-friendly aisles with shipping costs and asks for a life-cycle study.",
        wrong: {
          B: "The tone is skeptical, not promotional.",
          C: "Glassmaking is not explained.",
          D: "Photos are a metaphor for appearances, not a policy target."
        }
      }
    },
    {
      n: 8, skill: "Text Structure and Purpose",
      texts: [{ body: "The footnote is where the argument gets honest. In the main text, a historian may say a battle “changed the war.” In the note, the same historian lists three scholars who disagree and one archival gap. Readers who skip notes read a cleaner story than the author is actually willing to defend." }],
      prompt: "Which choice best describes the function of the last sentence?",
      choices: {
        A: "It states the consequence of ignoring the notes described above.",
        B: "It introduces a new battle not mentioned earlier.",
        C: "It praises readers who skip notes as more efficient.",
        D: "It explains how to cite websites."
      },
      answer: "A",
      explain: {
        correct: "The last sentence names what happens if you skip the disagreements parked in the notes.",
        wrong: {
          B: "No new battle is added.",
          C: "The tone is cautionary, not praise.",
          D: "Citation format is not taught."
        }
      }
    },
    {
      n: 9, skill: "Text Structure and Purpose",
      texts: [{ body: "Measure twice. That advice is not only for lumber. A city that rezones a waterfront from industry to towers without measuring storm-surge height is also failing to measure twice. The second measurement is not a delay. It is how you avoid building the mistake in concrete." }],
      prompt: "Which choice best describes the overall structure of the text?",
      choices: {
        A: "A familiar saying is extended from carpentry to urban planning, then justified",
        B: "A statistical formula is derived step by step",
        C: "Two novels are contrasted",
        D: "A timeline of a particular storm is given"
      },
      answer: "A",
      explain: {
        correct: "“Measure twice” moves from lumber to rezoning, then the last sentences defend the extra step.",
        wrong: {
          B: "No formula appears.",
          C: "No novels appear.",
          D: "No specific storm chronology is given."
        }
      }
    },
    {
      n: 10, skill: "Cross-Text Connections",
      texts: [
        { label: "Text 1", body: "National parks should require reservations year-round. Uncapped entry turns trailheads into parking lots and pushes wildlife off the only remaining quiet habitat. Beauty that cannot be approached except through congestion is already half lost." },
        { label: "Text 2", body: "Reservations help in July. In January, a quota can lock out a nearby family that could have had the trail to itself. A seasonal cap plus better buses would cut congestion without treating every month as a crush." }
      ],
      prompt: "How would the author of Text 2 most likely respond to Text 1’s proposal?",
      choices: {
        A: "By accepting year-round reservations as the only serious option",
        B: "By arguing that limits should be seasonal rather than permanent and total",
        C: "By denying that congestion ever occurs in parks",
        D: "By claiming wildlife benefits from packed trailheads"
      },
      answer: "B",
      explain: {
        correct: "Text 2 grants that reservations help in peak season, then opposes year-round quotas.",
        wrong: {
          A: "Text 2 rejects treating every month as a crush.",
          C: "Text 2 admits congestion in July.",
          D: "Neither text says wildlife likes crowds; Text 1 says the opposite."
        }
      }
    }
  ]
},
{
  day: 6,
  date: "2026-09-24",
  questions: [
    {
      n: 1, skill: "Words in Context",
      texts: [{ body: "The memoir is unusually ______ about money: it lists advances, debts, and the winter the heat was shut off." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "candid", B: "evasive", C: "cheerful", D: "fictional" },
      answer: "A",
      explain: {
        correct: "Candid means frank; listing advances and a shut-off is unusually open.",
        wrong: {
          B: "Evasive would hide money details.",
          C: "Cheerful does not capture financial frankness.",
          D: "Fictional would mean invented; the point is openness, not genre."
        }
      }
    },
    {
      n: 2, skill: "Words in Context",
      texts: [{ body: "Critics who called the theory ______ had to retreat when a satellite found the predicted radiation pattern." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "untestable", B: "elegant", C: "popular", D: "illustrated" },
      answer: "A",
      explain: {
        correct: "Untestable means it cannot be checked; a satellite finding the pattern shows it was testable after all.",
        wrong: {
          B: "Elegant is praise; critics would not need to retreat from a compliment when data arrive.",
          C: "Popular is about fame, not empirical status.",
          D: "Illustrated means shown visually, not dismissed."
        }
      }
    },
    {
      n: 3, skill: "Words in Context",
      texts: [{ body: "The new principal was ______ of grand announcements; she spent the first month in classrooms and delayed any five-year plan." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "enamored", B: "wary", C: "unaware", D: "proud" },
      answer: "B",
      explain: {
        correct: "Wary means cautious; skipping grand announcements to watch classrooms fits.",
        wrong: {
          A: "Enamored means in love with; she avoided announcements.",
          C: "Unaware would mean she did not know they existed; she chose to delay them.",
          D: "Proud of announcements would not lead her to delay them."
        }
      }
    },
    {
      n: 4, skill: "Words in Context",
      texts: [{ body: "What the restoration revealed was not a lost masterpiece but a ______ copy, with brushwork too even to be the painter’s hurried late style." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "derivative", B: "pioneering", C: "unfinished", D: "colossal" },
      answer: "A",
      explain: {
        correct: "Derivative means imitative, not original; an overly even copy fits.",
        wrong: {
          B: "Pioneering means original and trailblazing, the opposite of a copy.",
          C: "Unfinished works are incomplete; even brushwork suggests completion as a copy.",
          D: "Colossal means huge, which is not the issue."
        }
      }
    },
    {
      n: 5, skill: "Words in Context",
      texts: [{ body: "The truce was ______: neither side withdrew its heavy weapons, and both kept building roads toward the ridgeline." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "durable", B: "nominal", C: "historic", D: "unanimous" },
      answer: "B",
      explain: {
        correct: "Nominal means in name only; weapons staying put makes the truce merely labeled, not real.",
        wrong: {
          A: "Durable means lasting and solid, which the continued buildup denies.",
          C: "Historic comments on importance, not emptiness.",
          D: "Unanimous concerns how many agreed, not whether they complied."
        }
      }
    },
    {
      n: 6, skill: "Words in Context",
      texts: [{ body: "To ______ the charge that the sample was biased, the pollsters released the raw call list and the refusal rates." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "rebut", B: "amplify", C: "ignore", D: "invent" },
      answer: "A",
      explain: {
        correct: "Rebut means counter an accusation; releasing methods is a way to answer a bias charge.",
        wrong: {
          B: "Amplify would strengthen the charge.",
          C: "Ignore would mean not responding; they released files.",
          D: "Invent a charge would mean making one up, not answering it."
        }
      }
    },
    {
      n: 7, skill: "Text Structure and Purpose",
      texts: [{ body: "A coral bleaching event is not a metaphor. It is a census. Divers count living colonies, then count them again after the water stays too warm. The second number is usually smaller. Policy debates that treat bleaching as a symbol, rather than as a body count, skip the part that should be hardest to argue with." }],
      prompt: "Which choice best states the main purpose of the text?",
      choices: {
        A: "To insist that bleaching data be treated as empirical loss, not mere symbolism",
        B: "To teach recreational diving techniques",
        C: "To argue that water temperature cannot be measured",
        D: "To praise policy debates as already sufficiently precise"
      },
      answer: "A",
      explain: {
        correct: "The census image and “body count” push readers to treat bleaching as measured death, not a symbol.",
        wrong: {
          B: "Counting colonies is evidence, not a dive lesson.",
          C: "Warm water is presented as fact.",
          D: "The last sentence criticizes debates that skip the counts."
        }
      }
    },
    {
      n: 8, skill: "Text Structure and Purpose",
      texts: [{ body: "First, the town paved the road to the overlook. Then tour buses arrived. Then the overlook’s soil compacted, and the rare sunflowers failed to come up. The paving was meant as care. It functioned as a first cut." }],
      prompt: "Which choice best describes the overall structure of the text?",
      choices: {
        A: "A sequence of events is given, then an ironic judgment about intention versus effect",
        B: "A scientific law is stated and then proved algebraically",
        C: "A speech is quoted at length",
        D: "A product is reviewed for price and durability"
      },
      answer: "A",
      explain: {
        correct: "Pave, buses, compaction, failed flowers, then the twist that “care” acted as damage.",
        wrong: {
          B: "No law or algebra appears.",
          C: "No long quotation appears.",
          D: "This is not a consumer review."
        }
      }
    },
    {
      n: 9, skill: "Text Structure and Purpose",
      texts: [{ body: "When a paper says “more research is needed,” check whether the authors mean a finer measurement or a different question. The phrase is a polite shrug. Sometimes it is also a map." }],
      prompt: "Which choice best describes the function of the second sentence in the text as a whole?",
      choices: {
        A: "It characterizes the quoted phrase as often empty of direction.",
        B: "It provides a bibliography of famous papers.",
        C: "It describes laboratory safety rules.",
        D: "It contradicts the first sentence by saying research is never needed."
      },
      answer: "A",
      explain: {
        correct: "Calling the phrase a “polite shrug” labels it as vague; the next sentence allows that it can sometimes guide.",
        wrong: {
          B: "No sources are listed.",
          C: "Safety is not discussed.",
          D: "The first sentence still treats further research as a real fork, not as never needed."
        }
      }
    },
    {
      n: 10, skill: "Cross-Text Connections",
      texts: [
        { label: "Text 1", body: "Artificially generated study guides flatten distinctive arguments into generic summaries. Students who rely on them can pass a quiz and still miss why one historian’s archive changed the field." },
        { label: "Text 2", body: "A generated outline is a scaffold, not a substitute. Used before reading, it can tell a student which sections of a dense chapter matter. The harm starts when the outline is the only text the student ever sees." }
      ],
      prompt: "Which choice best describes the relationship between the two texts?",
      choices: {
        A: "Text 2 concedes a risk named in Text 1 but defends a limited use Text 1 does not explore",
        B: "Text 2 denies that generated guides exist",
        C: "Text 1 and Text 2 discuss unrelated school subjects",
        D: "Text 1 praises generated guides, whereas Text 2 bans reading"
      },
      answer: "A",
      explain: {
        correct: "Text 1 stresses flattening and missed arguments. Text 2 agrees harm comes from replacement, then allows pre-reading scaffolds.",
        wrong: {
          B: "Text 2 assumes they exist.",
          C: "Both discuss generated study guides.",
          D: "Text 1 is critical, not praising; Text 2 still wants the real chapter read."
        }
      }
    }
  ]
},
{
  day: 7,
  date: "2026-09-25",
  questions: [
    {
      n: 1, skill: "Words in Context",
      texts: [{ body: "The board’s delay was not ______; three members were waiting on a legal memo that arrived only that morning." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "capricious", B: "justified", C: "public", D: "unanimous" },
      answer: "A",
      explain: {
        correct: "Capricious means arbitrary; a delay caused by a pending memo is not arbitrary.",
        wrong: {
          B: "The sentence says the delay was not X; if X were “justified,” the memo would contradict the claim.",
          C: "Public versus private is not the contrast with a legal memo.",
          D: "Unanimous describes a vote, not the nature of a delay."
        }
      }
    },
    {
      n: 2, skill: "Words in Context",
      texts: [{ body: "In the lab, “noise” is not a sound; it is any ______ variation that hides the signal you meant to measure." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "irrelevant", B: "musical", C: "intentional", D: "seasonal only" },
      answer: "A",
      explain: {
        correct: "Irrelevant variation is exactly what scientists call noise relative to the signal.",
        wrong: {
          B: "Musical is literal sound, which the sentence rules out.",
          C: "Intentional variation would be part of the design, not hiding the signal.",
          D: "Noise is not limited to seasons."
        }
      }
    },
    {
      n: 3, skill: "Words in Context",
      texts: [{ body: "The novel’s narrator is ______: she notices the stain on a teacup but never mentions the war in the next room." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "omniscient", B: "selectively observant", C: "illiterate", D: "omnipresent" },
      answer: "B",
      explain: {
        correct: "Selectively observant captures attention to a stain and silence about a war.",
        wrong: {
          A: "Omniscient narrators know everything; this one misses or omits the war.",
          C: "Illiterate means unable to read, which is unrelated.",
          D: "Omnipresent means everywhere at once, not picky about details."
        }
      }
    },
    {
      n: 4, skill: "Words in Context",
      texts: [{ body: "Conservationists hoped the corridor would ______ isolated populations of lynx, allowing genes to move between mountain ranges." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "connect", B: "survey", C: "exhibit", D: "replace" },
      answer: "A",
      explain: {
        correct: "Connect matches a corridor that lets genes move between isolated groups.",
        wrong: {
          B: "Survey means study or map, not link populations.",
          C: "Exhibit means display.",
          D: "Replace populations would not be the goal of a corridor."
        }
      }
    },
    {
      n: 5, skill: "Words in Context",
      texts: [{ body: "The columnist’s ______ tone—every reform was “obvious,” every opponent “unserious”—eventually cost her readers who still wanted an argument." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "supercilious", B: "tentative", C: "meticulous", D: "grateful" },
      answer: "A",
      explain: {
        correct: "Supercilious means scornfully superior; “obvious” and “unserious” fit that tone.",
        wrong: {
          B: "Tentative means hesitant, unlike sweeping dismissals.",
          C: "Meticulous means careful with detail, not sneering.",
          D: "Grateful does not match contempt for opponents."
        }
      }
    },
    {
      n: 6, skill: "Words in Context",
      texts: [{ body: "After the flood, the town had to ______ which landmarks to rebuild in place and which to move uphill." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "determine", B: "demolish blindly", C: "forget", D: "rent" },
      answer: "A",
      explain: {
        correct: "Determine means decide; choosing what stays and what moves uphill is a decision.",
        wrong: {
          B: "They are choosing, not demolishing without thought.",
          C: "Forget would skip the choice.",
          D: "Rent is not the land-use choice described."
        }
      }
    },
    {
      n: 7, skill: "Text Structure and Purpose",
      texts: [{ body: "A recipe that says “cook until done” is not rustic charm. It is a missing measurement. Beginners cannot see “done.” A temperature or a time-and-weight pair would turn a family heirloom into something a stranger could succeed at on the first try." }],
      prompt: "Which choice best states the main purpose of the text?",
      choices: {
        A: "To argue that vague cooking cues fail new cooks and should be replaced with measurable ones",
        B: "To celebrate heirloom recipes as better than modern ones",
        C: "To explain the chemistry of gluten",
        D: "To discourage anyone from cooking for strangers"
      },
      answer: "A",
      explain: {
        correct: "The author rejects “until done” as incomplete and proposes temperature or time-and-weight.",
        wrong: {
          B: "Heirlooms are treated as needing translation, not as superior.",
          C: "No gluten chemistry appears.",
          D: "The goal is first-try success for a stranger, not a ban."
        }
      }
    },
    {
      n: 8, skill: "Text Structure and Purpose",
      texts: [{ body: "On the map, the border is a confident line. On the ground, it is a river that moved after a flood, a fence that stops halfway, and a family that farms both sides. Cartography prefers the line. Lived geography prefers the mess." }],
      prompt: "Which choice best describes the overall structure of the text?",
      choices: {
        A: "A contrast between official representation and on-the-ground reality, then a generalization",
        B: "A legal history of a particular treaty",
        C: "Instructions for drawing maps",
        D: "A weather report"
      },
      answer: "A",
      explain: {
        correct: "Map line versus river/fence/farm, then cartography versus lived geography.",
        wrong: {
          B: "No treaty chronology is given.",
          C: "Readers are not taught drafting.",
          D: "Flood is one detail, not a forecast."
        }
      }
    },
    {
      n: 9, skill: "Text Structure and Purpose",
      texts: [{ body: "The introduction promises a “complete” history of jazz. Chapter 3 then skips an entire decade because recordings are scarce. Completeness, here, means completeness of what survived in studios, not of what was played." }],
      prompt: "Which choice best describes the function of the second sentence?",
      choices: {
        A: "It gives a specific gap that complicates the promise named in the first sentence.",
        B: "It lists every jazz musician of the decade.",
        C: "It argues that jazz did not exist in studios.",
        D: "It praises Chapter 3 as the most complete chapter."
      },
      answer: "A",
      explain: {
        correct: "Skipping a decade because of scarce recordings undercuts “complete.”",
        wrong: {
          B: "No roster is given.",
          C: "The issue is scarce recordings, not zero jazz.",
          D: "The sentence points to a hole, not praise."
        }
      }
    },
    {
      n: 10, skill: "Cross-Text Connections",
      texts: [
        { label: "Text 1", body: "Cashless stadiums are faster. They also exclude fans who cannot or will not carry a card, including some older spectators and workers paid in cash. Speed that depends on leaving people outside is not a neutral upgrade." },
        { label: "Text 2", body: "Keeping a cash lane is cheap insurance. It costs a few extra minutes at two windows and preserves access. Venues that call cash “obsolete” are describing their preferred customer, not the whole crowd." }
      ],
      prompt: "The author of Text 2 would most likely",
      choices: {
        A: "disagree with Text 1 that exclusion can occur",
        B: "support Text 1’s concern about access and propose keeping limited cash service",
        C: "argue that older spectators should be banned",
        D: "claim that cash lanes are more expensive than rebuilding a stadium"
      },
      answer: "B",
      explain: {
        correct: "Text 2 treats cash lanes as cheap insurance for access, aligning with Text 1’s worry and adding a fix.",
        wrong: {
          A: "Text 2 also treats exclusion as real.",
          C: "Neither text wants that ban.",
          D: "Text 2 says keeping cash is cheap, not stadium-priced."
        }
      }
    }
  ]
},
{
  day: 8,
  date: "2026-09-26",
  questions: [
    {
      n: 1, skill: "Words in Context",
      texts: [{ body: "The sculpture looks ______ from the road—just a rusted slab—but up close the surface is covered with names cut to the depth of a coin." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "unprepossessing", B: "garish", C: "fragile", D: "transparent" },
      answer: "A",
      explain: {
        correct: "Unprepossessing means not striking at first; a rusted slab that later reveals names fits.",
        wrong: {
          B: "Garish means loud and showy, unlike a dull first look.",
          C: "Fragile is about breakability, not first impression.",
          D: "Transparent means see-through; a slab is not."
        }
      }
    },
    {
      n: 2, skill: "Words in Context",
      texts: [{ body: "Researchers could not ______ the two data sets until they converted both clocks to coordinated universal time." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "reconcile", B: "delete", C: "publish", D: "ignore" },
      answer: "A",
      explain: {
        correct: "Reconcile means bring into agreement; mismatched clocks blocked that until conversion.",
        wrong: {
          B: "Delete the sets would not require matching clocks.",
          C: "Publish is a later step; the immediate problem is alignment.",
          D: "Ignore the sets would not need a time conversion."
        }
      }
    },
    {
      n: 3, skill: "Words in Context",
      texts: [{ body: "His apology was ______: he named the error, described who was harmed, and stated the change he would make on Monday." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "pro forma", B: "substantive", C: "belated only", D: "sarcastic" },
      answer: "B",
      explain: {
        correct: "Substantive means having real content; naming harm and a Monday change is a real apology.",
        wrong: {
          A: "Pro forma means merely for form, the opposite of specific amends.",
          C: "Belated concerns timing, not the content listed.",
          D: "Sarcastic apologies would not lay out concrete Monday changes in good faith."
        }
      }
    },
    {
      n: 4, skill: "Words in Context",
      texts: [{ body: "The wetlands were ______ not by a single dam but by a thousand small ditches that quietly rerouted water for a century." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "created overnight", B: "degraded", C: "photographed", D: "named" },
      answer: "B",
      explain: {
        correct: "Degraded means worn down in quality; ditches rerouting water for a century would harm wetlands.",
        wrong: {
          A: "Overnight creation contradicts a century of ditches.",
          C: "Photographed does not fit “by ditches.”",
          D: "Named is not caused by ditches."
        }
      }
    },
    {
      n: 5, skill: "Words in Context",
      texts: [{ body: "Because the witness spoke in ______ generalities—“things happened,” “people were upset”—the jury could not pin down a single fact." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "vague", B: "forensic", C: "numerical", D: "lyrical" },
      answer: "A",
      explain: {
        correct: "Vague generalities match empty phrases that yield no pin-downable fact.",
        wrong: {
          B: "Forensic implies precise investigation, unlike “things happened.”",
          C: "Numerical would be numbers, not blurry phrases.",
          D: "Lyrical concerns poetic style, not the lack of facts."
        }
      }
    },
    {
      n: 6, skill: "Words in Context",
      texts: [{ body: "The startup’s growth was ______: users arrived in a spike after one video, then left when the app crashed twice in a week." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "sustainable", B: "ephemeral", C: "linear", D: "secret" },
      answer: "B",
      explain: {
        correct: "Ephemeral means short-lived; a spike then an exodus fits.",
        wrong: {
          A: "Sustainable growth would last, not collapse after crashes.",
          C: "Linear suggests steady increase, not a spike-and-drop.",
          D: "Secret is about concealment, not duration."
        }
      }
    },
    {
      n: 7, skill: "Text Structure and Purpose",
      texts: [{ body: "Do not confuse a waiting list with demand. Some names are duplicates. Some people join every list and choose later. A museum that brags about a 40,000-person waitlist without cleaning it is bragging about a spreadsheet, not about hunger for art." }],
      prompt: "Which choice best states the main purpose of the text?",
      choices: {
        A: "To caution against treating an uncleaned waitlist as proof of demand",
        B: "To teach database software",
        C: "To argue that museums should stop exhibiting art",
        D: "To estimate the true population of a city"
      },
      answer: "A",
      explain: {
        correct: "Duplicates and serial joiners undermine waitlist bragging; the last sentence states the caution.",
        wrong: {
          B: "No software tutorial appears.",
          C: "Exhibiting art is not the target; sloppy metrics are.",
          D: "City population is not estimated."
        }
      }
    },
    {
      n: 8, skill: "Text Structure and Purpose",
      texts: [{ body: "A hyphen can be a courtesy. “Small-business owner” tells you the business is small. “Small business owner” could be a short person with a firm of any size. The mark is tiny. The ambiguity it prevents is not." }],
      prompt: "Which choice best describes the function of the two quoted phrases?",
      choices: {
        A: "They illustrate how one mark changes meaning.",
        B: "They name two competing companies.",
        C: "They provide the etymology of “hyphen.”",
        D: "They summarize a novel’s plot."
      },
      answer: "A",
      explain: {
        correct: "The paired phrases show the hyphen’s effect on who or what is small.",
        wrong: {
          B: "They are grammatical examples, not firm names.",
          C: "No word history of “hyphen” is given.",
          D: "No novel is discussed."
        }
      }
    },
    {
      n: 9, skill: "Text Structure and Purpose",
      texts: [{ body: "Bring the oldest aerial photo you can find. Lay the newest satellite image beside it. The creek that used to snake now runs in a ditch, and a mall sits on the oxbow. Before-and-after is not nostalgia. It is how a planning board sees the cost of straightening a stream." }],
      prompt: "Which choice best describes the overall structure of the text?",
      choices: {
        A: "Instructions for a comparison, a concrete change, then the purpose of that comparison",
        B: "A biography of a satellite engineer",
        C: "A shopping guide to malls",
        D: "A poem about creeks with no civic claim"
      },
      answer: "A",
      explain: {
        correct: "The text tells you to pair images, shows creek-to-ditch, then says why boards need that view.",
        wrong: {
          B: "No engineer’s life is told.",
          C: "The mall is evidence of land-use change, not a shopping guide.",
          D: "The close is explicitly about planning costs."
        }
      }
    },
    {
      n: 10, skill: "Cross-Text Connections",
      texts: [
        { label: "Text 1", body: "Year-round school calendars reduce summer learning loss. Long breaks let skills decay, especially in math, and a short pause every few weeks does not create the same slide." },
        { label: "Text 2", body: "Year-round calendars help some test scores and wreck some family economies. Teenagers who work summer jobs, and younger siblings who need cheap care, lose a block of time that a scattered “intersession” does not replace. Loss is not only academic." }
      ],
      prompt: "Which choice best describes a difference in what the two authors treat as “loss”?",
      choices: {
        A: "Text 1 focuses on academic skill decay; Text 2 also counts economic and caretaking losses",
        B: "Text 1 discusses only sports; Text 2 discusses only music",
        C: "Text 1 denies that math exists; Text 2 denies that families exist",
        D: "Both authors define loss solely as building decay"
      },
      answer: "A",
      explain: {
        correct: "Text 1’s loss is summer slide in skills. Text 2 adds jobs and childcare, saying loss is not only academic.",
        wrong: {
          B: "Neither text is about those arts.",
          C: "Both assume math and families are real.",
          D: "Buildings are not the topic."
        }
      }
    }
  ]
},
{
  day: 9,
  date: "2026-09-27",
  questions: [
    {
      n: 1, skill: "Words in Context",
      texts: [{ body: "The treaty’s enforcement clause was ______: it named no penalty, no referee, and no timeline." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "robust", B: "toothless", C: "popular", D: "ancient" },
      answer: "B",
      explain: {
        correct: "Toothless means lacking force; no penalty or referee makes enforcement empty.",
        wrong: {
          A: "Robust means strong, the opposite of no penalty.",
          C: "Popular is about approval, not force.",
          D: "Ancient is about age."
        }
      }
    },
    {
      n: 2, skill: "Words in Context",
      texts: [{ body: "She tried to ______ a pattern in the outages, pinning colored dots on a map until a cluster near one substation became obvious." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "discern", B: "erase", C: "invent randomly", D: "sing" },
      answer: "A",
      explain: {
        correct: "Discern means detect; mapping dots until a cluster appears is an act of seeing a pattern.",
        wrong: {
          B: "Erase a pattern would hide the cluster.",
          C: "The cluster is treated as real, not randomly invented.",
          D: "Sing is unrelated."
        }
      }
    },
    {
      n: 3, skill: "Words in Context",
      texts: [{ body: "The director’s commentary is refreshingly ______: he admits which scenes were accidents and which were planned for months." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "self-mythologizing", B: "unvarnished", C: "inaudible", D: "vindictive" },
      answer: "B",
      explain: {
        correct: "Unvarnished means plain and without gloss; admitting accidents fits.",
        wrong: {
          A: "Self-mythologizing would hide accidents and inflate planning.",
          C: "Inaudible concerns volume.",
          D: "Vindictive means vengeful, not honest about process."
        }
      }
    },
    {
      n: 4, skill: "Words in Context",
      texts: [{ body: "Urban heat is not evenly spread; it is ______ in neighborhoods with little tree cover and a lot of asphalt." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "concentrated", B: "absent", C: "imaginary", D: "seasonal only in forests" },
      answer: "A",
      explain: {
        correct: "Concentrated means gathered in one place; little shade and much asphalt locate the heat.",
        wrong: {
          B: "Absent would mean no heat there.",
          C: "Imaginary denies the phenomenon.",
          D: "The sentence points to asphalt neighborhoods, not forests."
        }
      }
    },
    {
      n: 5, skill: "Words in Context",
      texts: [{ body: "The translation is ______ rather than literal: it trades word-for-word fidelity for jokes that land in English." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "adaptive", B: "verbatim", C: "unfinished", D: "bilingual in every line" },
      answer: "A",
      explain: {
        correct: "Adaptive means adjusted to a new context; trading literal fidelity for English jokes is adaptation.",
        wrong: {
          B: "Verbatim is word-for-word, which the sentence rejects.",
          C: "Unfinished is not implied by a choice about jokes.",
          D: "The product is English jokes, not every line in two languages."
        }
      }
    },
    {
      n: 6, skill: "Words in Context",
      texts: [{ body: "Investors grew ______ after the third delay, selling shares rather than waiting for a launch date that kept sliding." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "restive", B: "patient", C: "uninformed", D: "amused" },
      answer: "A",
      explain: {
        correct: "Restive means impatient and uneasy; selling after delays fits.",
        wrong: {
          B: "Patient investors would wait.",
          C: "They are responding to known delays, not ignorance.",
          D: "Amused does not explain selling."
        }
      }
    },
    {
      n: 7, skill: "Text Structure and Purpose",
      texts: [{ body: "A monument can tell you who had the power to pour concrete. It cannot, by itself, tell you who scrubbed the steps or who was kept off the grass. For that you need payrolls, photographs, and the memories of people who were never asked to pose at the dedication." }],
      prompt: "Which choice best states the main purpose of the text?",
      choices: {
        A: "To limit what monuments can prove and point to other sources for fuller history",
        B: "To argue that all monuments should be demolished immediately",
        C: "To explain how concrete cures",
        D: "To advertise a dedication ceremony"
      },
      answer: "A",
      explain: {
        correct: "The text says monuments show power to build, then lists payrolls, photos, and memories for the rest.",
        wrong: {
          B: "No demolition demand appears.",
          C: "Concrete is a material, not a chemistry lesson.",
          D: "Dedication is mentioned as exclusive, not as an ad."
        }
      }
    },
    {
      n: 8, skill: "Text Structure and Purpose",
      texts: [{ body: "If you only sample songs that charted, you will write a history of marketing as much as a history of music. Chart position is a useful fact. It is a terrible sole archive." }],
      prompt: "Which choice best describes the function of the last sentence?",
      choices: {
        A: "It concedes a limited use for charts while rejecting them as the only source.",
        B: "It lists the number-one hits of a decade.",
        C: "It claims marketing does not exist.",
        D: "It offers a biography of a chart compiler."
      },
      answer: "A",
      explain: {
        correct: "“Useful fact” plus “terrible sole archive” both grants and limits charts.",
        wrong: {
          B: "No song list appears.",
          C: "Marketing is treated as real.",
          D: "No compiler’s life is told."
        }
      }
    },
    {
      n: 9, skill: "Text Structure and Purpose",
      texts: [{ body: "Begin with the rumor. Trace it to a single unsigned post. Then find the photograph that the post cropped. The method is boring on purpose. Conspiracy thrives on speed; source work is slow enough to be a brake." }],
      prompt: "Which choice best describes the overall structure of the text?",
      choices: {
        A: "A method is sketched in steps, then justified by contrast with conspiracy’s speed",
        B: "A courtroom scene is narrated",
        C: "A camera manual is excerpted",
        D: "A timeline of a war is given"
      },
      answer: "A",
      explain: {
        correct: "Rumor, post, cropped photo—then why the slow method exists.",
        wrong: {
          B: "No trial scene appears.",
          C: "Cropping is about verification, not camera settings.",
          D: "No war chronology appears."
        }
      }
    },
    {
      n: 10, skill: "Cross-Text Connections",
      texts: [
        { label: "Text 1", body: "Public transit should be free. Fare collection is slow, expensive, and regressive. Cities already subsidize roads; they can subsidize buses without a tap-card ritual." },
        { label: "Text 2", body: "Zero fares raise ridership, then crowd the routes that already work, while poorly served neighborhoods still wait. Better to cut fares for low-income riders and spend the rest on frequency where the map is still blank." }
      ],
      prompt: "Based on the texts, both authors would most likely agree that",
      choices: {
        A: "transit funding and access are legitimate public problems",
        B: "fare collection is the only issue that matters",
        C: "roads should no longer exist",
        D: "poorly served neighborhoods need no new service"
      },
      answer: "A",
      explain: {
        correct: "Text 1 wants free fares as public subsidy; Text 2 wants targeted fares plus more service. Both treat transit as a public problem to fund.",
        wrong: {
          B: "Text 2 cares about frequency and blank map areas, not only fares.",
          C: "Text 1 mentions road subsidies as a comparison, not abolition.",
          D: "Text 2 wants spending where the map is blank."
        }
      }
    }
  ]
},
{
  day: 10,
  date: "2026-09-28",
  questions: [
    {
      n: 1, skill: "Words in Context",
      texts: [{ body: "The experiment’s result was ______: five labs saw the same effect, and none could make it vanish by tweaking temperature or sample source." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "robust", B: "anecdotal", C: "decorative", D: "pending" },
      answer: "A",
      explain: {
        correct: "Robust results hold up across labs and conditions; five replications and failed tweaks match.",
        wrong: {
          B: "Anecdotal means based on isolated stories, unlike five labs.",
          C: "Decorative is about looks.",
          D: "Pending means not yet in; the result is already replicated."
        }
      }
    },
    {
      n: 2, skill: "Words in Context",
      texts: [{ body: "Rather than ______ the opposing study, the review article summarized it fairly and then pointed to a sampling flaw." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "caricature", B: "cite", C: "fund", D: "translate" },
      answer: "A",
      explain: {
        correct: "Caricature means distort for easy attack; summarizing fairly is the opposite move.",
        wrong: {
          B: "They did need to cite it; “rather than cite” would not fit a summary of the study.",
          C: "Fund is financial and irrelevant.",
          D: "Translate is about language."
        }
      }
    },
    {
      n: 3, skill: "Words in Context",
      texts: [{ body: "The harbor’s ______ smells—diesel, low tide, fried dough—told arriving passengers they were not in a brochure." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "incongruous", B: "sterile", C: "identical", D: "theoretical" },
      answer: "A",
      explain: {
        correct: "Incongruous means clashing; mixed smells versus brochure polish fit.",
        wrong: {
          B: "Sterile would mean no smell or a clinical one.",
          C: "Identical smells would not be a mix of three unlike odors as a clash with a brochure.",
          D: "Theoretical smells are not smelled by passengers."
        }
      }
    },
    {
      n: 4, skill: "Words in Context",
      texts: [{ body: "To ______ harm during the drought, farmers switched a portion of fields to crops that need less water." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "mitigate", B: "maximize", C: "record only", D: "celebrate" },
      answer: "A",
      explain: {
        correct: "Mitigate means lessen; lower-water crops reduce drought harm.",
        wrong: {
          B: "Maximize harm would be the opposite goal.",
          C: "Record only would not include switching crops.",
          D: "Celebrate harm is incoherent as a purpose for switching crops."
        }
      }
    },
    {
      n: 5, skill: "Words in Context",
      texts: [{ body: "The speaker’s ______—a fondness for words like “utilize” and “aforementioned”—made a simple update sound like a legal brief." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "verbosity", B: "understatement", C: "shyness", D: "accuracy" },
      answer: "A",
      explain: {
        correct: "Verbosity is wordiness; inflated diction turning a simple update into a brief fits.",
        wrong: {
          B: "Understatement would make things sound smaller, not more legalistic.",
          C: "Shyness is social fear, not diction.",
          D: "Accuracy is not shown by “utilize” and “aforementioned.”"
        }
      }
    },
    {
      n: 6, skill: "Words in Context",
      texts: [{ body: "Archaeologists were careful not to ______ modern motives onto a culture that left no written record of why the stones were aligned." }],
      prompt: "Which choice completes the text with the most logical and precise word or phrase?",
      choices: { A: "project", B: "excavate", C: "carbon-date", D: "photograph" },
      answer: "A",
      explain: {
        correct: "Project means attribute one’s own ideas to others; they avoid forcing modern motives onto an unexplained alignment.",
        wrong: {
          B: "Excavate is digging, which they presumably still do.",
          C: "Carbon-date is a method, not an interpretive error.",
          D: "Photograph is documentation, not motive-attribution."
        }
      }
    },
    {
      n: 7, skill: "Text Structure and Purpose",
      texts: [{ body: "Speed limits are not descriptions of how fast cars can go. They are decisions about how much risk a street should carry. A limit of 20 near a school is not a claim about engines. It is a claim about children." }],
      prompt: "Which choice best states the main purpose of the text?",
      choices: {
        A: "To reframe speed limits as moral and civic choices rather than engineering facts",
        B: "To explain how engines generate horsepower",
        C: "To argue that schools should close",
        D: "To provide a history of the automobile"
      },
      answer: "A",
      explain: {
        correct: "The text denies that limits describe capability and treats them as decisions about risk and children.",
        wrong: {
          B: "Engines are mentioned only to reject that framing.",
          C: "Schools are why the limit exists, not targets for closure.",
          D: "No auto history appears."
        }
      }
    },
    {
      n: 8, skill: "Text Structure and Purpose",
      texts: [{ body: "Look at the acknowledgments page. If a book about “solitary genius” thanks a dozen readers, an editor, and a partner who “kept the household running,” the thesis has already sprung a leak. The back matter is sometimes more accurate than the preface." }],
      prompt: "Which choice best describes the function of the second sentence?",
      choices: {
        A: "It offers a hypothetical example that undermines the solitary-genius claim.",
        B: "It lists the table of contents.",
        C: "It attacks all editors as unnecessary.",
        D: "It explains how to bind a book."
      },
      answer: "A",
      explain: {
        correct: "The thanks-list example shows a “solitary” book depending on many people, so the thesis leaks.",
        wrong: {
          B: "No contents list appears.",
          C: "The editor is evidence of collaboration, not a target.",
          D: "Binding is not discussed."
        }
      }
    },
    {
      n: 9, skill: "Text Structure and Purpose",
      texts: [{ body: "Collect the oral histories while people can still contradict one another. After a few decades, stories harden into a single official version. Disagreement is not a problem for the archive. It is the archive’s last chance at texture." }],
      prompt: "Which choice best describes the overall structure of the text?",
      choices: {
        A: "An urgent instruction, a warning about time, then a redefinition of disagreement as value",
        B: "A statistical table of census data",
        C: "A travel narrative through several cities",
        D: "A product comparison of microphones"
      },
      answer: "A",
      explain: {
        correct: "Collect now; stories harden; disagreement equals texture.",
        wrong: {
          B: "No table appears.",
          C: "No tour appears.",
          D: "Equipment is not compared."
        }
      }
    },
    {
      n: 10, skill: "Cross-Text Connections",
      texts: [
        { label: "Text 1", body: "Homework apps that auto-grade math let teachers assign more practice. Instant feedback is the point: a student learns of an error while the problem is still in mind." },
        { label: "Text 2", body: "Instant feedback trains speed, not reflection. When an app flags an error in two seconds, students often guess again instead of reconstructing the step. Delay can be a pedagogical tool, not a glitch." }
      ],
      prompt: "The author of Text 2 would most likely characterize the “instant feedback” praised in Text 1 as",
      choices: {
        A: "always superior to any delay",
        B: "potentially at odds with careful reconstruction of a missed step",
        C: "impossible with current software",
        D: "relevant only to literature class"
      },
      answer: "B",
      explain: {
        correct: "Text 2 says two-second flags push guessing instead of reconstructing the step, so instant feedback can work against reflection.",
        wrong: {
          A: "That is closer to Text 1, which Text 2 disputes.",
          C: "Text 2 assumes such apps exist.",
          D: "Both texts discuss math practice."
        }
      }
    }
  ]
}
);
