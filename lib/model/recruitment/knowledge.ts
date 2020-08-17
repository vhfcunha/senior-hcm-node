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
import { ProficiencyDto } from './proficiencyDto';


export interface Knowledge { 
    /**
     * Data de criação.
     */
    createdAt?: Date;
    /**
     * Identificador do currículo a qual o conhecimento está associado.
     */
    resumeId?: string;
    /**
     * Descrição do conhecimento.
     */
    description?: string;
    /**
     * Identificador único da entidade.
     */
    id?: string;
    proficiency?: ProficiencyDto;
    /**
     * Data da última alteração.
     */
    updatedAt?: Date;
}