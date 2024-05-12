package com.higor.projetofaculdade.Services;

import com.higor.projetofaculdade.Entities.AlunoInformacoes;
import com.higor.projetofaculdade.Entities.RespostaModelo;
import com.higor.projetofaculdade.Repositories.AlunosInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AlunoService {

    @Autowired
    private AlunosInfoRepository alunosRepository;

    @Autowired
    private RespostaModelo respostaModelo;

    public ResponseEntity<?> cadastrarAlterar(AlunoInformacoes alunoInformacoes, String acao) {
        if (alunoInformacoes.getNome().isEmpty() || alunoInformacoes.getDataNascimento() == 0 || alunoInformacoes.getCpf() == 0
                || alunoInformacoes.getRg() == 0 || alunoInformacoes.getCelular() == 0 || alunoInformacoes.getMatricula().isEmpty()
                || alunoInformacoes.getNacionalidade().isEmpty() || alunoInformacoes.getEmail().isEmpty()
                || alunoInformacoes.getNomeMae().isEmpty() || alunoInformacoes.getBairro().isEmpty() || alunoInformacoes.getCidade().isEmpty()
                || alunoInformacoes.getEstado().isEmpty() || alunoInformacoes.getTurno().isEmpty()){
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

    public Optional<AlunoInformacoes> buscarPorCPF(int cpf) {
        return alunosRepository.findByCpf(cpf);
    }

    public Iterable<AlunoInformacoes> listar() {
        return alunosRepository.findAll();
    }

    public ResponseEntity<RespostaModelo> remover (Integer id){
        alunosRepository.deleteById(id);
        respostaModelo.setMensagem("O aluno foi removido com sucesso");
        return new ResponseEntity<RespostaModelo>(respostaModelo, HttpStatus.OK);
    }


}


