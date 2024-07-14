if !(docker network ls -f name=test-network | grep "test-network"); then
    docker network create test-network    
fi

