import { caixas } from "../model/estudio_da_bia.js";

export const getIndex = async (req, res) => {
  try {
    const estudio_da_bia = await caixas.findAll();
    res.status(200).render("index.ejs", { estudio_da_bia });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const getDetalhes = async (req, res) => {
  try {
    const caixa = await caixas.findByPk(req.params.id_caixa);
    res.status(200).render("detalhes.ejs", { caixa });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const getDeletar = async (req, res) => {
  try {
    await caixas.destroy({
      where: {
        id_caixa: req.params.id_caixa,
      },
    });
    res.status(200).redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const getCriar = (req, res) =>{
  res.render("criar.ejs")
  
}

export const postCriar = async (req,res)=>{
  try {
    const { nome, img, valor, medidas, tempocriacao, quantidademinima, descricao } = req.body
    await  caixas.create({
      nome, img, valor, medidas, tempocriacao, quantidademinima, descricao
    })
    res.status(200).redirect('/')
}
catch(err){
    res.send(err.message)
}
}


export const getEditar = async (req, res) => {
  const estudio_da_bia = await caixas.findByPk(req.params.id_caixa)
  res.status(200).render('editar.ejs', {
    estudio_da_bia
  })
}

export const postEditar = async (req, res) => {
  const { nome, img, valor, medidas, tempocriacao, quantidademinima, descricao } = req.body
  try {
      await caixas.update({
          nome: nome, 
          img: img, 
          valor: valor,
          medidas: medidas,
          tempocriacao: tempocriacao,
          quantidademinima: quantidademinima,
          descricao: descricao,
      }, {
          where: {
              id_caixa: req.params.id_caixa
          }
      })

      res.redirect('/')
  }

  catch(err) {
      res.status(500).send(err.message)
  }
}