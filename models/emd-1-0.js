const EmD = (() => {
    const VERSION = "EmD-1.0";
    const NAME = "EmD-1.0";

    const EMOJI_MAP = {
        "😂":"Happy","🤣":"Happy","😹":"Happy","😆":"Happy","😄":"Happy",
        "😁":"Happy","😀":"Happy","😃":"Happy","🙂":"Happy","😊":"Happy",
        "😇":"Happy","🥰":"Happy","😍":"Happy","🤩":"Happy","😘":"Happy",
        "❤️":"Happy","❤":"Happy","💖":"Happy","💕":"Happy","💗":"Happy",
        "🌹":"Happy","✨":"Happy","🎉":"Happy","🥳":"Happy","🙌":"Happy",
        "🤗":"Happy","😅":"Happy",
        "😎":"Confidence","💪":"Confidence","🔥":"Confidence","💯":"Confidence",
        "🗿":"Confidence","🥶":"Confidence","🐐":"Confidence","👑":"Confidence",
        "⚡":"Confidence","🦾":"Confidence",
        "😭":"Sad","😢":"Sad","😞":"Sad","😔":"Sad","💔":"Sad",
        "🥀":"Sad","😿":"Sad","😥":"Sad","😓":"Sad",
        "💀":"Embarrassed","☠️":"Embarrassed","☠":"Embarrassed",
        "😬":"Embarrassed","🫠":"Embarrassed","🙃":"Embarrassed",
        "😡":"Angry","😠":"Angry","🤬":"Angry","😤":"Angry","💢":"Angry",
        "👿":"Angry","😾":"Angry",
        "😱":"Surprised","😲":"Surprised","😮":"Surprised","🤯":"Surprised",
        "😳":"Surprised","🙀":"Surprised","⁉️":"Surprised",
        "😨":"Fear","😰":"Fear","😧":"Fear","😦":"Fear","🫣":"Fear",
        "🤢":"Disgust","🤮":"Disgust","🤧":"Disgust","😷":"Disgust",
        "🤔":"Confused","🧐":"Confused","😕":"Confused","😟":"Confused",
        "🙁":"Disappointed","☹️":"Disappointed","☹":"Disappointed",
        "😩":"Disappointed","😫":"Disappointed","😖":"Disappointed",
        "🫤":"Disappointed","😑":"Disappointed",
        "😴":"Bored","🥱":"Bored","💤":"Bored",
        "😌":"Calm","🧘":"Calm","🕊️":"Calm",
        "😐":"Neutral","😶":"Neutral",
        "🤝":"Friendly","🫂":"Friendly","✌️":"Friendly","👋":"Friendly","😺":"Friendly",
        "🤡":"Provoking","🖕":"Provoking","😏":"Provoking","😒":"Provoking","💩":"Provoking"
    };

    const CRISIS_PHRASES = [
        "i want to die","i wanna die","i want to kill myself","i wanna kill myself",
        "kill myself","kms","kill me now","kill me","end my life","end it all",
        "end it","im gonna kill myself","i'm gonna kill myself","i dont want to live",
        "i don't want to live","i dont wanna live","i don't wanna live",
        "better off dead","wanna die","want to die","dont want to be here",
        "don't want to be here","no reason to live","nothing to live for",
        "suicidal","suicide","self harm","selfharm","cut myself",
        "help me","somebody help","someone help","please help","i need help",
        "need help","help me please","help me now","help me out"
    ];

    const BENIGN_HELP = [
        "help you","help them","help him","help her","help us","help it",
        "can you help","could you help","would you help","will you help",
        "happy to help","glad to help","here to help","able to help",
        "help with","help out","helping you","helpful"
    ];

    const HOSTILE_MARKERS = [
        "wtf","wth","what the","why the","why are you","why do you",
        "what are you","what is wrong","whats wrong","what's wrong"
    ];

    const ANGRY_MARKERS = ["wtf","wth","what the hell","what the fuck"];

    const PHRASES = {
        provoking: [
            "cry about it","stay mad","cope","seethe","cope harder","skill issue",
            "git gud","get good","ratio","l + ratio","touch grass","no one asked",
            "nobody asked","who asked","ok and","so what","cry me a river",
            "mad bro","u mad","you mad","triggered","snowflake","crybaby",
            "hold this L","take the L","you're wrong","your wrong","nuh uh",
            "cap","no cap","mid","trash take","bad take","wrong opinion",
            "stay coping","stay crying","stay salty","salty","lmao cope"
        ],
        embarrassed: [
            "secondhand embarrassment","im dying","i'm dying",
            "im dead","i'm dead","im gone","i'm gone",
            "so awkward","that was awkward","this is awkward","oh no",
            "why did i","why did you","i cant believe","i can't believe",
            "im crying","i'm crying"
        ],
        negative: [
            "sucks ass","sucks","that sucks","this sucks","you suck",
            "hate this","hate that","hate you","so bad","so stupid",
            "piece of shit","piece of crap","what the hell","what the fuck",
            "shut up","screw you","piss off","fed up","done with this",
            "worst","terrible","horrible","awful","garbage","trash"
        ],
        positive: [
            "so good","so great","so happy","love it","love this","love you",
            "best day","best ever","so excited","cant wait","can't wait",
            "feeling great","feeling good","amazing day"
        ],
        friendly: [
            "welcome","hi there","hey there","nice to meet","how are you",
            "good to see","good morning","good afternoon","good evening",
            "take care","have a nice","have a good","see you","thank you",
            "thanks so much","much appreciated"
        ],
        disappointed: [
            "let down","let me down","so disappointing","so disappointed",
            "expected more","thought you would","i thought you","not what i",
            "not what i expected","such a shame","that's a shame","thats a shame"
        ]
    };

    const RULES = {
        Friendly: [
            "welcome","hi","hey","hello","howdy","greetings","thanks","thank","thankyou",
            "please","friend","friendly","buddy",
            "nice","lovely","kind","sweet","warm","invite","invited","hang out","catch up",
            "good to","happy to","glad to","here for","no problem","anytime","of course",
            "good morning","good afternoon","good evening","good night","take care"
        ],
        Happy: [
            "happy","joy","joyful","love","loved","loving","great","awesome","amazing","wonderful",
            "fantastic","excited","exciting","yay","glad","delighted","cheerful","smile","smiling",
            "good","best","excellent","perfect","brilliant","thrilled","grateful","lit","fire",
            "dope","sick","cool","nice","sweet","rad","lol","lmao","lmfao","haha","hehe",
            "hahaha","lolol","rofl","xd","hihi"
        ],
        Confidence: [
            "confident","confidence","bold","fearless","unstoppable","strong","powerful",
            "winning","winner","champion","king","queen","goat","slay","slaying","flex",
            "flexing","alpha","sigma","grind","hustle","built different","on top",
            "cant stop me","can't stop me","i got this","ez","easy","no diff","carry",
            "carried","dominant","dominance","boss","legend","iconic","icon"
        ],
        Provoking: [
            "cope","seethe","triggered","snowflake","crybaby","ratio","cap",
            "mid","salty","nobody asked","no one asked","who asked","ok and","so what",
            "skill issue","touch grass","git gud","mad","nuh uh",
            "hold this l","take the l","bad take","trash take","wrong opinion",
            "stay mad","stay salty","stay coping","stay crying"
        ],
        Crisis: [
            "suicidal","suicide","selfharm","self harm","helpme","save me","saveme"
        ],
        Sad: [
            "sad","sadness","cry","crying","depressed","depressing","unhappy","lonely","alone",
            "miss","missing","hurt","hurts","tears","down","miserable","heartbroken","grief",
            "sorrow","upset","hopeless","empty","blue","bummed","heartache","devastated"
        ],
        Disappointed: [
            "disappointed","disappointing","disappointment","letdown","let down",
            "underwhelmed","underwhelming","anticlimactic","shame","expected more",
            "thought better","not good enough","not enough","failed","failure",
            "fell short","falls short","wasted","unsatisfied","unfulfilled"
        ],
        Angry: [
            "angry","anger","mad","furious","hate","hated","hating","rage","raging","annoyed",
            "annoying","irritated","irritating","stupid","idiot","idiotic","frustrated",
            "frustrating","pissed","infuriated","outraged","fuming","sucks","suck","sucked",
            "trash","garbage","crap","bullshit","bs","wtf","wth","stfu","damn","dammit","useless",
            "worthless","dumb","moron","jerk","asshole","ass","hell","stop","quit",
            "enough","omg","seriously","really"
        ],
        Embarrassed: [
            "cringe","cringy","cringey","cringed","cringing","awkward","embarrassing",
            "embarrassed","secondhand embarrassment","yikes","oof","yuck","bleh",
            "skull","bruh","eww","ugh","bro what"
        ],
        Surprised: [
            "surprised","surprising","shocked","shocking","wow","unexpected","whoa",
            "no way","astonished","astounded","amazed","stunned","unbelievable","holy"
        ],
        Fear: [
            "scared","scary","afraid","fear","fearful","terrified","terrifying","anxious",
            "nervous","worried","worry","panic","panicking","dread","horrified","frightened"
        ],
        Disgust: [
            "disgusting","disgusted","gross","yuck","eww","ew","nasty","revolting","sick",
            "repulsed","repulsive","vile","horrid","trashy"
        ],
        Confused: [
            "confused","confusing","unsure","puzzled","puzzling","huh","don't understand",
            "dont understand","lost","uncertain","unclear","baffled","perplexed","what",
            "why","how","wait","hmm","excuse me","???","??"
        ],
        Excited: [
            "excited","exciting","thrilled","pumped","cant wait","can't wait","hyped","stoked",
            "eager","enthusiastic","ecstatic"
        ],
        Bored: [
            "bored","boring","meh","dull","uninterested","whatever","blah","tedious","monotonous"
        ],
        Calm: [
            "calm","relaxed","peaceful","chill","serene","tranquil","at ease","mellow","quiet"
        ],
        Anxious: [
            "anxious","stressed","stress","overwhelmed","uneasy","tense","on edge","restless",
            "apprehensive","jittery"
        ],
        Content: [
            "content","satisfied","pleased","fine","okay","ok","alright","comfortable","settled"
        ],
        Grateful: [
            "grateful","thankful","thanks","appreciate","appreciated","blessed"
        ],
        Lonely: [
            "lonely","alone","isolated","abandoned","left out","no one","nobody"
        ]
    };

    const LABELS = [
        { min: 0.95, label: "Definitely" },
        { min: 0.85, label: "Very Sure" },
        { min: 0.75, label: "Likely" },
        { min: 0.65, label: "Possibly Yes" },
        { min: 0.55, label: "Not Sure" },
        { min: 0.50, label: "Possibly Not" }
    ];

    const clamp = v => Math.min(1, Math.max(0.5, v));

    const getLabel = confidence => {
        const r = Math.round(confidence * 10) / 10;
        for (const entry of LABELS) {
            if (r >= entry.min) return entry.label;
        }
        return "Possibly Not";
    };

    const computeConfidence = ({
        matchedWords, matchedWeight, coverage,
        exclamations, questionMarks, capsRatio,
        emojiCount, phraseMatch, distinctCategories
    }) => {
        if (phraseMatch) {
            let base = 0.82;
            base += Math.min(0.08, matchedWords * 0.02);
            base += Math.min(0.05, exclamations * 0.02);
            base += Math.min(0.05, capsRatio * 0.08);
            return clamp(base);
        }

        if (emojiCount > 0) {
            let base = 0.70;
            base += Math.min(0.20, emojiCount * 0.07);
            base += Math.min(0.06, exclamations * 0.02);
            base += Math.min(0.04, capsRatio * 0.06);
            return clamp(base);
        }

        if (matchedWords === 0) return 0.5;

        let base = 0.50;
        base += Math.min(0.18, Math.log2(matchedWords + 1) * 0.09);
        base += Math.min(0.15, matchedWeight * 0.008);
        base += Math.min(0.10, coverage * 0.5);
        base += Math.min(0.06, exclamations * 0.02);
        base += Math.min(0.04, capsRatio * 0.06);

        if (distinctCategories > 1) {
            base -= Math.min(0.12, (distinctCategories - 1) * 0.04);
        }

        return clamp(base);
    };

    const phraseConfidence = (phrase, emotion, ctx) => {
        const confidence = computeConfidence({
            matchedWords: phrase.split(/\s+/).length,
            matchedWeight: phrase.replace(/\s+/g, "").length,
            coverage: phrase.length / Math.max(1, ctx.text.length),
            exclamations: ctx.exclamations,
            questionMarks: ctx.questionMarks,
            capsRatio: ctx.capsRatio,
            emojiCount: 0,
            phraseMatch: true,
            distinctCategories: 1
        });
        return { emotion, confidence };
    };

    const analyze = text => {
        if (typeof text !== "string") throw new TypeError("EmD-1.0: input must be a string");
        const trimmed = text.trim();
        if (!trimmed) return { emotion: "Neutral", confidence: 0.5, label: getLabel(0.5) };

        const lower = trimmed.toLowerCase();
        const exclamations = (trimmed.match(/!/g) || []).length;
        const questionMarks = (trimmed.match(/\?/g) || []).length;
        const letters = trimmed.replace(/[^A-Za-z]/g, "");
        const capsRatio = letters.length ? (trimmed.replace(/[^A-Z]/g, "").length / letters.length) : 0;
        const words = lower.split(/[^a-z']+/).filter(Boolean);

        const ctx = { text: trimmed, exclamations, questionMarks, capsRatio };

        let emojiHits = {};
        for (const [emoji, emotion] of Object.entries(EMOJI_MAP)) {
            if (trimmed.includes(emoji)) {
                emojiHits[emotion] = (emojiHits[emotion] || 0) + 1;
            }
        }
        let emojiEmotion = null, emojiCount = 0;
        for (const [emotion, count] of Object.entries(emojiHits)) {
            if (count > emojiCount) { emojiCount = count; emojiEmotion = emotion; }
        }
        if (emojiEmotion) {
            const confidence = computeConfidence({
                matchedWords: 0, matchedWeight: 0, coverage: 0,
                exclamations, questionMarks, capsRatio,
                emojiCount, phraseMatch: false,
                distinctCategories: Object.keys(emojiHits).length
            });
            return { emotion: emojiEmotion, confidence, label: getLabel(confidence) };
        }

        const hasBenignHelp = BENIGN_HELP.some(p => lower.includes(p));
        for (const phrase of CRISIS_PHRASES) {
            if (lower.includes(phrase)) {
                if (phrase.includes("help") && hasBenignHelp) continue;
                const result = phraseConfidence(phrase, "Crisis", ctx);
                return { ...result, label: getLabel(result.confidence) };
            }
        }

        const hasHostileMarker = HOSTILE_MARKERS.some(m => lower.includes(m));
        if (hasHostileMarker) {
            const reallyAngry = ANGRY_MARKERS.some(m => lower.includes(m));
            const emotion = reallyAngry ? "Angry" : "Confused";
            const confidence = computeConfidence({
                matchedWords: 2, matchedWeight: 8, coverage: 0.4,
                exclamations, questionMarks, capsRatio,
                emojiCount: 0, phraseMatch: true, distinctCategories: 1
            });
            return { emotion, confidence, label: getLabel(confidence) };
        }

        const angryWords = ["omg","wth","wtf","stop","no","why","what","how","dont","don't","cant","can't","quit","enough"];
        const happySafeWords = ["happy","love","great","awesome","yay","thanks","thank","welcome","hi","hello","hey"];
        const hasAngryWord = angryWords.some(w => lower.includes(w));
        const hasHappySafe = happySafeWords.some(w => lower.includes(w));
        if (capsRatio > 0.7 && exclamations >= 1 && !hasHappySafe) {
            const confidence = computeConfidence({
                matchedWords: hasAngryWord ? 1 : 0,
                matchedWeight: hasAngryWord ? 5 : 0,
                coverage: capsRatio * 0.5,
                exclamations, questionMarks, capsRatio,
                emojiCount: 0, phraseMatch: true, distinctCategories: 1
            });
            return { emotion: "Angry", confidence, label: getLabel(confidence) };
        }

        for (const phrase of PHRASES.provoking) {
            if (lower.includes(phrase)) {
                const r = phraseConfidence(phrase, "Provoking", ctx);
                return { ...r, label: getLabel(r.confidence) };
            }
        }
        for (const phrase of PHRASES.embarrassed) {
            if (lower.includes(phrase)) {
                const r = phraseConfidence(phrase, "Embarrassed", ctx);
                return { ...r, label: getLabel(r.confidence) };
            }
        }
        for (const phrase of PHRASES.negative) {
            if (lower.includes(phrase)) {
                const disgustLean = ["garbage","trash","disgusting","nasty","gross","vile","horrible","awful","terrible"];
                const emotion = disgustLean.some(w => phrase.includes(w)) ? "Disgust" : "Angry";
                const r = phraseConfidence(phrase, emotion, ctx);
                return { ...r, label: getLabel(r.confidence) };
            }
        }
        for (const phrase of PHRASES.positive) {
            if (lower.includes(phrase)) {
                const r = phraseConfidence(phrase, "Happy", ctx);
                return { ...r, label: getLabel(r.confidence) };
            }
        }
        for (const phrase of PHRASES.friendly) {
            if (lower.includes(phrase)) {
                const r = phraseConfidence(phrase, "Friendly", ctx);
                return { ...r, label: getLabel(r.confidence) };
            }
        }
        for (const phrase of PHRASES.disappointed) {
            if (lower.includes(phrase)) {
                const r = phraseConfidence(phrase, "Disappointed", ctx);
                return { ...r, label: getLabel(r.confidence) };
            }
        }

        const questionStarts = ["what","why","how","huh","wait","hmm","excuse me"];
        const startsWithQuestion = questionStarts.some(q => lower.startsWith(q));

        if (questionMarks >= 2 && startsWithQuestion) {
            const confidence = clamp(computeConfidence({
                matchedWords: 1, matchedWeight: 4, coverage: 0.3,
                exclamations, questionMarks, capsRatio,
                emojiCount: 0, phraseMatch: false, distinctCategories: 1
            }) + Math.min(0.08, questionMarks * 0.02));
            return { emotion: "Confused", confidence, label: getLabel(confidence) };
        }
        if (questionMarks >= 1 && startsWithQuestion) {
            const confidence = computeConfidence({
                matchedWords: 1, matchedWeight: 4, coverage: 0.2,
                exclamations, questionMarks, capsRatio,
                emojiCount: 0, phraseMatch: false, distinctCategories: 1
            });
            return { emotion: "Confused", confidence, label: getLabel(confidence) };
        }

        if (exclamations >= 2 && questionMarks >= 2) {
            const confidence = computeConfidence({
                matchedWords: 0, matchedWeight: 0, coverage: 0,
                exclamations, questionMarks, capsRatio,
                emojiCount: 0, phraseMatch: true, distinctCategories: 1
            });
            return { emotion: "Surprised", confidence, label: getLabel(confidence) };
        }
        if (exclamations >= 2) {
            const strongEmotions = ["happy","sad","angry","hate","love","scared","fear","excited"];
            const hasStrong = strongEmotions.some(w => lower.includes(w));
            if (!hasStrong) {
                const friendlyWords = ["welcome","hi","hey","hello","thanks","thank","good","nice"];
                if (words.some(w => friendlyWords.includes(w))) {
                    const confidence = 0.9;
                    return { emotion: "Friendly", confidence, label: getLabel(confidence) };
                }
                const confidence = computeConfidence({
                    matchedWords: 0, matchedWeight: 0, coverage: 0,
                    exclamations, questionMarks, capsRatio,
                    emojiCount: 0, phraseMatch: true, distinctCategories: 1
                });
                return { emotion: "Surprised", confidence, label: getLabel(confidence) };
            }
        }

        let scored = [];
        for (const [emotion, words] of Object.entries(RULES)) {
            let matches = 0, weight = 0, matchedChars = 0;
            for (const word of words) {
                if (lower.includes(word)) {
                    matches++;
                    weight += word.length >= 5 ? word.length : word.length * 0.4;
                    matchedChars += word.length;
                }
            }
            if (matches > 0) {
                const coverage = matchedChars / Math.max(1, trimmed.length);
                const score = weight * (0.4 + coverage) * (1 + Math.log2(matches + 1) * 0.3);
                scored.push({ emotion, matches, weight, coverage, score });
            }
        }

        if (scored.length === 0) {
            const base = computeConfidence({
                matchedWords: 0, matchedWeight: 0, coverage: 0,
                exclamations, questionMarks, capsRatio,
                emojiCount: 0, phraseMatch: false, distinctCategories: 0
            });
            const confidence = clamp(0.55 + base * 0.2);
            return { emotion: "Neutral", confidence, label: getLabel(confidence) };
        }

        scored.sort((a, b) => b.score - a.score);
        const winner = scored[0];

        const confidence = computeConfidence({
            matchedWords: winner.matches,
            matchedWeight: winner.weight,
            coverage: winner.coverage,
            exclamations, questionMarks, capsRatio,
            emojiCount: 0, phraseMatch: false,
            distinctCategories: scored.length
        });

        return { emotion: winner.emotion, confidence, label: getLabel(confidence) };
    };

    const analyzeWithRetry = async (text, maxAttempts = 6) => {
        let attempt = 0;
        let lastResult = null;

        while (attempt < maxAttempts) {
            attempt++;
            await new Promise(resolve => setTimeout(resolve, 350 + Math.random() * 450));

            const result = analyze(text);

            if (result.confidence >= 0.5) return result;
            lastResult = result;
            await new Promise(resolve => setTimeout(resolve, 200));
        }

        if (lastResult) return { ...lastResult, confidence: 0.5, label: getLabel(0.5) };
        return { emotion: "Neutral", confidence: 0.5, label: getLabel(0.5) };
    };

    return Object.freeze({
        name: NAME,
        version: VERSION,
        detect: analyze,
        detectAsync: analyzeWithRetry,
        getLabel
    });
})();

if (typeof module !== "undefined" && module.exports) {
    module.exports = EmD;
}
if (typeof window !== "undefined") {
    window.EmD = EmD;
}
