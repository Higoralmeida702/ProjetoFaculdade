package com.higor.projetofaculdade.Controllers;

import com.higor.projetofaculdade.Entities.AlunoInformacoes;
import com.higor.projetofaculdade.Entities.RespostaModelo;
import com.higor.projetofaculdade.Services.AlunoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin (origins = "*")
public class AlunoController {

    @Autowired
    private AlunoService alunoService;

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
