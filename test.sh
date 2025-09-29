curl -H "X-API-KEY: APISIX_API_KEY" -X PUT -d '{
    "id": "1",
    "uri": "/*",
    "plugins": {
        "custom-openid-connect": {
            "realm": "master",
            "client_id": "apisix",
            "client_secret": "CLIENT_SECRET",
            "discovery": "https://keycloak.digitaltwin.brussels/realms/master/.well-known/openid-configuration",
            "introspection_endpoint": "https://keycloak.digitaltwin.brussels/realms/master/protocol/openid-connect/token/introspect",
            "scope": "openid",
            "bearer_only": true,
            "ssl_verify": false,
            "unauth_action": "pass"
        }
    },
    "upstream": {
        "type": "roundrobin",
        "nodes": {
            "backend:3000": 1
        }
    }
}' http://localhost:9180/apisix/admin/routes/1

curl -H "X-API-KEY: APISIX_API_KEY" http://localhost:9180/apisix/admin/routes
