/**
 * Folha de Pagamento
 * HCM - Folha de pagamento
 *
 * OpenAPI spec version: 9.0.3
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Company } from './company';
import { Costcenter } from './costcenter';
import { CurrencyType } from './currencyType';
import { Department } from './department';
import { Employee } from './employee';
import { HireType } from './hireType';
import { Jobposition } from './jobposition';
import { Movimentationreason } from './movimentationreason';
import { RaisType } from './raisType';
import { SalaryType } from './salaryType';
import { Wagelevel } from './wagelevel';
import { Workshift } from './workshift';
import { Workstation } from './workstation';


export interface Movimentation { 
    newemploymentrelationship?: RaisType;
    departmentreason?: Movimentationreason;
    /**
     * Data da movimentação (Com timezone)
     */
    datewhen?: Date;
    /**
     * Número da empresa
     */
    newcompanynumber?: number;
    /**
     * Porcentagem de ajuste
     */
    adjustmentpercentage?: number;
    workstationreason?: Movimentationreason;
    employee?: Employee;
    newdepartament?: Department;
    newwagelevel?: Wagelevel;
    /**
     * Porcentagem de desempenho
     */
    performancepercentage?: number;
    /**
     * Valor do adicional criptografado
     */
    newspendingmoneyCrypto?: string;
    /**
     * Id da movimentação
     */
    id?: string;
    jobpositionreason?: Movimentationreason;
    newworkstation?: Workstation;
    newsalarytype?: SalaryType;
    newjobposition?: Jobposition;
    newcurrency?: CurrencyType;
    transfertype?: HireType;
    salaryreason?: Movimentationreason;
    newcostcenter?: Costcenter;
    /**
     * Valor do salário criptografado
     */
    newvalueCrypto?: string;
    /**
     * Data da movimentação (Sem timezone)
     */
    movimentationdate?: Date;
    newworkshift?: Workshift;
    /**
     * Número do registro
     */
    newregisternumber?: number;
    newcompany?: Company;
}
