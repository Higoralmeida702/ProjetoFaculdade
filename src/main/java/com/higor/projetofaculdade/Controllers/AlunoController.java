package com.higor.projetofaculdade.Controllers;

import com.higor.projetofaculdade.Entities.AlunoInformacoes;
import com.higor.projetofaculdade.Entities.RespostaModelo;
import com.higor.projetofaculdade.Services.AlunoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


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

    @PutMapping ("/alterar")
    public ResponseEntity<?> alterar (@RequestBody AlunoInformacoes alunoInformacoes){
        return alunoService.cadastrarAlterar(alunoInformacoes, "alterar");
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


}
