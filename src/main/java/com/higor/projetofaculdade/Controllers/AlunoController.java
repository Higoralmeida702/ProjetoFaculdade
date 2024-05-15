package com.higor.projetofaculdade.Controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.higor.projetofaculdade.Entities.AlunoInformacoes;
import com.higor.projetofaculdade.Entities.RespostaModelo;
import com.higor.projetofaculdade.Services.AlunoService;


@RestController
@CrossOrigin (origins = "*")
public class AlunoController {

    @Autowired
    private AlunoService alunoService;

    @GetMapping("/buscarPorCPF/{cpf}")
    public ResponseEntity<?> buscarAlunoPorCPF(@PathVariable int cpf) {
        try {
            Optional<AlunoInformacoes> aluno = alunoService.buscarPorCPF(cpf);
            if (aluno.isPresent()) {
                return ResponseEntity.ok(aluno.get());
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erro ao buscar aluno por CPF: " + e.getMessage());
        }
    }

    @DeleteMapping("/remover/{id}")
    public ResponseEntity<RespostaModelo> remover (@PathVariable Integer id){
        return alunoService.remover(id);
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody AlunoInformacoes alunoInformacoes) {
        return alunoService.cadastrarAlterar(alunoInformacoes, "cadastrar");
    }

    @GetMapping("/listar")
    public Iterable<AlunoInformacoes> listar() {
        return alunoService.listar();
    }

    @GetMapping("/")
    public String rota() {
        return "API de produtos funcionando";
    }

    @PutMapping("/alterar/{cpf}")
        public ResponseEntity<?> alterar(@PathVariable int cpf, @RequestBody AlunoInformacoes alunoInformacoes) {
        try {
        Optional<AlunoInformacoes> alunoOptional = alunoService.buscarPorCPF(cpf);
        if (alunoOptional.isPresent()) {
            AlunoInformacoes aluno = alunoOptional.get();
            aluno.setOcorrencia(alunoInformacoes.getOcorrencia());
            aluno.setNome(alunoInformacoes.getNome());
            aluno.setEstado(alunoInformacoes.getEstado());
            aluno.setCelular(alunoInformacoes.getCelular());
            aluno.setCidade(alunoInformacoes.getCidade());
            aluno.setEstado(alunoInformacoes.getEstado());
            aluno.setEmail(alunoInformacoes.getEmail());
            aluno.setRg(alunoInformacoes.getRg());
            aluno.setCpf(alunoInformacoes.getCpf());
            aluno.setMatricula(alunoInformacoes.getMatricula());
            aluno.setOrgaoExpedidor(alunoInformacoes.getOrgaoExpedidor());
            aluno.setNomePai(alunoInformacoes.getNomePai());
            aluno.setNomeMae(alunoInformacoes.getNomeMae());
            aluno.setTurno(alunoInformacoes.getTurno());
            aluno.setDataNascimento(alunoInformacoes.getDataNascimento());
            aluno.setBairro(alunoInformacoes.getBairro());
            aluno.setNacionalidade(alunoInformacoes.getNacionalidade());
            alunoService.cadastrarAlterar(aluno, "alterar");
            return ResponseEntity.ok("Informação alterada com sucesso para o aluno de CPF: " + cpf);
        } else {
            return ResponseEntity.notFound().build();
        }
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Erro ao alterar informação para o aluno de CPF: " + cpf + ": " + e.getMessage());
    }
}


}

