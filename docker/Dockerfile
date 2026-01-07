FROM busybox:stable
ARG TARGETARCH

HEALTHCHECK --interval=30s --timeout=10s --retries=3 CMD curl --fail http://localhost:8080/health || exit 1

RUN mkdir -p /var/log/ems /var/lib/ems/data /var/lib/ems/extra

COPY linux/${TARGETARCH}/ems /ems
#COPY plugins/*.so /usr/lib/gridbeat/plugins/

VOLUME /var/log/ems /var/lib/ems/data /var/lib/ems/extra

EXPOSE 8080

RUN  chmod +x /ems
CMD ["/ems", "server"]
