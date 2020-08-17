/**
 * Recrutamento e Seleção
 * Serviço do Gestão de Recrutamento e Seleção.
 *
 * OpenAPI spec version: 15.10.4
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Ability } from './ability';
import { DisabilityDto } from './disabilityDto';
import { EducationSection } from './educationSection';
import { GenderDto } from './genderDto';
import { HonorificDto } from './honorificDto';
import { Knowledge } from './knowledge';
import { LanguageSection } from './languageSection';
import { MaritalStatusDto } from './maritalStatusDto';
import { PersonalInterestSection } from './personalInterestSection';
import { PersonalityModelCandidate } from './personalityModelCandidate';
import { PositionSought } from './positionSought';
import { ProfessionalExperienceSection } from './professionalExperienceSection';
import { ResumePhoneContact } from './resumePhoneContact';


export interface Resume { 
    /**
     * Data de nascimento da pessoa.
     */
    birthday?: string;
    /**
     * País.
     */
    country?: string;
    gender?: GenderDto;
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
    educations?: Array<EducationSection>;
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
    personalInterests?: Array<PersonalInterestSection>;
    /**
     * Perfil do Google+.
     */
    googlePlus?: string;
    /**
     * Habilidades.
     */
    abilities?: Array<Ability>;
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
    personalityModelCandidate?: PersonalityModelCandidate;
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
    phoneContacts?: Array<ResumePhoneContact>;
    /**
     * E-mail.
     */
    email?: string;
    honorific?: HonorificDto;
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
    languages?: Array<LanguageSection>;
    /**
     * Experiências profissionais.
     */
    professionalExperiences?: Array<ProfessionalExperienceSection>;
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
    disabilities?: Array<DisabilityDto>;
    /**
     * Número de notificação de currículo incompleto enviadas.
     */
    incompleteNotifications?: number;
    /**
     * Cargos pretendidos.
     */
    positionsSought?: Array<PositionSought>;
    /**
     * Nome completo da pessoa.
     */
    name?: string;
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
    maritalStatus?: MaritalStatusDto;
    /**
     * Conhecimentos.
     */
    knowledges?: Array<Knowledge>;
}
