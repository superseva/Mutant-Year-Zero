export class MYZDieBase extends Die {
    constructor(termData) {
        termData.faces = 6;
        super(termData);
    }

    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "b";    

    /* -------------------------------------------- */

    /** @override */
    static getResultLabel(result) {
        return {
            1: '<img src="systems/mutant-year-zero/ui/dice/b1.jpg" />',
            2: '<img src="systems/mutant-year-zero/ui/dice/b2.jpg" />',
            3: '<img src="systems/mutant-year-zero/ui/dice/b3.jpg" />',
            4: '<img src="systems/mutant-year-zero/ui/dice/b4.jpg" />',
            5: '<img src="systems/mutant-year-zero/ui/dice/b5.jpg" />',
            6: '<img src="systems/mutant-year-zero/ui/dice/b6.jpg" />',
        }[result];
    }
}

export class MYZDieSkill extends Die {
    constructor(termData) {
        termData.faces = 6;
        super(termData);
    }
    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "s";    

    /* -------------------------------------------- */

    /** @override */
    static getResultLabel(result) {
        return {
            1: '<img src="systems/mutant-year-zero/ui/dice/s1.jpg" />',
            2: '<img src="systems/mutant-year-zero/ui/dice/s2.jpg" />',
            3: '<img src="systems/mutant-year-zero/ui/dice/s3.jpg" />',
            4: '<img src="systems/mutant-year-zero/ui/dice/s4.jpg" />',
            5: '<img src="systems/mutant-year-zero/ui/dice/s5.jpg" />',
            6: '<img src="systems/mutant-year-zero/ui/dice/s6.jpg" />',
        }[result];
    }
}

export class MYZDieGear extends Die {
    constructor(termData) {
        termData.faces = 6;
        super(termData);
    }
    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "g";    

    /* -------------------------------------------- */

    /** @override */
    static getResultLabel(result) {
        return {
            1: '<img src="systems/mutant-year-zero/ui/dice/g1.jpg" />',
            2: '<img src="systems/mutant-year-zero/ui/dice/g2.jpg" />',
            3: '<img src="systems/mutant-year-zero/ui/dice/g3.jpg" />',
            4: '<img src="systems/mutant-year-zero/ui/dice/g4.jpg" />',
            5: '<img src="systems/mutant-year-zero/ui/dice/g5.jpg" />',
            6: '<img src="systems/mutant-year-zero/ui/dice/g6.jpg" />',
        }[result];
    }
}
