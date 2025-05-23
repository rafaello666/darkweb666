from core import main


def test_main_output(capsys):
    """Verify main() prints expected output."""
    main.main()
    captured = capsys.readouterr()
    assert "Core loaded" in captured.out
