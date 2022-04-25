let rna = []
class Dnas {
    constructor(sequencia) {
        this.sequencia = sequencia;

    }


    DNAforRNA(DNA) {

        let dnas = DNA.split("")

        dnas.forEach(meusdnas => {
            if (meusdnas == "G") {
                meusdnas = "C"
                rna.push(meusdnas)
            } else if (meusdnas == "C") {
                meusdnas = "G"
                rna.push(meusdnas)
            } else if (meusdnas == "T") {
                meusdnas = "A"
                rna.push(meusdnas)
            } else if (meusdnas == "A") {
                meusdnas = "U"
                rna.push(meusdnas)
            }

        }); let rnastring = rna.join("")
        console.log(rnastring)


    }

}


const sequenciadedna = new Dnas("ATGCCGAAATTTGCG");



sequenciadedna.DNAforRNA(sequenciadedna.sequencia)











