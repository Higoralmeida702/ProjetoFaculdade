package com.higor.projetofaculdade.Entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "dadosAlunos")
@Getter
@Setter
public class AlunoInformacoes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String nome;
    private String dataNascimento;
    private String cpf;
    private String rg;
    private String matricula;
    private String orgaoExpedidor;
    private String nacionalidade;
    private String celular;
    private String email;
    private String nomePai;
    private String nomeMae;
    private String bairro;
    private String cidade;
    private String estado;
    private String turno;
    private String ocorrencia;

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        if (cpf != null && cpf.matches("\\d{11}")) {
            this.cpf = cpf;
        } else {
            throw new IllegalArgumentException("CPF inválido");
        }
    }

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        if (rg != null && rg.matches("\\d{10}")) {
            this.rg = rg;
        }else {
            throw new IllegalArgumentException("RG inválido");
        }
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        if (celular != null && celular.matches("\\d{11}")) {
            this.celular = celular;
        }else {
            throw new IllegalArgumentException("celular inválido");
        }
    }
}
