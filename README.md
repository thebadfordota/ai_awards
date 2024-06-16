#  Репозиторий для конкурса AiAwards 

### Участники команды

* Скрынник Александр Евгеньевич
* Бабайкин Василий Николаевич

### Для локального развёртывания проекта необходимо:
1) Установить docker-desktop либо docker. Найти инструкцию по установке и скачать можно по данной ссылке https://www.docker.com/products/docker-desktop/
2) В директории backend содержимое файла `.env.sample` необходимо скопировать в файл `.env.dev`, заполнив необходимые параметры
3) В корне проекта необходимо прописать следующую команду: 
```bash
docker-compose -f .deploy/robolife2_develop/docker-compose.yml  up -d --build
```
4) После нужно заполнить базу данных начальными значениями. Необходимо перейти в директорию backend и ввести следующие команды:
- docker exec -it django_server python manage.py loaddata metrics.json
- docker exec -it django_server python manage.py loaddata region_norm.json
- docker exec -it django_server python manage.py update_metrics

5) После успешной установки нужно обратиться по следующей ссылке, чтобы открыть приложение: http://localhost:3000
