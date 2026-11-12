FROM eclipse-temurin:27-jdk AS build
WORKDIR /workspace
COPY gradlew settings.gradle build.gradle ./
COPY gradle ./gradle
COPY ApiGateway ./ApiGateway
COPY ConfigServer ./ConfigServer
COPY DiscoveryServer ./DiscoveryServer
ARG MODULE
RUN chmod +x gradlew && ./gradlew :${MODULE}:bootJar --no-daemon

FROM eclipse-temurin:27-jre
WORKDIR /app
ARG MODULE
COPY --from=build /workspace/${MODULE}/build/libs/*.jar app.jar
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
