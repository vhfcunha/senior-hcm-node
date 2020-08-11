/**
 * recruitment
 * Serviço do Gestão de Recrutamento e Seleção.
 *
 * OpenAPI spec version: develop-SNAPSHOT
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/**
 * Currículo.
 */
export interface Resume { 
    /**
     * Data de nascimento da pessoa.
     */
    birthday: string;
    /**
     * País.
     */
    country?: string;
    /**
     * Gênero (Sexo).
     */
    gender: any;
    /**
     * Cidade.
     */
    city?: string;
    /**
     * Informação adicional referente ao endereço (e.g. Número do apartamento, Bloco do residencial, Ponto de referência).
     */
    additional?: string;
    /**
     * Código postal.
     */
    postalCode?: string;
    /**
     * Formação acadêmica.
     */
    educations?: Array<any>;
    /**
     * Perfil do Instagram.
     */
    instagram?: string;
    /**
     * Preferencia de idoma do candidato.
     */
    locale?: string;
    /**
     * Pretensão salarial.
     */
    salaryExpectation?: string;
    /**
     * Interesses pessoais.
     */
    personalInterests?: Array<any>;
    /**
     * Perfil do Google+.
     */
    googlePlus?: string;
    /**
     * Habilidades.
     */
    abilities?: Array<any>;
    /**
     * Número da residência/comércio.
     */
    number?: string;
    /**
     * Usuário do Skype.
     */
    skype?: string;
    /**
     * Data de criação.
     */
    createdAt?: Date;
    /**
     * Perfil do Twitter.
     */
    twitter?: string;
    /**
     * Modelo de personalidade do candidato
     */
    personalityModelCandidate?: any;
    /**
     * Quantidade de filhos.
     */
    children?: number;
    /**
     * CPF (Cadastro de Pessoas Físicas) da pessoa.
     */
    cpf?: string;
    /**
     * Indica se a pessoa não tem experiência profissional.
     */
    hasNotProfessionalExperience?: boolean;
    /**
     * Identificador único da entidade.
     */
    id?: string;
    /**
     * Estado do país.
     */
    state?: string;
    /**
     * Anexo do currículo.
     */
    attachmentId?: string;
    /**
     * Contatos telefônicos.
     */
    phoneContacts?: Array<any>;
    /**
     * E-mail.
     */
    email: string;
    /**
     * Honorífico.
     */
    honorific?: any;
    /**
     * Data da última alteração.
     */
    updatedAt?: Date;
    /**
     * Logradouro/Rua.
     */
    address?: string;
    /**
     * Idiomas.
     */
    languages?: Array<any>;
    /**
     * Experiências profissionais.
     */
    professionalExperiences?: Array<any>;
    /**
     * Link da foto miniatura
     */
    photoThumbnailLink?: string;
    /**
     * Perfil do Facebook.
     */
    facebook?: string;
    /**
     * Resumo profissional.
     */
    professionalSummary?: string;
    /**
     * Foto.
     */
    photoId?: string;
    /**
     * Disponível para deslocalização.
     */
    relocation?: boolean;
    /**
     * Objetivo profissional.
     */
    professionalGoal?: string;
    /**
     * Perfil do LinkedIn.
     */
    linkedIn?: string;
    /**
     * Deficiências da pessoa.
     */
    disabilities?: Array<any>;
    /**
     * Número de notificação de currículo incompleto enviadas.
     */
    incompleteNotifications?: number;
    /**
     * Cargos pretendidos.
     */
    positionsSought?: Array<any>;
    /**
     * Nome completo da pessoa.
     */
    name: string;
    /**
     * Bairro/Distrito.
     */
    neighborhood?: string;
    /**
     * Link da foto
     */
    photoLink?: string;
    /**
     * Disponível para viagens.
     */
    travel?: boolean;
    /**
     * Estado civil.
     */
    maritalStatus?: any;
    /**
     * Conhecimentos.
     */
    knowledges?: Array<any>;
}