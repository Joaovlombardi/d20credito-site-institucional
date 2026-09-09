# Conteúdo tirado da Home, para as próximas páginas

Base: `TEXTOS_HOME.md`. Todo o conteúdo abaixo é factualmente correto e aprovado
naquele documento, mas foi retirado da Home para não sobrecarregar a página.
As regras globais do `TEXTOS_HOME.md` continuam valendo em todas as páginas.

O que ficou na Home: a versão curta de cada assunto. O que está aqui é o
aprofundamento.

---

## Para a página Legal Equity

### Requisitos (estava na seção "Para quem é")

Título da lista: **Quem pode contratar**

- Processo trabalhista em andamento
- Idade entre 18 e 74 anos
- Uma operação ativa por CPF
- Conta bancária no seu próprio nome para receber
- Sujeito a análise jurídica, de compliance e de crédito

> Todos são parâmetros travados do Roteiro Operacional, não são estimativa.

### Condições completas do crédito

Crédito de até R$ 50.000, com prazo de 6 a 60 meses e possibilidade de carência
de até 90 dias, sujeita a aprovação. O pagamento pode ser em parcelas mensais ou
em parcela única ao final da operação. Valor, taxa e Custo Efetivo Total dependem
da análise do seu caso e são apresentados por escrito antes da assinatura.

> Na Home ficou só "até R$ 50.000, de 6 a 60 meses", que é o mínimo exigido pela
> política do Google para produto financeiro.

### Detalhamento da esteira (estava em "Como funciona")

- Passo 1: a conversa é com uma pessoa da equipe, gratuita e sem compromisso.
- Passo 2: o jurídico da D20 analisa o processo dado em garantia, e a operação
  passa por compliance e por análise de crédito. Nem todo caso é aprovado.
- Passo 4: com a CCB assinada eletronicamente, a UY3, instituição financeira
  parceira, libera o valor na sua conta.
- Microcopy: o prazo total varia conforme a análise jurídica, de compliance e de
  crédito.

> Não escreva "cai por Pix" nem prometa liberação em X dias.

### FAQ que saiu da Home

**Em qual conta eu recebo?**
A conta precisa estar no seu próprio nome. Algumas instituições de pagamento não
são aceitas para a liberação, e a nossa equipe confirma isso com você antes da
assinatura.

### Texto longo da garantia (versão curta ficou na Home)

O que existe é uma garantia registrada em contrato sobre o direito do seu
processo, limitada ao saldo devedor. Se o processo pagar mais que isso, a
diferença é sua.

---

## Para a página Sobre

### Dados institucionais completos (estavam nos cards de Segurança)

- **D20 Capital Ltda**, CNPJ 64.776.682/0001-01
- Endereço: Av. Brigadeiro Faria Lima, 1713, conjunto 82, Jardim Paulistano,
  São Paulo, SP
- Correspondente bancário, nos termos da Resolução CMN nº 4.935/2021
- **UY3 Sociedade de Crédito Direto S.A.**, CNPJ 39.587.424/0001-30, instituição
  financeira autorizada e fiscalizada pelo Banco Central do Brasil

> Os CNPJs e o endereço continuam visíveis no rodapé de todas as páginas, que lê
> de `lib/site.ts`. Foram tirados só dos cards da Home, onde estouravam o card.

---

## Para a página Contato

### Canais oficiais (estava no fim da seção Segurança)

Nossos canais oficiais são estes, e só estes:

- WhatsApp: (11) 91970-2271
- Telefone: (11) 5282-4130
- E-mail: contato@d20credito.com.br
- Site: d20credito.com.br
- Instagram: @d20credito

### Versão completa do aviso antifraude

A D20 Cred nunca pede depósito, Pix, transferência ou qualquer pagamento antes
de liberar o crédito, e nunca pede a sua senha, o seu acesso gov.br ou código
recebido por SMS. Se alguém pedir isso em nosso nome, é golpe.

> A versão curta ficou na Home. A completa cabe bem na página de Contato, junto
> da lista de canais oficiais.

### Horário de atendimento

Usar `[PLACEHOLDER]`. Existe divergência interna aberta entre 9h às 18h e
8h às 20h.

---

## Pendências herdadas do TEXTOS_HOME.md

1. **Resolução CMN nº 4.935/2021**: aplicada em `lib/site.ts`, mas o documento
   pede confirmação do jurídico antes de publicar.
2. **Gradientes**: o brandbook diz que gradiente existe só dentro do arquivo do
   logo. Hoje há gradiente no fundo do hero, no card do Legal Equity e no bloco
   de CTA final. Não foi alterado, aguarda decisão.
3. **Pergunta removida** "E se o processo não terminar como o esperado?": vale
   reincluir se o jurídico aprovar uma redação, porque é a dúvida mais material
   do produto.
