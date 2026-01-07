FROM busybox:stable
ARG TARGETARCH

HEALTHCHECK --interval=30s --timeout=10s --retries=3 CMD curl --fail http://localhost:8080/health || exit 1

RUN mkdir -p /var/log/manager /var/lib/manager/data /var/lib/manager/extra /var/lib/gridbeat/plugins

COPY linux/${TARGETARCH}/manager /manager
#COPY plugins/*.so /usr/lib/gridbeat/plugins/

VOLUME /var/log/manager /var/lib/manager/data /var/lib/manager/extra

EXPOSE 8080

RUN  chmod +x /manager
CMD ["/manager"]
