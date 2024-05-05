package com.higor.projetofaculdade.Services;

import com.higor.projetofaculdade.Entities.AlunoInformacoes;
import com.higor.projetofaculdade.Entities.RespostaModelo;
import com.higor.projetofaculdade.Repositories.AlunosInfoRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class AlunoService {

    @Autowired
    private AlunosInfoRepository alunosRepository;

    @Autowired
    private RespostaModelo respostaModelo;

    public Iterable<AlunoInformacoes> listar() {
        return alunosRepository.findAll();
    }

    public ResponseEntity<?> cadastrarAlterar(AlunoInformacoes alunoInformacoes, String acao) {
        if (alunoInformacoes.getNome().isEmpty()) {
            respostaModelo.setMensagem("O nome do aluno é obrigatorio");
            return new ResponseEntity<RespostaModelo>(respostaModelo, HttpStatus.BAD_REQUEST);
        } else if (alunoInformacoes.getCpf() == 0) {
            respostaModelo.setMensagem("O cpf do aluno é obrigatorio");
            return new ResponseEntity<RespostaModelo>(respostaModelo, HttpStatus.BAD_REQUEST);
        }else {
            if (acao.equals("cadastrar")) {
                return new ResponseEntity <AlunoInformacoes>(alunosRepository.save(alunoInformacoes), HttpStatus.CREATED);
            }else {
                return new ResponseEntity<AlunoInformacoes>(alunosRepository.save(alunoInformacoes), HttpStatus.OK);
            }
        }
    }

    public ResponseEntity<RespostaModelo> remover (Integer id){
        alunosRepository.deleteById(id);
        respostaModelo.setMensagem("O aluno foi removido com sucesso");
        return new ResponseEntity<RespostaModelo>(respostaModelo, HttpStatus.OK);
    }
}