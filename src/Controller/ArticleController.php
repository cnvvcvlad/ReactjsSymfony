<?php

namespace App\Controller;

use App\Entity\Article;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

class ArticleController extends AbstractController
{
    /**
     * @Route("/api/articles", name="articles")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function getArticles()
    {
        $articles = $this->getDoctrine()->getRepository(Article::class)->findAll();
        
        //serialisation(normalisation + encodage)
        return $this->json($articles, 200, ['Access-Control-Allow-Origin : "Content-Type", "Authorization"'], ['groups' => 'post:read']);
    }
}
