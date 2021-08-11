# tdd-node

### node.js

- 이벤트 기반의 비동기 I/O 프레임워크
- 기존 프로세싱은 싱글 쓰레드의 이벤트 루프에서 이루어짐.
- 긴 작업은 이벤트 루프(싱글 쓰레드)에서 워커 쓰레드에 전달하여 비동기로 진행한 후 결과를 이벤트 루프로 전달함.
- 모듈 관리는 CommonJS.

### express.js

- Node.js를 위한 웹 프레임워크

### postgreSQL 13.3

- 다운로드
    - https://www.enterprisedb.com/postgresql-tutorial-resources-training?cid=437 (WINDOW)
    - https://www.enterprisedb.com/postgresql-tutorial-resources-training?cid=438 (MAC)
    
- 설치절차
    - >psql -U postgres
    - >postgres=# CREATE DATABASE pg_db;
    - >postgres=# \q
    - >psql -U postgres -d pg_db
      
    - >CREATE TABLE users (  
        id integer NOT NULL,  
        name varchar(20) NOT NULL,  
        CONSTRAINT user_pk PRIMARY KEY (id)  
      );
    - >CREATE SEQUENCE users_seq;
      > 

### express.js 프로젝트 구조

- https://velog.io/@hanhee/node.js-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B5%AC%EC%A1%B0
- https://velog.io/@hopsprings2/%EA%B2%AC%EA%B3%A0%ED%95%9C-node.js-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%95%84%ED%82%A4%ED%85%8D%EC%B3%90-%EC%84%A4%EA%B3%84%ED%95%98%EA%B8%B0
- https://blog.naver.com/PostView.nhn?isHttpsRedirect=true&blogId=jhc9639&logNo=222023396761&categoryNo=99&parentCategoryNo=0