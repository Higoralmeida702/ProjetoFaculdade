package com.higor.projetofaculdade.Services;

import com.higor.projetofaculdade.Entities.AlunoInformacoes;
import com.higor.projetofaculdade.Entities.RespostaModelo;
import com.higor.projetofaculdade.Repositories.AlunosInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;

@Service
public class AlunoService {

    @Autowired
    private AlunosInfoRepository alunosRepository;

    @Autowired
    private RespostaModelo respostaModelo;

    public ResponseEntity<?> cadastrarAlterar(AlunoInformacoes alunoInformacoes, String acao) {
        if (alunoInformacoes.getNome().isEmpty() || alunoInformacoes.getDataNascimento().isEmpty()|| alunoInformacoes.getCpf().isEmpty()
                || alunoInformacoes.getRg().isEmpty() || alunoInformacoes.getCelular().isEmpty() || alunoInformacoes.getMatricula().isEmpty()
                || alunoInformacoes.getNacionalidade().isEmpty() || alunoInformacoes.getEmail().isEmpty()
                || alunoInformacoes.getNomeMae().isEmpty() || alunoInformacoes.getBairro().isEmpty() || alunoInformacoes.getCidade().isEmpty()
                || alunoInformacoes.getEstado().isEmpty() || alunoInformacoes.getTurno().isEmpty()) {
            respostaModelo.setMensagem("Todos os campos precisam estar devidamente preenchidos");
            return new ResponseEntity<RespostaModelo>(respostaModelo, HttpStatus.BAD_REQUEST);

        } else {
            if (acao.equals("cadastrar")) {
                return new ResponseEntity<AlunoInformacoes>(alunosRepository.save(alunoInformacoes), HttpStatus.CREATED);
            } else {
                return new ResponseEntity<AlunoInformacoes>(alunosRepository.save(alunoInformacoes), HttpStatus.OK);
            }
        }
    }

    public Optional<AlunoInformacoes> buscarPorCPF(String cpf) {
        return alunosRepository.findByCpf(cpf);
    }

    public Iterable<AlunoInformacoes> listar() {
        return alunosRepository.findAll();
    }

    public ResponseEntity<RespostaModelo> remover(Integer id) {
        alunosRepository.deleteById(id);
        respostaModelo.setMensagem("O aluno foi removido com sucesso");
        return new ResponseEntity<RespostaModelo>(respostaModelo, HttpStatus.OK);
    }
    public ResponseEntity<?> atualizarAluno(String cpf, AlunoInformacoes alunoInformacoes) {
        Optional<AlunoInformacoes> alunoOptional = alunosRepository.findByCpf(cpf);
        if (alunoOptional.isPresent()) {
            AlunoInformacoes aluno = alunoOptional.get();

            if (alunoInformacoes.getOcorrencia() != null) {
                aluno.setOcorrencia(alunoInformacoes.getOcorrencia());
            }
            if (alunoInformacoes.getCpf() != null) {
                aluno.setCpf(alunoInformacoes.getCpf());
            }
            if (alunoInformacoes.getNome() != null) {
                aluno.setNome(alunoInformacoes.getNome());
            }
            if (alunoInformacoes.getEstado() != null) {
                aluno.setEstado(alunoInformacoes.getEstado());
            }
            if (alunoInformacoes.getCelular() != null) {
                aluno.setCelular(alunoInformacoes.getCelular());
            }
            if (alunoInformacoes.getCidade() != null) {
                aluno.setCidade(alunoInformacoes.getCidade());
            }
            if (alunoInformacoes.getEmail() != null) {
                aluno.setEmail(alunoInformacoes.getEmail());
            }
            if (alunoInformacoes.getRg() != null) {
                aluno.setRg(alunoInformacoes.getRg());
            }
            if (alunoInformacoes.getNacionalidade() != null) {
                aluno.setNacionalidade(alunoInformacoes.getNacionalidade());
            }
            if (alunoInformacoes.getMatricula() != null) {
                aluno.setMatricula(alunoInformacoes.getMatricula());
            }
            if (alunoInformacoes.getOrgaoExpedidor() != null) {
                aluno.setOrgaoExpedidor(alunoInformacoes.getOrgaoExpedidor());
            }
            if (alunoInformacoes.getNomePai() != null) {
                aluno.setNomePai(alunoInformacoes.getNomePai());
            }
            if (alunoInformacoes.getNomeMae() != null) {
                aluno.setNomeMae(alunoInformacoes.getNomeMae());
            }
            if (alunoInformacoes.getTurno() != null) {
                aluno.setTurno(alunoInformacoes.getTurno());
            }
            if (alunoInformacoes.getDataNascimento() != null) {
                aluno.setDataNascimento(alunoInformacoes.getDataNascimento());
            }
            if (alunoInformacoes.getBairro() != null) {
                aluno.setBairro(alunoInformacoes.getBairro());
            }


            alunosRepository.save(aluno);
            return ResponseEntity.ok("Informação alterada com sucesso para o aluno de CPF: " + cpf);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}

