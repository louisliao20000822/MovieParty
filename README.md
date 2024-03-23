# MovieParty

一個簡單的影音串流網站支援聊天室功能以及朋友同步觀看功能（類似netflix party）

### Deployment

1. Install packages: ```npm install```(backend and frontend both)
2. Start MySQL server
3. Import database:
    1. ```mysql -u <user_name> -p <stylish_db_name> < movie-party.sql```
4. Create config: ```.env``` for back-end (You can copy the schema from template: ```.env-template```)
    1. set `DB_HOST`, `DB_USERNAME`, `DB_PASSWORD`, `DB_DATABASE` for MySQL server (`DB_DATABASE_TEST` is Optional)
7. Start server: ```npm run backend && npm run frontend```
8. Clear Browser localStorage if needed. The same address will use the same space to records localStorage key-value pairs and it may conflict with mine. (Optional)

