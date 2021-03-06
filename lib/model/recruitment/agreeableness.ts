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
import { BigFive } from './bigFive';


export interface Agreeableness { 
    /**
     * Faceta de confiança.
     */
    trust?: number;
    /**
     * Valor desta dimensão
     */
    dimensionValue?: number;
    /**
     * Faceta de modéstia.
     */
    modesty?: number;
    /**
     * Faceta de altruísmo.
     */
    altruism?: number;
    /**
     * Faceta de moralidade.
     */
    morality?: number;
    /**
     * Identificador único da entidade.
     */
    id?: string;
    /**
     * Faceta de empatia.
     */
    sympathy?: number;
    bigFive?: BigFive;
    /**
     * Faceta de cooperação.
     */
    cooperation?: number;
}
