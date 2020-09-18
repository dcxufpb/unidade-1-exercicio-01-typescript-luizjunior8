const nome_loja: string = "Arcos Dourados Com. de Alimentos LTDA"
const logradouro: string  = "Av. Projetada Leste"
const numero: number  = 500
const complemento: string  = "EUC F32/33/34"
const bairro: string  = "Br. Sta Genebra"
const municipio: string  = "Campinas"
const estado: string  = "SP"
const cep: string  = "13080-395"
const telefone: string  = "(19) 3756-7408"
const observacao: string  = "Loja 1317 (PDP)"
const cnpj: string  = "42.591.651/0797-34"
const inscricao_estadual: string  = "244.898.500.113"


function imprime_dados_loja() {
  // Implemente aqui
  return `${nome_loja}\n`+
  `${logradouro}, ${numero} ${complemento}\n`+
  `${bairro} - ${municipio} - ${estado}\n`+
  `CEP:${cep} Tel ${telefone}\n`+
  `${observacao}\n`+
  `CNPJ: ${cnpj}\n`+
  `IE: ${inscricao_estadual}\n`
}

module.exports = imprime_dados_loja;
